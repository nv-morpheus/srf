/*
 * SPDX-FileCopyrightText: Copyright (c) 2021-2023, NVIDIA CORPORATION & AFFILIATES. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "internal/control_plane/client.hpp"

#include "internal/control_plane/state/root_state.hpp"
#include "internal/grpc/progress_engine.hpp"

#include "mrc/core/async_service.hpp"
#include "mrc/core/task_queue.hpp"
#include "mrc/edge/edge_builder.hpp"
#include "mrc/node/operators/conditional.hpp"
#include "mrc/node/rx_sink.hpp"
#include "mrc/protos/architect.grpc.pb.h"
#include "mrc/protos/architect.pb.h"
#include "mrc/protos/architect_state.pb.h"
#include "mrc/runnable/runner.hpp"

#include <boost/fiber/future/promise.hpp>
#include <google/protobuf/any.pb.h>
#include <grpcpp/grpcpp.h>
#include <rxcpp/rx.hpp>

#include <map>
#include <memory>
#include <ostream>
#include <vector>

namespace mrc::control_plane {

Client::Client(runnable::IRunnableResourcesProvider& resources) :
  AsyncService("ControlPlaneClient"),
  runnable::RunnableResourcesProvider(resources),
  m_cq(std::make_shared<grpc::CompletionQueue>()),
  m_owns_progress_engine(true)
{}

// Client::Client(resources::PartitionResourceBase& base, std::shared_ptr<grpc::CompletionQueue> cq) :
//   m_cq(std::move(cq)),
//   m_owns_progress_engine(false)
// {}

// Client::Client(resources::PartitionResourceBase& base) :
//   m_cq(std::make_shared<grpc::CompletionQueue>()),
//   m_owns_progress_engine(true)
// {}

Client::~Client()
{
    AsyncService::call_in_destructor();
}

const Client::State& Client::state() const
{
    return m_state;
}

MachineID Client::machine_id() const
{
    return m_machine_id;
}

const mrc::runnable::LaunchOptions& Client::launch_options() const
{
    return m_launch_options;
}

void Client::request_update()
{
    issue_event(protos::ClientEventRequestStateUpdate);
    // std::lock_guard<decltype(m_mutex)> lock(m_mutex);
    // if (!m_update_in_progress && !m_update_requested)
    // {
    //     m_update_requested = true;
    //     issue_event(protos::ClientEventRequestStateUpdate);
    // }
}

// edge::IWritableAcceptor<const protos::ControlPlaneState>& Client::state_update_stream() const
// {
//     return *m_state_update_stream;
// }

rxcpp::observable<state::ControlPlaneState> Client::state_update_obs() const
{
    // Return the observable but skip the first, default value so we only return values sent from the server
    return m_state_update_sub.get_observable().filter([this](auto& x) {
        return this->m_state_update_count > 0;
    });
}

void Client::do_service_start(std::stop_token stop_token)
{
    m_launch_options.engine_factory_name = "main";
    m_launch_options.pe_count            = 1;
    m_launch_options.engines_per_pe      = 1;

    // TODO(MDD): Figure out how to get the options back into this object
    // auto url = this-> runnable().system().options().architect_url();
    std::string url;

    // If no URL is supplied, we are creating a local server
    if (url.empty())
    {
        url = "localhost:13337";
    }

    auto channel = grpc::CreateChannel(url, grpc::InsecureChannelCredentials());
    m_stub       = mrc::protos::Architect::NewStub(channel);

    Future<void> progress_engine_future;

    if (m_owns_progress_engine)
    {
        // CHECK(m_cq);
        // auto progress_engine  = std::make_unique<rpc::ProgressEngine>(m_cq);
        // auto progress_handler = std::make_unique<rpc::PromiseHandler>();

        // mrc::make_edge(*progress_engine, *progress_handler);

        // // m_progress_handler =
        // //     runnable().launch_control().prepare_launcher(launch_options(),
        // std::move(progress_handler))->ignition();

        // this->child_runnable_start("ProgressHandler", launch_options(), std::move(progress_handler));

        // // m_progress_engine =
        // //     runnable().launch_control().prepare_launcher(launch_options(),
        // std::move(progress_engine))->ignition(); this->child_runnable_start("ProgressEngine", launch_options(),
        // std::move(progress_engine));

        progress_engine_future = this->runnable().main().enqueue([this, stop_token]() {
            rpc::ProgressEvent event;
            std::uint64_t backoff = 128;

            while (!stop_token.stop_requested())
            {
                switch (m_cq->AsyncNext<gpr_timespec>(&event.tag, &event.ok, gpr_time_0(GPR_CLOCK_REALTIME)))
                {
                case grpc::CompletionQueue::NextStatus::GOT_EVENT: {
                    backoff       = 1;
                    auto* promise = static_cast<boost::fibers::promise<bool>*>(event.tag);
                    promise->set_value(event.ok);
                }
                break;
                case grpc::CompletionQueue::NextStatus::TIMEOUT: {
                    // if (backoff < 1048576)
                    if (backoff < 1024)
                    {
                        backoff = (backoff << 1);
                    }
                    boost::this_fiber::sleep_for(std::chrono::microseconds(backoff));
                }
                break;
                case grpc::CompletionQueue::NextStatus::SHUTDOWN: {
                    DVLOG(10) << "progress engine complete";
                    return;
                }
                }
            }
        });
    }

    auto prepare_fn = [this](grpc::ClientContext* context) {
        CHECK(m_stub);
        return m_stub->PrepareAsyncEventStream(context, m_cq.get());
    };

    m_response_conditional = std::make_unique<node::Conditional<bool, event_t>>([](const event_t& e) {
        return e.msg.event() == protos::EventType::Response;
    });

    // response handler - optionally add concurrency here
    auto response_handler = std::make_unique<node::RxSink<event_t>>([](event_t event) {
        auto* promise = reinterpret_cast<Promise<protos::Event>*>(event.msg.tag());
        if (promise != nullptr)
        {
            promise->set_value(std::move(event.msg));
        }
    });

    // event handler - optionally add concurrency here
    auto event_handler = std::make_unique<node::RxSink<event_t>>([this](event_t event) {
        this->do_handle_event(event);
    });

    mrc::make_edge(*m_response_conditional->get_source(true), *response_handler);

    mrc::make_edge(*m_response_conditional->get_source(false), *event_handler);

    // make stream and attach event handler
    m_stream = std::make_shared<stream_t::element_type>(prepare_fn, runnable());
    m_stream->attach_to(*m_response_conditional);

    // // Create the stream for events from the server
    // m_state_update_entrypoint = std::make_unique<mrc::node::WritableEntrypoint<const protos::ControlPlaneState>>();
    // m_state_update_stream     = std::make_unique<mrc::node::Broadcast<const protos::ControlPlaneState>>();
    // mrc::make_edge(*m_state_update_entrypoint, *m_state_update_stream);

    // // ensure all downstream event handlers are constructed before constructing and starting the event handler
    // m_connections_update_channel = std::make_unique<mrc::node::WritableEntrypoint<const protos::StateUpdate>>();
    // m_connections_manager        = std::make_unique<client::ConnectionsManager>(*this,
    // *m_connections_update_channel);

    // launch runnables
    // m_response_handler =
    //     runnable().launch_control().prepare_launcher(launch_options(), std::move(response_handler))->ignition();
    this->child_runnable_start("ResponseHandler", launch_options(), std::move(response_handler));
    // m_event_handler =
    //     runnable().launch_control().prepare_launcher(launch_options(), std::move(event_handler))->ignition();
    this->child_runnable_start("EventHandler", launch_options(), std::move(event_handler));

    // await initialization
    m_writer = m_stream->await_init();

    if (!m_writer)
    {
        // forward_state(State::FailedToConnect);
        LOG(FATAL) << "unable to connect to control plane";
    }

    // Now, on stop, shutdown the writer
    std::stop_callback stop_callback(stop_token, [this]() {
        if (m_writer)
        {
            m_writer->finish();
            m_writer.reset();
        }
    });

    auto status = m_stream->await_fini();
    // m_event_handler->await_join();
    // m_connections_update_channel.reset();

    if (m_owns_progress_engine)
    {
        m_cq->Shutdown();
        progress_engine_future.get();
        // m_progress_engine->await_join();
        // m_progress_handler->await_join();
    }
}
void Client::do_service_kill()
{
    if (m_writer)
    {
        m_writer->cancel();
        m_writer.reset();
    }
}

// void Client::do_service_start() {}

// void Client::do_service_stop()
// {
//     m_writer->finish();
//     m_writer.reset();
// }

// void Client::do_service_kill()
// {
//     m_writer->cancel();
//     m_writer.reset();
// }

// void Client::do_service_await_live()
// {
//     if (m_owns_progress_engine)
//     {
//         m_progress_engine->await_live();
//         m_progress_handler->await_live();
//     }
//     m_event_handler->await_live();

//     // Finally, await on the connection promise
//     m_connected_promise.get_future().get();
// }

// void Client::do_service_await_join()
// {
//     auto status = m_stream->await_fini();
//     m_event_handler->await_join();
//     // m_connections_update_channel.reset();

//     if (m_owns_progress_engine)
//     {
//         m_cq->Shutdown();
//         m_progress_engine->await_join();
//         m_progress_handler->await_join();
//     }
// }

void Client::do_handle_event(event_t& event)
{
    auto saved_event_type = event.msg.event();
    auto saved_event_tag  = event.msg.tag();

    VLOG(10) << "Client: Start handling event: " << saved_event_type << ". With tag: " << saved_event_tag;

    CHECK_NE(event.msg.event(), protos::EventType::Response) << "Responses should be handled by another node";

    switch (event.msg.event())
    {
    // This is the first event that should be recieved after connecting and sets up the machine ID
    case protos::EventType::ClientEventStreamConnected: {
        protos::ClientConnectedResponse response;
        CHECK(event.msg.message().UnpackTo(&response)) << "Failed to deserialize ClientConnectedResponse";

        // Set the machine id
        m_machine_id = response.machine_id();

        // Set the connected promise to indicate we are live
        m_connected_promise.set_value();
        this->mark_started();

        break;
    }

    case protos::EventType::ServerStateUpdate: {
        VLOG(10) << "Client: ======State Update Start======";

        auto update = std::make_unique<protos::ControlPlaneState>();
        CHECK(event.msg.has_message() && event.msg.message().UnpackTo(update.get()));

        if (!update->workers().entities().empty())
        {
            auto assigned_segments = update->workers().entities().begin()->second.assigned_segment_ids();

            VLOG(10) << "Assigned Segments: " << assigned_segments.size();
        }

        m_state_update_count++;
        m_state_update_sub.get_subscriber().on_next(state::ControlPlaneState(std::move(update)));

        VLOG(10) << "Client: ======State Update End======";

        // DCHECK(m_state_update_entrypoint);
        // CHECK(m_state_update_entrypoint->await_write(std::move(update)) == channel::Status::success);

        // if (update.has_connections())
        // {
        //     DCHECK(m_connections_update_channel);
        //     CHECK(m_connections_update_channel->await_write(std::move(update)) == channel::Status::success);
        // }
        // else
        // {
        //     route_state_update(event.msg.tag(), std::move(update));
        // }
    }
    break;

    default:
        LOG(ERROR) << "event channel not implemented. Not supported event: " << event.msg.event();
    }

    VLOG(10) << "Client: End handling event: " << saved_event_type << ". With tag: " << saved_event_tag;
}

// InstanceID Client::register_ucx_address(const std::string& worker_address)
// {
//     protos::RegisterWorkersRequest req;

//     req.add_ucx_worker_addresses(worker_address);

//     auto resp = this->await_unary<protos::RegisterWorkersResponse>(protos::ClientUnaryRegisterWorkers,
//     std::move(req));

//     CHECK_EQ(resp->instance_ids_size(), 1);

//     return resp->instance_ids(0);
// }

// std::map<InstanceID, std::unique_ptr<client::Instance>> Client::register_ucx_addresses(
//     std::vector<std::optional<ucx::UcxResources>>& ucx_resources)
// {
//     forward_state(State::RegisteringWorkers);
//     auto instances = m_connections_manager->register_ucx_addresses(ucx_resources);
//     forward_state(State::Operational);
//     return instances;
// }

void Client::forward_state(State state)
{
    std::lock_guard<decltype(m_mutex)> lock(m_mutex);
    CHECK(m_state < state);
    m_state = state;
}

// void Client::route_state_update(std::uint64_t tag, protos::StateUpdate&& update)
// {
//     DCHECK(!m_connections_manager->instance_channels().empty());

//     if (tag == 0)
//     {
//         DVLOG(10) << "broadcasting " << update.service_name() << " update to all instances";
//         for (const auto& [id, instance] : m_connections_manager->instance_channels())
//         {
//             auto copy   = update;
//             auto status = instance->await_write(std::move(copy));
//             LOG_IF(WARNING, status != mrc::channel::Status::success)
//                 << "unable to route update for service: " << update.service_name();
//         }
//     }
//     else
//     {
//         auto instance = m_connections_manager->instance_channels().find(tag);
//         CHECK(instance != m_connections_manager->instance_channels().end());
//         auto status = instance->second->await_write(std::move(update));
//         LOG_IF(WARNING, status != mrc::channel::Status::success)
//             << "unable to route update for service: " << update.service_name();
//     }
// }

// bool Client::has_subscription_service(const std::string& name) const
// {
//     std::lock_guard<decltype(m_mutex)> lock(m_mutex);
//     return contains(m_subscription_services, name);
// }

void Client::issue_event(const protos::EventType& event_type)
{
    protos::Event event;
    event.set_event(event_type);
    m_writer->await_write(std::move(event));
}

}  // namespace mrc::control_plane
