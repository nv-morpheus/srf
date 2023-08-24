/*
 * SPDX-FileCopyrightText: Copyright (c) 2022-2023, NVIDIA CORPORATION & AFFILIATES. All rights reserved.
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

#include "internal/remote_descriptor/storage.hpp"

#include "mrc/codable/api.hpp"
#include "mrc/runtime/remote_descriptor.hpp"

#include <glog/logging.h>

#include <ostream>
#include <utility>

namespace mrc::remote_descriptor {

Storage::Storage(std::unique_ptr<mrc::runtime::LocalDescriptor> descriptor) : m_descriptor(std::move(descriptor))
{
    CHECK(m_descriptor) << "Cannot make a storage with a null descriptor";

    // Release the storage object which this object will now maintain
    m_storage = m_descriptor->release_storage();
}

Storage::~Storage() = default;

const mrc::codable::IDecodableStorage& Storage::encoding() const
{
    CHECK(m_storage);
    return *m_storage;
}

std::size_t Storage::tokens_count() const
{
    return m_tokens;
}

std::size_t Storage::decrement_tokens(std::size_t decrement_count)
{
    CHECK_LE(decrement_count, m_tokens);
    m_tokens -= decrement_count;
    return m_tokens;
}

}  // namespace mrc::remote_descriptor
