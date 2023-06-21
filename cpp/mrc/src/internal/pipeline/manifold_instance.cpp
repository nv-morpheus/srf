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

#include "internal/pipeline/manifold_instance.hpp"

#include "internal/pipeline/manifold_definition.hpp"
#include "internal/resources/system_resources.hpp"
#include "internal/runtime/runtime.hpp"
#include "internal/utils/ranges.hpp"

#include "mrc/core/async_service.hpp"
#include "mrc/manifold/interface.hpp"
#include "mrc/runnable/runnable_resources.hpp"
#include "mrc/segment/egress_port.hpp"
#include "mrc/segment/ingress_port.hpp"
#include "mrc/utils/string_utils.hpp"

namespace mrc::pipeline {

ManifoldInstance::ManifoldInstance(runtime::IInternalRuntimeProvider& runtime,
                                   std::shared_ptr<const ManifoldDefinition> definition,
                                   InstanceID instance_id) :
  ResourceManagerBase(runtime, instance_id, (MRC_CONCAT_STR("Manifold[" << definition->name() << "]"))),
  m_definition(std::move(definition))
{}

ManifoldInstance::~ManifoldInstance() = default;

void ManifoldInstance::register_local_ingress(SegmentAddress address,
                                              std::shared_ptr<segment::IngressPortBase> ingress_port)
{
    CHECK(!m_local_output.contains(address)) << "Local segment with address: " << address << ", already registered";

    m_local_output[address] = ingress_port;
}

void ManifoldInstance::register_local_egress(SegmentAddress address,
                                             std::shared_ptr<segment::EgressPortBase> egress_port)
{
    CHECK(!m_local_input.contains(address)) << "Local segment with address: " << address << ", already registered";

    m_local_input[address] = egress_port;
}

void ManifoldInstance::unregister_local_ingress(SegmentAddress address)
{
    throw std::runtime_error("Not implemented");
}

void ManifoldInstance::unregister_local_egress(SegmentAddress address)
{
    throw std::runtime_error("Not implemented");
}

std::shared_ptr<manifold::Interface> ManifoldInstance::get_interface() const
{
    CHECK(m_interface) << "Must start ManifoldInstance before using the interface";

    return m_interface;
}

// void ManifoldInstance::do_service_start(std::stop_token stop_token)
// {
//     m_interface = m_definition->build(this->runnable());

//     m_interface->start();

//     this->mark_started();

//     m_interface->join();
// }

control_plane::state::ManifoldInstance ManifoldInstance::filter_resource(
    const control_plane::state::ControlPlaneState& state) const
{
    if (!state.manifold_instances().contains(this->id()))
    {
        throw exceptions::MrcRuntimeError(MRC_CONCAT_STR("Could not find Manifold Instance with ID: " << this->id()));
    }
    return state.manifold_instances().at(this->id());
}

bool ManifoldInstance::on_created_requested(control_plane::state::ManifoldInstance& instance, bool needs_local_update)
{
    if (needs_local_update)
    {
        m_interface = m_definition->build(this->runnable());
    }

    return true;
}

void ManifoldInstance::on_completed_requested(control_plane::state::ManifoldInstance& instance)
{
    CHECK(m_interface) << "Must create ManifoldInstance before starting";

    // m_interface->start();
}

void ManifoldInstance::on_running_state_updated(control_plane::state::ManifoldInstance& instance)
{
    // Check for ingress assignments
    auto cur_ingress = extract_keys(m_actual_ingress_segments);
    auto new_ingress = extract_keys(instance.requested_ingress_segments());

    auto [create_ingress, remove_ingress] = compare_difference(cur_ingress, new_ingress);

    // construct new segments and attach to manifold
    for (const auto& address : create_ingress)
    {
        this->add_ingress(address, instance.requested_ingress_segments().at(address));
    }

    // detach from manifold or stop old segments
    for (const auto& address : remove_ingress)
    {
        this->remove_ingress(address);
    }

    // Check for ingress assignments
    auto cur_egress = extract_keys(m_actual_egress_segments);
    auto new_egress = extract_keys(instance.requested_egress_segments());

    auto [create_egress, remove_egress] = compare_difference(cur_egress, new_egress);

    // construct new segments and attach to manifold
    for (const auto& address : create_egress)
    {
        this->add_egress(address, instance.requested_egress_segments().at(address));
    }

    // detach from manifold or stop old segments
    for (const auto& address : remove_egress)
    {
        this->remove_egress(address);
    }
}

void ManifoldInstance::add_ingress(SegmentAddress address, bool is_local)
{
    if (is_local)
    {
        CHECK(m_local_output.contains(address)) << "Missing local ingress for address: " << address;

        m_local_output[address]->connect_to_manifold(m_interface);
    }
    else
    {
        throw std::runtime_error("Not implemented: add_ingress(remote)");
    }
}

void ManifoldInstance::add_egress(SegmentAddress address, bool is_local)
{
    if (is_local)
    {
        CHECK(m_local_input.contains(address)) << "Missing local egress for address: " << address;

        m_local_input[address]->connect_to_manifold(m_interface);
    }
    else
    {
        throw std::runtime_error("Not implemented: add_egress(remote)");
    }
}

void ManifoldInstance::remove_ingress(SegmentAddress address)
{
    throw std::runtime_error("Not implemented: remove_ingress");
}

void ManifoldInstance::remove_egress(SegmentAddress address)
{
    throw std::runtime_error("Not implemented: remove_egress");
}

}  // namespace mrc::pipeline
