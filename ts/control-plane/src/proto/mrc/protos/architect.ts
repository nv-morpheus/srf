/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { messageTypeRegistry } from "../../typeRegistry";
import { EgressPolicy, PipelineConfiguration, SegmentDefinition } from "./architect_state";

export const protobufPackage = "mrc.protos";

export enum EventType {
  Unused = 0,
  Response = 1,
  ControlStop = 2,
  /** ClientEventPing - Meta Events */
  ClientEventPing = 10,
  /** ClientEventRequestStateUpdate - Client Events - No Response */
  ClientEventRequestStateUpdate = 100,
  ClientEventStreamConnected = 101,
  /** ClientUnaryRegisterWorkers - Connection Management */
  ClientUnaryRegisterWorkers = 201,
  ClientUnaryActivateStream = 202,
  ClientUnaryLookupWorkerAddresses = 203,
  ClientUnaryDropWorker = 204,
  /** ClientUnaryCreateSubscriptionService - SubscriptionService */
  ClientUnaryCreateSubscriptionService = 301,
  ClientUnaryRegisterSubscriptionService = 302,
  ClientUnaryActivateSubscriptionService = 303,
  ClientUnaryDropSubscriptionService = 304,
  ClientEventUpdateSubscriptionService = 305,
  /** ClientUnaryRequestPipelineAssignment - Pipeline Management */
  ClientUnaryRequestPipelineAssignment = 401,
  /** ServerEvent - Server Event issues to Client(s) */
  ServerEvent = 1000,
  ServerStateUpdate = 1001,
  UNRECOGNIZED = -1,
}

export function eventTypeFromJSON(object: any): EventType {
  switch (object) {
    case 0:
    case "Unused":
      return EventType.Unused;
    case 1:
    case "Response":
      return EventType.Response;
    case 2:
    case "ControlStop":
      return EventType.ControlStop;
    case 10:
    case "ClientEventPing":
      return EventType.ClientEventPing;
    case 100:
    case "ClientEventRequestStateUpdate":
      return EventType.ClientEventRequestStateUpdate;
    case 101:
    case "ClientEventStreamConnected":
      return EventType.ClientEventStreamConnected;
    case 201:
    case "ClientUnaryRegisterWorkers":
      return EventType.ClientUnaryRegisterWorkers;
    case 202:
    case "ClientUnaryActivateStream":
      return EventType.ClientUnaryActivateStream;
    case 203:
    case "ClientUnaryLookupWorkerAddresses":
      return EventType.ClientUnaryLookupWorkerAddresses;
    case 204:
    case "ClientUnaryDropWorker":
      return EventType.ClientUnaryDropWorker;
    case 301:
    case "ClientUnaryCreateSubscriptionService":
      return EventType.ClientUnaryCreateSubscriptionService;
    case 302:
    case "ClientUnaryRegisterSubscriptionService":
      return EventType.ClientUnaryRegisterSubscriptionService;
    case 303:
    case "ClientUnaryActivateSubscriptionService":
      return EventType.ClientUnaryActivateSubscriptionService;
    case 304:
    case "ClientUnaryDropSubscriptionService":
      return EventType.ClientUnaryDropSubscriptionService;
    case 305:
    case "ClientEventUpdateSubscriptionService":
      return EventType.ClientEventUpdateSubscriptionService;
    case 401:
    case "ClientUnaryRequestPipelineAssignment":
      return EventType.ClientUnaryRequestPipelineAssignment;
    case 1000:
    case "ServerEvent":
      return EventType.ServerEvent;
    case 1001:
    case "ServerStateUpdate":
      return EventType.ServerStateUpdate;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventType.UNRECOGNIZED;
  }
}

export function eventTypeToJSON(object: EventType): string {
  switch (object) {
    case EventType.Unused:
      return "Unused";
    case EventType.Response:
      return "Response";
    case EventType.ControlStop:
      return "ControlStop";
    case EventType.ClientEventPing:
      return "ClientEventPing";
    case EventType.ClientEventRequestStateUpdate:
      return "ClientEventRequestStateUpdate";
    case EventType.ClientEventStreamConnected:
      return "ClientEventStreamConnected";
    case EventType.ClientUnaryRegisterWorkers:
      return "ClientUnaryRegisterWorkers";
    case EventType.ClientUnaryActivateStream:
      return "ClientUnaryActivateStream";
    case EventType.ClientUnaryLookupWorkerAddresses:
      return "ClientUnaryLookupWorkerAddresses";
    case EventType.ClientUnaryDropWorker:
      return "ClientUnaryDropWorker";
    case EventType.ClientUnaryCreateSubscriptionService:
      return "ClientUnaryCreateSubscriptionService";
    case EventType.ClientUnaryRegisterSubscriptionService:
      return "ClientUnaryRegisterSubscriptionService";
    case EventType.ClientUnaryActivateSubscriptionService:
      return "ClientUnaryActivateSubscriptionService";
    case EventType.ClientUnaryDropSubscriptionService:
      return "ClientUnaryDropSubscriptionService";
    case EventType.ClientEventUpdateSubscriptionService:
      return "ClientEventUpdateSubscriptionService";
    case EventType.ClientUnaryRequestPipelineAssignment:
      return "ClientUnaryRequestPipelineAssignment";
    case EventType.ServerEvent:
      return "ServerEvent";
    case EventType.ServerStateUpdate:
      return "ServerStateUpdate";
    case EventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ErrorCode {
  Success = 0,
  ServerError = 1,
  ClientError = 2,
  InstanceError = 3,
  UNRECOGNIZED = -1,
}

export function errorCodeFromJSON(object: any): ErrorCode {
  switch (object) {
    case 0:
    case "Success":
      return ErrorCode.Success;
    case 1:
    case "ServerError":
      return ErrorCode.ServerError;
    case 2:
    case "ClientError":
      return ErrorCode.ClientError;
    case 3:
    case "InstanceError":
      return ErrorCode.InstanceError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ErrorCode.UNRECOGNIZED;
  }
}

export function errorCodeToJSON(object: ErrorCode): string {
  switch (object) {
    case ErrorCode.Success:
      return "Success";
    case ErrorCode.ServerError:
      return "ServerError";
    case ErrorCode.ClientError:
      return "ClientError";
    case ErrorCode.InstanceError:
      return "InstanceError";
    case ErrorCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PingRequest {
  $type: "mrc.protos.PingRequest";
  tag: bigint;
}

export interface PingResponse {
  $type: "mrc.protos.PingResponse";
  tag: bigint;
}

export interface ShutdownRequest {
  $type: "mrc.protos.ShutdownRequest";
  tag: bigint;
}

export interface ShutdownResponse {
  $type: "mrc.protos.ShutdownResponse";
  tag: bigint;
}

export interface Event {
  $type: "mrc.protos.Event";
  event: EventType;
  tag: bigint;
  message?: Any | undefined;
  error?: Error | undefined;
}

export interface Error {
  $type: "mrc.protos.Error";
  code: ErrorCode;
  message: string;
}

export interface Ack {
  $type: "mrc.protos.Ack";
}

export interface ClientConnectedResponse {
  $type: "mrc.protos.ClientConnectedResponse";
  machineId: bigint;
}

export interface RegisterWorkersRequest {
  $type: "mrc.protos.RegisterWorkersRequest";
  ucxWorkerAddresses: Uint8Array[];
  pipeline?: Pipeline;
}

export interface RegisterWorkersResponse {
  $type: "mrc.protos.RegisterWorkersResponse";
  machineId: bigint;
  instanceIds: bigint[];
}

export interface LookupWorkersRequest {
  $type: "mrc.protos.LookupWorkersRequest";
  instanceIds: bigint[];
}

export interface LookupWorkersResponse {
  $type: "mrc.protos.LookupWorkersResponse";
  workerAddresses: WorkerAddress[];
}

export interface CreateSubscriptionServiceRequest {
  $type: "mrc.protos.CreateSubscriptionServiceRequest";
  serviceName: string;
  roles: string[];
}

export interface RegisterSubscriptionServiceRequest {
  $type: "mrc.protos.RegisterSubscriptionServiceRequest";
  serviceName: string;
  role: string;
  subscribeToRoles: string[];
  instanceId: bigint;
}

export interface RegisterSubscriptionServiceResponse {
  $type: "mrc.protos.RegisterSubscriptionServiceResponse";
  serviceName: string;
  role: string;
  tag: bigint;
}

export interface ActivateSubscriptionServiceRequest {
  $type: "mrc.protos.ActivateSubscriptionServiceRequest";
  serviceName: string;
  role: string;
  subscribeToRoles: string[];
  instanceId: bigint;
  tag: bigint;
}

export interface DropSubscriptionServiceRequest {
  $type: "mrc.protos.DropSubscriptionServiceRequest";
  serviceName: string;
  instanceId: bigint;
  tag: bigint;
}

export interface UpdateSubscriptionServiceRequest {
  $type: "mrc.protos.UpdateSubscriptionServiceRequest";
  serviceName: string;
  role: string;
  nonce: bigint;
  tags: bigint[];
}

export interface TaggedInstance {
  $type: "mrc.protos.TaggedInstance";
  instanceId: bigint;
  tag: bigint;
}

export interface PipelineRequestAssignmentRequest {
  $type: "mrc.protos.PipelineRequestAssignmentRequest";
  /** The pipeline definition object */
  pipeline?: PipelineConfiguration;
  /** The mapping of segment definitions to assigned workers */
  assignments: PipelineRequestAssignmentRequest_SegmentMapping[];
}

export interface PipelineRequestAssignmentRequest_SegmentMapping {
  $type: "mrc.protos.PipelineRequestAssignmentRequest.SegmentMapping";
  /** The segment definition ID */
  segmentName: string;
  /** The workers to assign this segment to */
  workerIds: bigint[];
}

export interface PipelineRequestAssignmentResponse {
  $type: "mrc.protos.PipelineRequestAssignmentResponse";
  /** The pipeline definition that was added (since its generated) */
  pipelineDefinitionId: bigint;
  /** The pipeline instance that was added */
  pipelineInstanceId: bigint;
  /** The segment instance that was added */
  segmentInstanceIds: bigint[];
}

/** message sent by an UpdateManager */
export interface StateUpdate {
  $type: "mrc.protos.StateUpdate";
  serviceName: string;
  nonce: bigint;
  instanceId: bigint;
  connections?: UpdateConnectionsState | undefined;
  updateSubscriptionService?: UpdateSubscriptionServiceState | undefined;
  dropSubscriptionService?: DropSubscriptionServiceState | undefined;
}

export interface UpdateConnectionsState {
  $type: "mrc.protos.UpdateConnectionsState";
  taggedInstances: TaggedInstance[];
}

export interface UpdateSubscriptionServiceState {
  $type: "mrc.protos.UpdateSubscriptionServiceState";
  role: string;
  taggedInstances: TaggedInstance[];
}

export interface DropSubscriptionServiceState {
  $type: "mrc.protos.DropSubscriptionServiceState";
  role: string;
  tag: bigint;
}

export interface ControlMessage {
  $type: "mrc.protos.ControlMessage";
}

export interface OnComplete {
  $type: "mrc.protos.OnComplete";
  segmentAddresses: number[];
}

export interface UpdateAssignments {
  $type: "mrc.protos.UpdateAssignments";
  assignments: SegmentAssignment[];
}

export interface SegmentAssignment {
  $type: "mrc.protos.SegmentAssignment";
  machineId: bigint;
  instanceId: bigint;
  address: number;
  egressPolices: { [key: number]: EgressPolicy };
  issueEventOnComplete: boolean;
  networkIngressPorts: number[];
}

export interface SegmentAssignment_EgressPolicesEntry {
  $type: "mrc.protos.SegmentAssignment.EgressPolicesEntry";
  key: number;
  value?: EgressPolicy;
}

export interface Topology {
  $type: "mrc.protos.Topology";
  hwlocXmlString: string;
  cpuSet: string;
  gpuInfo: GpuInfo[];
}

export interface GpuInfo {
  $type: "mrc.protos.GpuInfo";
  cpuSet: string;
  name: string;
  uuid: string;
  pcieBusId: string;
  memoryCapacity: bigint;
  cudaDeviceId: number;
}

export interface Pipeline {
  $type: "mrc.protos.Pipeline";
  name: string;
  segments: SegmentDefinition[];
}

export interface WorkerAddress {
  $type: "mrc.protos.WorkerAddress";
  machineId: bigint;
  instanceId: bigint;
  workerAddress: string;
}

export interface InstancesResources {
  $type: "mrc.protos.InstancesResources";
  hostMemory: bigint;
  cpus: CPU[];
  gpus: GPU[];
  /**
   * todo - topology - assign cpu/numa_nodes, gpus and nics into optimized groups
   * use topology groups as the default unit of placement
   */
  nics: NIC[];
}

export interface CPU {
  $type: "mrc.protos.CPU";
  cores: number;
  /** numa_node_masks - which cores are assigned each numa_node */
  numaNodes: number;
}

export interface GPU {
  $type: "mrc.protos.GPU";
  name: string;
  cores: number;
  memory: bigint;
  computeCapability: number;
}

export interface NIC {
  $type: "mrc.protos.NIC";
}

function createBasePingRequest(): PingRequest {
  return { $type: "mrc.protos.PingRequest", tag: BigInt("0") };
}

export const PingRequest = {
  $type: "mrc.protos.PingRequest" as const,

  encode(message: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== BigInt("0")) {
      writer.uint32(8).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PingRequest {
    return { $type: PingRequest.$type, tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0") };
  },

  toJSON(message: PingRequest): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<PingRequest>): PingRequest {
    return PingRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PingRequest>): PingRequest {
    const message = createBasePingRequest();
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(PingRequest.$type, PingRequest);

function createBasePingResponse(): PingResponse {
  return { $type: "mrc.protos.PingResponse", tag: BigInt("0") };
}

export const PingResponse = {
  $type: "mrc.protos.PingResponse" as const,

  encode(message: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== BigInt("0")) {
      writer.uint32(8).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PingResponse {
    return { $type: PingResponse.$type, tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0") };
  },

  toJSON(message: PingResponse): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<PingResponse>): PingResponse {
    return PingResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PingResponse>): PingResponse {
    const message = createBasePingResponse();
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(PingResponse.$type, PingResponse);

function createBaseShutdownRequest(): ShutdownRequest {
  return { $type: "mrc.protos.ShutdownRequest", tag: BigInt("0") };
}

export const ShutdownRequest = {
  $type: "mrc.protos.ShutdownRequest" as const,

  encode(message: ShutdownRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== BigInt("0")) {
      writer.uint32(8).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShutdownRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShutdownRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShutdownRequest {
    return { $type: ShutdownRequest.$type, tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0") };
  },

  toJSON(message: ShutdownRequest): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<ShutdownRequest>): ShutdownRequest {
    return ShutdownRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShutdownRequest>): ShutdownRequest {
    const message = createBaseShutdownRequest();
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(ShutdownRequest.$type, ShutdownRequest);

function createBaseShutdownResponse(): ShutdownResponse {
  return { $type: "mrc.protos.ShutdownResponse", tag: BigInt("0") };
}

export const ShutdownResponse = {
  $type: "mrc.protos.ShutdownResponse" as const,

  encode(message: ShutdownResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== BigInt("0")) {
      writer.uint32(8).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShutdownResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShutdownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShutdownResponse {
    return { $type: ShutdownResponse.$type, tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0") };
  },

  toJSON(message: ShutdownResponse): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<ShutdownResponse>): ShutdownResponse {
    return ShutdownResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ShutdownResponse>): ShutdownResponse {
    const message = createBaseShutdownResponse();
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(ShutdownResponse.$type, ShutdownResponse);

function createBaseEvent(): Event {
  return { $type: "mrc.protos.Event", event: 0, tag: BigInt("0"), message: undefined, error: undefined };
}

export const Event = {
  $type: "mrc.protos.Event" as const,

  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== 0) {
      writer.uint32(8).int32(message.event);
    }
    if (message.tag !== BigInt("0")) {
      writer.uint32(16).uint64(message.tag.toString());
    }
    if (message.message !== undefined) {
      Any.encode(message.message, writer.uint32(26).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = reader.int32() as any;
          break;
        case 2:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        case 3:
          message.message = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.error = Error.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      $type: Event.$type,
      event: isSet(object.event) ? eventTypeFromJSON(object.event) : 0,
      tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0"),
      message: isSet(object.message) ? Any.fromJSON(object.message) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = eventTypeToJSON(message.event));
    message.tag !== undefined && (obj.tag = message.tag.toString());
    message.message !== undefined && (obj.message = message.message ? Any.toJSON(message.message) : undefined);
    message.error !== undefined && (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Event>): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.event = object.event ?? 0;
    message.tag = object.tag ?? BigInt("0");
    message.message = (object.message !== undefined && object.message !== null)
      ? Any.fromPartial(object.message)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

messageTypeRegistry.set(Event.$type, Event);

function createBaseError(): Error {
  return { $type: "mrc.protos.Error", code: 0, message: "" };
}

export const Error = {
  $type: "mrc.protos.Error" as const,

  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32() as any;
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      $type: Error.$type,
      code: isSet(object.code) ? errorCodeFromJSON(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = errorCodeToJSON(message.code));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create(base?: DeepPartial<Error>): Error {
    return Error.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Error>): Error {
    const message = createBaseError();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

messageTypeRegistry.set(Error.$type, Error);

function createBaseAck(): Ack {
  return { $type: "mrc.protos.Ack" };
}

export const Ack = {
  $type: "mrc.protos.Ack" as const,

  encode(_: Ack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Ack {
    return { $type: Ack.$type };
  },

  toJSON(_: Ack): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Ack>): Ack {
    return Ack.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<Ack>): Ack {
    const message = createBaseAck();
    return message;
  },
};

messageTypeRegistry.set(Ack.$type, Ack);

function createBaseClientConnectedResponse(): ClientConnectedResponse {
  return { $type: "mrc.protos.ClientConnectedResponse", machineId: BigInt("0") };
}

export const ClientConnectedResponse = {
  $type: "mrc.protos.ClientConnectedResponse" as const,

  encode(message: ClientConnectedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.machineId !== BigInt("0")) {
      writer.uint32(8).uint64(message.machineId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientConnectedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientConnectedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.machineId = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientConnectedResponse {
    return {
      $type: ClientConnectedResponse.$type,
      machineId: isSet(object.machineId) ? BigInt(object.machineId) : BigInt("0"),
    };
  },

  toJSON(message: ClientConnectedResponse): unknown {
    const obj: any = {};
    message.machineId !== undefined && (obj.machineId = message.machineId.toString());
    return obj;
  },

  create(base?: DeepPartial<ClientConnectedResponse>): ClientConnectedResponse {
    return ClientConnectedResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ClientConnectedResponse>): ClientConnectedResponse {
    const message = createBaseClientConnectedResponse();
    message.machineId = object.machineId ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(ClientConnectedResponse.$type, ClientConnectedResponse);

function createBaseRegisterWorkersRequest(): RegisterWorkersRequest {
  return { $type: "mrc.protos.RegisterWorkersRequest", ucxWorkerAddresses: [], pipeline: undefined };
}

export const RegisterWorkersRequest = {
  $type: "mrc.protos.RegisterWorkersRequest" as const,

  encode(message: RegisterWorkersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ucxWorkerAddresses) {
      writer.uint32(10).bytes(v!);
    }
    if (message.pipeline !== undefined) {
      Pipeline.encode(message.pipeline, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterWorkersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterWorkersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ucxWorkerAddresses.push(reader.bytes());
          break;
        case 2:
          message.pipeline = Pipeline.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterWorkersRequest {
    return {
      $type: RegisterWorkersRequest.$type,
      ucxWorkerAddresses: Array.isArray(object?.ucxWorkerAddresses)
        ? object.ucxWorkerAddresses.map((e: any) => bytesFromBase64(e))
        : [],
      pipeline: isSet(object.pipeline) ? Pipeline.fromJSON(object.pipeline) : undefined,
    };
  },

  toJSON(message: RegisterWorkersRequest): unknown {
    const obj: any = {};
    if (message.ucxWorkerAddresses) {
      obj.ucxWorkerAddresses = message.ucxWorkerAddresses.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.ucxWorkerAddresses = [];
    }
    message.pipeline !== undefined && (obj.pipeline = message.pipeline ? Pipeline.toJSON(message.pipeline) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RegisterWorkersRequest>): RegisterWorkersRequest {
    return RegisterWorkersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterWorkersRequest>): RegisterWorkersRequest {
    const message = createBaseRegisterWorkersRequest();
    message.ucxWorkerAddresses = object.ucxWorkerAddresses?.map((e) => e) || [];
    message.pipeline = (object.pipeline !== undefined && object.pipeline !== null)
      ? Pipeline.fromPartial(object.pipeline)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(RegisterWorkersRequest.$type, RegisterWorkersRequest);

function createBaseRegisterWorkersResponse(): RegisterWorkersResponse {
  return { $type: "mrc.protos.RegisterWorkersResponse", machineId: BigInt("0"), instanceIds: [] };
}

export const RegisterWorkersResponse = {
  $type: "mrc.protos.RegisterWorkersResponse" as const,

  encode(message: RegisterWorkersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.machineId !== BigInt("0")) {
      writer.uint32(8).uint64(message.machineId.toString());
    }
    writer.uint32(18).fork();
    for (const v of message.instanceIds) {
      writer.uint64(v.toString());
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterWorkersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterWorkersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.machineId = longToBigint(reader.uint64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.instanceIds.push(longToBigint(reader.uint64() as Long));
            }
          } else {
            message.instanceIds.push(longToBigint(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterWorkersResponse {
    return {
      $type: RegisterWorkersResponse.$type,
      machineId: isSet(object.machineId) ? BigInt(object.machineId) : BigInt("0"),
      instanceIds: Array.isArray(object?.instanceIds) ? object.instanceIds.map((e: any) => BigInt(e)) : [],
    };
  },

  toJSON(message: RegisterWorkersResponse): unknown {
    const obj: any = {};
    message.machineId !== undefined && (obj.machineId = message.machineId.toString());
    if (message.instanceIds) {
      obj.instanceIds = message.instanceIds.map((e) => e.toString());
    } else {
      obj.instanceIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterWorkersResponse>): RegisterWorkersResponse {
    return RegisterWorkersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterWorkersResponse>): RegisterWorkersResponse {
    const message = createBaseRegisterWorkersResponse();
    message.machineId = object.machineId ?? BigInt("0");
    message.instanceIds = object.instanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(RegisterWorkersResponse.$type, RegisterWorkersResponse);

function createBaseLookupWorkersRequest(): LookupWorkersRequest {
  return { $type: "mrc.protos.LookupWorkersRequest", instanceIds: [] };
}

export const LookupWorkersRequest = {
  $type: "mrc.protos.LookupWorkersRequest" as const,

  encode(message: LookupWorkersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.instanceIds) {
      writer.uint64(v.toString());
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LookupWorkersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLookupWorkersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.instanceIds.push(longToBigint(reader.uint64() as Long));
            }
          } else {
            message.instanceIds.push(longToBigint(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LookupWorkersRequest {
    return {
      $type: LookupWorkersRequest.$type,
      instanceIds: Array.isArray(object?.instanceIds) ? object.instanceIds.map((e: any) => BigInt(e)) : [],
    };
  },

  toJSON(message: LookupWorkersRequest): unknown {
    const obj: any = {};
    if (message.instanceIds) {
      obj.instanceIds = message.instanceIds.map((e) => e.toString());
    } else {
      obj.instanceIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<LookupWorkersRequest>): LookupWorkersRequest {
    return LookupWorkersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LookupWorkersRequest>): LookupWorkersRequest {
    const message = createBaseLookupWorkersRequest();
    message.instanceIds = object.instanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(LookupWorkersRequest.$type, LookupWorkersRequest);

function createBaseLookupWorkersResponse(): LookupWorkersResponse {
  return { $type: "mrc.protos.LookupWorkersResponse", workerAddresses: [] };
}

export const LookupWorkersResponse = {
  $type: "mrc.protos.LookupWorkersResponse" as const,

  encode(message: LookupWorkersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.workerAddresses) {
      WorkerAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LookupWorkersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLookupWorkersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.workerAddresses.push(WorkerAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LookupWorkersResponse {
    return {
      $type: LookupWorkersResponse.$type,
      workerAddresses: Array.isArray(object?.workerAddresses)
        ? object.workerAddresses.map((e: any) => WorkerAddress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LookupWorkersResponse): unknown {
    const obj: any = {};
    if (message.workerAddresses) {
      obj.workerAddresses = message.workerAddresses.map((e) => e ? WorkerAddress.toJSON(e) : undefined);
    } else {
      obj.workerAddresses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<LookupWorkersResponse>): LookupWorkersResponse {
    return LookupWorkersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LookupWorkersResponse>): LookupWorkersResponse {
    const message = createBaseLookupWorkersResponse();
    message.workerAddresses = object.workerAddresses?.map((e) => WorkerAddress.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(LookupWorkersResponse.$type, LookupWorkersResponse);

function createBaseCreateSubscriptionServiceRequest(): CreateSubscriptionServiceRequest {
  return { $type: "mrc.protos.CreateSubscriptionServiceRequest", serviceName: "", roles: [] };
}

export const CreateSubscriptionServiceRequest = {
  $type: "mrc.protos.CreateSubscriptionServiceRequest" as const,

  encode(message: CreateSubscriptionServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    for (const v of message.roles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSubscriptionServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSubscriptionServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.roles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubscriptionServiceRequest {
    return {
      $type: CreateSubscriptionServiceRequest.$type,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CreateSubscriptionServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    if (message.roles) {
      obj.roles = message.roles.map((e) => e);
    } else {
      obj.roles = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CreateSubscriptionServiceRequest>): CreateSubscriptionServiceRequest {
    return CreateSubscriptionServiceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateSubscriptionServiceRequest>): CreateSubscriptionServiceRequest {
    const message = createBaseCreateSubscriptionServiceRequest();
    message.serviceName = object.serviceName ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(CreateSubscriptionServiceRequest.$type, CreateSubscriptionServiceRequest);

function createBaseRegisterSubscriptionServiceRequest(): RegisterSubscriptionServiceRequest {
  return {
    $type: "mrc.protos.RegisterSubscriptionServiceRequest",
    serviceName: "",
    role: "",
    subscribeToRoles: [],
    instanceId: BigInt("0"),
  };
}

export const RegisterSubscriptionServiceRequest = {
  $type: "mrc.protos.RegisterSubscriptionServiceRequest" as const,

  encode(message: RegisterSubscriptionServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    for (const v of message.subscribeToRoles) {
      writer.uint32(26).string(v!);
    }
    if (message.instanceId !== BigInt("0")) {
      writer.uint32(32).uint64(message.instanceId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterSubscriptionServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSubscriptionServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.role = reader.string();
          break;
        case 3:
          message.subscribeToRoles.push(reader.string());
          break;
        case 4:
          message.instanceId = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterSubscriptionServiceRequest {
    return {
      $type: RegisterSubscriptionServiceRequest.$type,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      role: isSet(object.role) ? String(object.role) : "",
      subscribeToRoles: Array.isArray(object?.subscribeToRoles)
        ? object.subscribeToRoles.map((e: any) => String(e))
        : [],
      instanceId: isSet(object.instanceId) ? BigInt(object.instanceId) : BigInt("0"),
    };
  },

  toJSON(message: RegisterSubscriptionServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.role !== undefined && (obj.role = message.role);
    if (message.subscribeToRoles) {
      obj.subscribeToRoles = message.subscribeToRoles.map((e) => e);
    } else {
      obj.subscribeToRoles = [];
    }
    message.instanceId !== undefined && (obj.instanceId = message.instanceId.toString());
    return obj;
  },

  create(base?: DeepPartial<RegisterSubscriptionServiceRequest>): RegisterSubscriptionServiceRequest {
    return RegisterSubscriptionServiceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterSubscriptionServiceRequest>): RegisterSubscriptionServiceRequest {
    const message = createBaseRegisterSubscriptionServiceRequest();
    message.serviceName = object.serviceName ?? "";
    message.role = object.role ?? "";
    message.subscribeToRoles = object.subscribeToRoles?.map((e) => e) || [];
    message.instanceId = object.instanceId ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(RegisterSubscriptionServiceRequest.$type, RegisterSubscriptionServiceRequest);

function createBaseRegisterSubscriptionServiceResponse(): RegisterSubscriptionServiceResponse {
  return { $type: "mrc.protos.RegisterSubscriptionServiceResponse", serviceName: "", role: "", tag: BigInt("0") };
}

export const RegisterSubscriptionServiceResponse = {
  $type: "mrc.protos.RegisterSubscriptionServiceResponse" as const,

  encode(message: RegisterSubscriptionServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    if (message.tag !== BigInt("0")) {
      writer.uint32(24).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterSubscriptionServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSubscriptionServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.role = reader.string();
          break;
        case 3:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterSubscriptionServiceResponse {
    return {
      $type: RegisterSubscriptionServiceResponse.$type,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      role: isSet(object.role) ? String(object.role) : "",
      tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0"),
    };
  },

  toJSON(message: RegisterSubscriptionServiceResponse): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.role !== undefined && (obj.role = message.role);
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<RegisterSubscriptionServiceResponse>): RegisterSubscriptionServiceResponse {
    return RegisterSubscriptionServiceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterSubscriptionServiceResponse>): RegisterSubscriptionServiceResponse {
    const message = createBaseRegisterSubscriptionServiceResponse();
    message.serviceName = object.serviceName ?? "";
    message.role = object.role ?? "";
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(RegisterSubscriptionServiceResponse.$type, RegisterSubscriptionServiceResponse);

function createBaseActivateSubscriptionServiceRequest(): ActivateSubscriptionServiceRequest {
  return {
    $type: "mrc.protos.ActivateSubscriptionServiceRequest",
    serviceName: "",
    role: "",
    subscribeToRoles: [],
    instanceId: BigInt("0"),
    tag: BigInt("0"),
  };
}

export const ActivateSubscriptionServiceRequest = {
  $type: "mrc.protos.ActivateSubscriptionServiceRequest" as const,

  encode(message: ActivateSubscriptionServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    for (const v of message.subscribeToRoles) {
      writer.uint32(26).string(v!);
    }
    if (message.instanceId !== BigInt("0")) {
      writer.uint32(32).uint64(message.instanceId.toString());
    }
    if (message.tag !== BigInt("0")) {
      writer.uint32(40).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSubscriptionServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateSubscriptionServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.role = reader.string();
          break;
        case 3:
          message.subscribeToRoles.push(reader.string());
          break;
        case 4:
          message.instanceId = longToBigint(reader.uint64() as Long);
          break;
        case 5:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateSubscriptionServiceRequest {
    return {
      $type: ActivateSubscriptionServiceRequest.$type,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      role: isSet(object.role) ? String(object.role) : "",
      subscribeToRoles: Array.isArray(object?.subscribeToRoles)
        ? object.subscribeToRoles.map((e: any) => String(e))
        : [],
      instanceId: isSet(object.instanceId) ? BigInt(object.instanceId) : BigInt("0"),
      tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0"),
    };
  },

  toJSON(message: ActivateSubscriptionServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.role !== undefined && (obj.role = message.role);
    if (message.subscribeToRoles) {
      obj.subscribeToRoles = message.subscribeToRoles.map((e) => e);
    } else {
      obj.subscribeToRoles = [];
    }
    message.instanceId !== undefined && (obj.instanceId = message.instanceId.toString());
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<ActivateSubscriptionServiceRequest>): ActivateSubscriptionServiceRequest {
    return ActivateSubscriptionServiceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ActivateSubscriptionServiceRequest>): ActivateSubscriptionServiceRequest {
    const message = createBaseActivateSubscriptionServiceRequest();
    message.serviceName = object.serviceName ?? "";
    message.role = object.role ?? "";
    message.subscribeToRoles = object.subscribeToRoles?.map((e) => e) || [];
    message.instanceId = object.instanceId ?? BigInt("0");
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(ActivateSubscriptionServiceRequest.$type, ActivateSubscriptionServiceRequest);

function createBaseDropSubscriptionServiceRequest(): DropSubscriptionServiceRequest {
  return {
    $type: "mrc.protos.DropSubscriptionServiceRequest",
    serviceName: "",
    instanceId: BigInt("0"),
    tag: BigInt("0"),
  };
}

export const DropSubscriptionServiceRequest = {
  $type: "mrc.protos.DropSubscriptionServiceRequest" as const,

  encode(message: DropSubscriptionServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.instanceId !== BigInt("0")) {
      writer.uint32(16).uint64(message.instanceId.toString());
    }
    if (message.tag !== BigInt("0")) {
      writer.uint32(24).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropSubscriptionServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropSubscriptionServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.instanceId = longToBigint(reader.uint64() as Long);
          break;
        case 3:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DropSubscriptionServiceRequest {
    return {
      $type: DropSubscriptionServiceRequest.$type,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      instanceId: isSet(object.instanceId) ? BigInt(object.instanceId) : BigInt("0"),
      tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0"),
    };
  },

  toJSON(message: DropSubscriptionServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.instanceId !== undefined && (obj.instanceId = message.instanceId.toString());
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<DropSubscriptionServiceRequest>): DropSubscriptionServiceRequest {
    return DropSubscriptionServiceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DropSubscriptionServiceRequest>): DropSubscriptionServiceRequest {
    const message = createBaseDropSubscriptionServiceRequest();
    message.serviceName = object.serviceName ?? "";
    message.instanceId = object.instanceId ?? BigInt("0");
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(DropSubscriptionServiceRequest.$type, DropSubscriptionServiceRequest);

function createBaseUpdateSubscriptionServiceRequest(): UpdateSubscriptionServiceRequest {
  return {
    $type: "mrc.protos.UpdateSubscriptionServiceRequest",
    serviceName: "",
    role: "",
    nonce: BigInt("0"),
    tags: [],
  };
}

export const UpdateSubscriptionServiceRequest = {
  $type: "mrc.protos.UpdateSubscriptionServiceRequest" as const,

  encode(message: UpdateSubscriptionServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    if (message.nonce !== BigInt("0")) {
      writer.uint32(24).uint64(message.nonce.toString());
    }
    writer.uint32(34).fork();
    for (const v of message.tags) {
      writer.uint64(v.toString());
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubscriptionServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubscriptionServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.role = reader.string();
          break;
        case 3:
          message.nonce = longToBigint(reader.uint64() as Long);
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tags.push(longToBigint(reader.uint64() as Long));
            }
          } else {
            message.tags.push(longToBigint(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubscriptionServiceRequest {
    return {
      $type: UpdateSubscriptionServiceRequest.$type,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      role: isSet(object.role) ? String(object.role) : "",
      nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt("0"),
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => BigInt(e)) : [],
    };
  },

  toJSON(message: UpdateSubscriptionServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.role !== undefined && (obj.role = message.role);
    message.nonce !== undefined && (obj.nonce = message.nonce.toString());
    if (message.tags) {
      obj.tags = message.tags.map((e) => e.toString());
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateSubscriptionServiceRequest>): UpdateSubscriptionServiceRequest {
    return UpdateSubscriptionServiceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateSubscriptionServiceRequest>): UpdateSubscriptionServiceRequest {
    const message = createBaseUpdateSubscriptionServiceRequest();
    message.serviceName = object.serviceName ?? "";
    message.role = object.role ?? "";
    message.nonce = object.nonce ?? BigInt("0");
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateSubscriptionServiceRequest.$type, UpdateSubscriptionServiceRequest);

function createBaseTaggedInstance(): TaggedInstance {
  return { $type: "mrc.protos.TaggedInstance", instanceId: BigInt("0"), tag: BigInt("0") };
}

export const TaggedInstance = {
  $type: "mrc.protos.TaggedInstance" as const,

  encode(message: TaggedInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== BigInt("0")) {
      writer.uint32(8).uint64(message.instanceId.toString());
    }
    if (message.tag !== BigInt("0")) {
      writer.uint32(16).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaggedInstance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaggedInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = longToBigint(reader.uint64() as Long);
          break;
        case 2:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TaggedInstance {
    return {
      $type: TaggedInstance.$type,
      instanceId: isSet(object.instanceId) ? BigInt(object.instanceId) : BigInt("0"),
      tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0"),
    };
  },

  toJSON(message: TaggedInstance): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId.toString());
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<TaggedInstance>): TaggedInstance {
    return TaggedInstance.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TaggedInstance>): TaggedInstance {
    const message = createBaseTaggedInstance();
    message.instanceId = object.instanceId ?? BigInt("0");
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(TaggedInstance.$type, TaggedInstance);

function createBasePipelineRequestAssignmentRequest(): PipelineRequestAssignmentRequest {
  return { $type: "mrc.protos.PipelineRequestAssignmentRequest", pipeline: undefined, assignments: [] };
}

export const PipelineRequestAssignmentRequest = {
  $type: "mrc.protos.PipelineRequestAssignmentRequest" as const,

  encode(message: PipelineRequestAssignmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pipeline !== undefined) {
      PipelineConfiguration.encode(message.pipeline, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.assignments) {
      PipelineRequestAssignmentRequest_SegmentMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipelineRequestAssignmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipelineRequestAssignmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pipeline = PipelineConfiguration.decode(reader, reader.uint32());
          break;
        case 2:
          message.assignments.push(PipelineRequestAssignmentRequest_SegmentMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PipelineRequestAssignmentRequest {
    return {
      $type: PipelineRequestAssignmentRequest.$type,
      pipeline: isSet(object.pipeline) ? PipelineConfiguration.fromJSON(object.pipeline) : undefined,
      assignments: Array.isArray(object?.assignments)
        ? object.assignments.map((e: any) => PipelineRequestAssignmentRequest_SegmentMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PipelineRequestAssignmentRequest): unknown {
    const obj: any = {};
    message.pipeline !== undefined &&
      (obj.pipeline = message.pipeline ? PipelineConfiguration.toJSON(message.pipeline) : undefined);
    if (message.assignments) {
      obj.assignments = message.assignments.map((e) =>
        e ? PipelineRequestAssignmentRequest_SegmentMapping.toJSON(e) : undefined
      );
    } else {
      obj.assignments = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PipelineRequestAssignmentRequest>): PipelineRequestAssignmentRequest {
    return PipelineRequestAssignmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PipelineRequestAssignmentRequest>): PipelineRequestAssignmentRequest {
    const message = createBasePipelineRequestAssignmentRequest();
    message.pipeline = (object.pipeline !== undefined && object.pipeline !== null)
      ? PipelineConfiguration.fromPartial(object.pipeline)
      : undefined;
    message.assignments =
      object.assignments?.map((e) => PipelineRequestAssignmentRequest_SegmentMapping.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PipelineRequestAssignmentRequest.$type, PipelineRequestAssignmentRequest);

function createBasePipelineRequestAssignmentRequest_SegmentMapping(): PipelineRequestAssignmentRequest_SegmentMapping {
  return { $type: "mrc.protos.PipelineRequestAssignmentRequest.SegmentMapping", segmentName: "", workerIds: [] };
}

export const PipelineRequestAssignmentRequest_SegmentMapping = {
  $type: "mrc.protos.PipelineRequestAssignmentRequest.SegmentMapping" as const,

  encode(
    message: PipelineRequestAssignmentRequest_SegmentMapping,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.segmentName !== "") {
      writer.uint32(10).string(message.segmentName);
    }
    writer.uint32(18).fork();
    for (const v of message.workerIds) {
      writer.uint64(v.toString());
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipelineRequestAssignmentRequest_SegmentMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipelineRequestAssignmentRequest_SegmentMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.segmentName = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.workerIds.push(longToBigint(reader.uint64() as Long));
            }
          } else {
            message.workerIds.push(longToBigint(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PipelineRequestAssignmentRequest_SegmentMapping {
    return {
      $type: PipelineRequestAssignmentRequest_SegmentMapping.$type,
      segmentName: isSet(object.segmentName) ? String(object.segmentName) : "",
      workerIds: Array.isArray(object?.workerIds) ? object.workerIds.map((e: any) => BigInt(e)) : [],
    };
  },

  toJSON(message: PipelineRequestAssignmentRequest_SegmentMapping): unknown {
    const obj: any = {};
    message.segmentName !== undefined && (obj.segmentName = message.segmentName);
    if (message.workerIds) {
      obj.workerIds = message.workerIds.map((e) => e.toString());
    } else {
      obj.workerIds = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<PipelineRequestAssignmentRequest_SegmentMapping>,
  ): PipelineRequestAssignmentRequest_SegmentMapping {
    return PipelineRequestAssignmentRequest_SegmentMapping.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<PipelineRequestAssignmentRequest_SegmentMapping>,
  ): PipelineRequestAssignmentRequest_SegmentMapping {
    const message = createBasePipelineRequestAssignmentRequest_SegmentMapping();
    message.segmentName = object.segmentName ?? "";
    message.workerIds = object.workerIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  PipelineRequestAssignmentRequest_SegmentMapping.$type,
  PipelineRequestAssignmentRequest_SegmentMapping,
);

function createBasePipelineRequestAssignmentResponse(): PipelineRequestAssignmentResponse {
  return {
    $type: "mrc.protos.PipelineRequestAssignmentResponse",
    pipelineDefinitionId: BigInt("0"),
    pipelineInstanceId: BigInt("0"),
    segmentInstanceIds: [],
  };
}

export const PipelineRequestAssignmentResponse = {
  $type: "mrc.protos.PipelineRequestAssignmentResponse" as const,

  encode(message: PipelineRequestAssignmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pipelineDefinitionId !== BigInt("0")) {
      writer.uint32(8).uint64(message.pipelineDefinitionId.toString());
    }
    if (message.pipelineInstanceId !== BigInt("0")) {
      writer.uint32(16).uint64(message.pipelineInstanceId.toString());
    }
    writer.uint32(26).fork();
    for (const v of message.segmentInstanceIds) {
      writer.uint64(v.toString());
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipelineRequestAssignmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipelineRequestAssignmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pipelineDefinitionId = longToBigint(reader.uint64() as Long);
          break;
        case 2:
          message.pipelineInstanceId = longToBigint(reader.uint64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.segmentInstanceIds.push(longToBigint(reader.uint64() as Long));
            }
          } else {
            message.segmentInstanceIds.push(longToBigint(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PipelineRequestAssignmentResponse {
    return {
      $type: PipelineRequestAssignmentResponse.$type,
      pipelineDefinitionId: isSet(object.pipelineDefinitionId) ? BigInt(object.pipelineDefinitionId) : BigInt("0"),
      pipelineInstanceId: isSet(object.pipelineInstanceId) ? BigInt(object.pipelineInstanceId) : BigInt("0"),
      segmentInstanceIds: Array.isArray(object?.segmentInstanceIds)
        ? object.segmentInstanceIds.map((e: any) => BigInt(e))
        : [],
    };
  },

  toJSON(message: PipelineRequestAssignmentResponse): unknown {
    const obj: any = {};
    message.pipelineDefinitionId !== undefined && (obj.pipelineDefinitionId = message.pipelineDefinitionId.toString());
    message.pipelineInstanceId !== undefined && (obj.pipelineInstanceId = message.pipelineInstanceId.toString());
    if (message.segmentInstanceIds) {
      obj.segmentInstanceIds = message.segmentInstanceIds.map((e) => e.toString());
    } else {
      obj.segmentInstanceIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PipelineRequestAssignmentResponse>): PipelineRequestAssignmentResponse {
    return PipelineRequestAssignmentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PipelineRequestAssignmentResponse>): PipelineRequestAssignmentResponse {
    const message = createBasePipelineRequestAssignmentResponse();
    message.pipelineDefinitionId = object.pipelineDefinitionId ?? BigInt("0");
    message.pipelineInstanceId = object.pipelineInstanceId ?? BigInt("0");
    message.segmentInstanceIds = object.segmentInstanceIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(PipelineRequestAssignmentResponse.$type, PipelineRequestAssignmentResponse);

function createBaseStateUpdate(): StateUpdate {
  return {
    $type: "mrc.protos.StateUpdate",
    serviceName: "",
    nonce: BigInt("0"),
    instanceId: BigInt("0"),
    connections: undefined,
    updateSubscriptionService: undefined,
    dropSubscriptionService: undefined,
  };
}

export const StateUpdate = {
  $type: "mrc.protos.StateUpdate" as const,

  encode(message: StateUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.nonce !== BigInt("0")) {
      writer.uint32(16).uint64(message.nonce.toString());
    }
    if (message.instanceId !== BigInt("0")) {
      writer.uint32(24).uint64(message.instanceId.toString());
    }
    if (message.connections !== undefined) {
      UpdateConnectionsState.encode(message.connections, writer.uint32(34).fork()).ldelim();
    }
    if (message.updateSubscriptionService !== undefined) {
      UpdateSubscriptionServiceState.encode(message.updateSubscriptionService, writer.uint32(42).fork()).ldelim();
    }
    if (message.dropSubscriptionService !== undefined) {
      DropSubscriptionServiceState.encode(message.dropSubscriptionService, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.nonce = longToBigint(reader.uint64() as Long);
          break;
        case 3:
          message.instanceId = longToBigint(reader.uint64() as Long);
          break;
        case 4:
          message.connections = UpdateConnectionsState.decode(reader, reader.uint32());
          break;
        case 5:
          message.updateSubscriptionService = UpdateSubscriptionServiceState.decode(reader, reader.uint32());
          break;
        case 6:
          message.dropSubscriptionService = DropSubscriptionServiceState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateUpdate {
    return {
      $type: StateUpdate.$type,
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt("0"),
      instanceId: isSet(object.instanceId) ? BigInt(object.instanceId) : BigInt("0"),
      connections: isSet(object.connections) ? UpdateConnectionsState.fromJSON(object.connections) : undefined,
      updateSubscriptionService: isSet(object.updateSubscriptionService)
        ? UpdateSubscriptionServiceState.fromJSON(object.updateSubscriptionService)
        : undefined,
      dropSubscriptionService: isSet(object.dropSubscriptionService)
        ? DropSubscriptionServiceState.fromJSON(object.dropSubscriptionService)
        : undefined,
    };
  },

  toJSON(message: StateUpdate): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.nonce !== undefined && (obj.nonce = message.nonce.toString());
    message.instanceId !== undefined && (obj.instanceId = message.instanceId.toString());
    message.connections !== undefined &&
      (obj.connections = message.connections ? UpdateConnectionsState.toJSON(message.connections) : undefined);
    message.updateSubscriptionService !== undefined &&
      (obj.updateSubscriptionService = message.updateSubscriptionService
        ? UpdateSubscriptionServiceState.toJSON(message.updateSubscriptionService)
        : undefined);
    message.dropSubscriptionService !== undefined && (obj.dropSubscriptionService = message.dropSubscriptionService
      ? DropSubscriptionServiceState.toJSON(message.dropSubscriptionService)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<StateUpdate>): StateUpdate {
    return StateUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StateUpdate>): StateUpdate {
    const message = createBaseStateUpdate();
    message.serviceName = object.serviceName ?? "";
    message.nonce = object.nonce ?? BigInt("0");
    message.instanceId = object.instanceId ?? BigInt("0");
    message.connections = (object.connections !== undefined && object.connections !== null)
      ? UpdateConnectionsState.fromPartial(object.connections)
      : undefined;
    message.updateSubscriptionService =
      (object.updateSubscriptionService !== undefined && object.updateSubscriptionService !== null)
        ? UpdateSubscriptionServiceState.fromPartial(object.updateSubscriptionService)
        : undefined;
    message.dropSubscriptionService =
      (object.dropSubscriptionService !== undefined && object.dropSubscriptionService !== null)
        ? DropSubscriptionServiceState.fromPartial(object.dropSubscriptionService)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(StateUpdate.$type, StateUpdate);

function createBaseUpdateConnectionsState(): UpdateConnectionsState {
  return { $type: "mrc.protos.UpdateConnectionsState", taggedInstances: [] };
}

export const UpdateConnectionsState = {
  $type: "mrc.protos.UpdateConnectionsState" as const,

  encode(message: UpdateConnectionsState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taggedInstances) {
      TaggedInstance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionsState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConnectionsState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taggedInstances.push(TaggedInstance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectionsState {
    return {
      $type: UpdateConnectionsState.$type,
      taggedInstances: Array.isArray(object?.taggedInstances)
        ? object.taggedInstances.map((e: any) => TaggedInstance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateConnectionsState): unknown {
    const obj: any = {};
    if (message.taggedInstances) {
      obj.taggedInstances = message.taggedInstances.map((e) => e ? TaggedInstance.toJSON(e) : undefined);
    } else {
      obj.taggedInstances = [];
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateConnectionsState>): UpdateConnectionsState {
    return UpdateConnectionsState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateConnectionsState>): UpdateConnectionsState {
    const message = createBaseUpdateConnectionsState();
    message.taggedInstances = object.taggedInstances?.map((e) => TaggedInstance.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectionsState.$type, UpdateConnectionsState);

function createBaseUpdateSubscriptionServiceState(): UpdateSubscriptionServiceState {
  return { $type: "mrc.protos.UpdateSubscriptionServiceState", role: "", taggedInstances: [] };
}

export const UpdateSubscriptionServiceState = {
  $type: "mrc.protos.UpdateSubscriptionServiceState" as const,

  encode(message: UpdateSubscriptionServiceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    for (const v of message.taggedInstances) {
      TaggedInstance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSubscriptionServiceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSubscriptionServiceState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.taggedInstances.push(TaggedInstance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubscriptionServiceState {
    return {
      $type: UpdateSubscriptionServiceState.$type,
      role: isSet(object.role) ? String(object.role) : "",
      taggedInstances: Array.isArray(object?.taggedInstances)
        ? object.taggedInstances.map((e: any) => TaggedInstance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateSubscriptionServiceState): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    if (message.taggedInstances) {
      obj.taggedInstances = message.taggedInstances.map((e) => e ? TaggedInstance.toJSON(e) : undefined);
    } else {
      obj.taggedInstances = [];
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateSubscriptionServiceState>): UpdateSubscriptionServiceState {
    return UpdateSubscriptionServiceState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateSubscriptionServiceState>): UpdateSubscriptionServiceState {
    const message = createBaseUpdateSubscriptionServiceState();
    message.role = object.role ?? "";
    message.taggedInstances = object.taggedInstances?.map((e) => TaggedInstance.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateSubscriptionServiceState.$type, UpdateSubscriptionServiceState);

function createBaseDropSubscriptionServiceState(): DropSubscriptionServiceState {
  return { $type: "mrc.protos.DropSubscriptionServiceState", role: "", tag: BigInt("0") };
}

export const DropSubscriptionServiceState = {
  $type: "mrc.protos.DropSubscriptionServiceState" as const,

  encode(message: DropSubscriptionServiceState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.tag !== BigInt("0")) {
      writer.uint32(16).uint64(message.tag.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropSubscriptionServiceState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropSubscriptionServiceState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.tag = longToBigint(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DropSubscriptionServiceState {
    return {
      $type: DropSubscriptionServiceState.$type,
      role: isSet(object.role) ? String(object.role) : "",
      tag: isSet(object.tag) ? BigInt(object.tag) : BigInt("0"),
    };
  },

  toJSON(message: DropSubscriptionServiceState): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    message.tag !== undefined && (obj.tag = message.tag.toString());
    return obj;
  },

  create(base?: DeepPartial<DropSubscriptionServiceState>): DropSubscriptionServiceState {
    return DropSubscriptionServiceState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DropSubscriptionServiceState>): DropSubscriptionServiceState {
    const message = createBaseDropSubscriptionServiceState();
    message.role = object.role ?? "";
    message.tag = object.tag ?? BigInt("0");
    return message;
  },
};

messageTypeRegistry.set(DropSubscriptionServiceState.$type, DropSubscriptionServiceState);

function createBaseControlMessage(): ControlMessage {
  return { $type: "mrc.protos.ControlMessage" };
}

export const ControlMessage = {
  $type: "mrc.protos.ControlMessage" as const,

  encode(_: ControlMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ControlMessage {
    return { $type: ControlMessage.$type };
  },

  toJSON(_: ControlMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ControlMessage>): ControlMessage {
    return ControlMessage.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<ControlMessage>): ControlMessage {
    const message = createBaseControlMessage();
    return message;
  },
};

messageTypeRegistry.set(ControlMessage.$type, ControlMessage);

function createBaseOnComplete(): OnComplete {
  return { $type: "mrc.protos.OnComplete", segmentAddresses: [] };
}

export const OnComplete = {
  $type: "mrc.protos.OnComplete" as const,

  encode(message: OnComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.segmentAddresses) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.segmentAddresses.push(reader.uint32());
            }
          } else {
            message.segmentAddresses.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OnComplete {
    return {
      $type: OnComplete.$type,
      segmentAddresses: Array.isArray(object?.segmentAddresses)
        ? object.segmentAddresses.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: OnComplete): unknown {
    const obj: any = {};
    if (message.segmentAddresses) {
      obj.segmentAddresses = message.segmentAddresses.map((e) => Math.round(e));
    } else {
      obj.segmentAddresses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<OnComplete>): OnComplete {
    return OnComplete.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OnComplete>): OnComplete {
    const message = createBaseOnComplete();
    message.segmentAddresses = object.segmentAddresses?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(OnComplete.$type, OnComplete);

function createBaseUpdateAssignments(): UpdateAssignments {
  return { $type: "mrc.protos.UpdateAssignments", assignments: [] };
}

export const UpdateAssignments = {
  $type: "mrc.protos.UpdateAssignments" as const,

  encode(message: UpdateAssignments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assignments) {
      SegmentAssignment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssignments {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAssignments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assignments.push(SegmentAssignment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAssignments {
    return {
      $type: UpdateAssignments.$type,
      assignments: Array.isArray(object?.assignments)
        ? object.assignments.map((e: any) => SegmentAssignment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateAssignments): unknown {
    const obj: any = {};
    if (message.assignments) {
      obj.assignments = message.assignments.map((e) => e ? SegmentAssignment.toJSON(e) : undefined);
    } else {
      obj.assignments = [];
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAssignments>): UpdateAssignments {
    return UpdateAssignments.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateAssignments>): UpdateAssignments {
    const message = createBaseUpdateAssignments();
    message.assignments = object.assignments?.map((e) => SegmentAssignment.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateAssignments.$type, UpdateAssignments);

function createBaseSegmentAssignment(): SegmentAssignment {
  return {
    $type: "mrc.protos.SegmentAssignment",
    machineId: BigInt("0"),
    instanceId: BigInt("0"),
    address: 0,
    egressPolices: {},
    issueEventOnComplete: false,
    networkIngressPorts: [],
  };
}

export const SegmentAssignment = {
  $type: "mrc.protos.SegmentAssignment" as const,

  encode(message: SegmentAssignment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.machineId !== BigInt("0")) {
      writer.uint32(8).uint64(message.machineId.toString());
    }
    if (message.instanceId !== BigInt("0")) {
      writer.uint32(16).uint64(message.instanceId.toString());
    }
    if (message.address !== 0) {
      writer.uint32(24).uint32(message.address);
    }
    Object.entries(message.egressPolices).forEach(([key, value]) => {
      SegmentAssignment_EgressPolicesEntry.encode({
        $type: "mrc.protos.SegmentAssignment.EgressPolicesEntry",
        key: key as any,
        value,
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.issueEventOnComplete === true) {
      writer.uint32(48).bool(message.issueEventOnComplete);
    }
    writer.uint32(58).fork();
    for (const v of message.networkIngressPorts) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SegmentAssignment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSegmentAssignment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.machineId = longToBigint(reader.uint64() as Long);
          break;
        case 2:
          message.instanceId = longToBigint(reader.uint64() as Long);
          break;
        case 3:
          message.address = reader.uint32();
          break;
        case 5:
          const entry5 = SegmentAssignment_EgressPolicesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.egressPolices[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.issueEventOnComplete = reader.bool();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.networkIngressPorts.push(reader.uint32());
            }
          } else {
            message.networkIngressPorts.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SegmentAssignment {
    return {
      $type: SegmentAssignment.$type,
      machineId: isSet(object.machineId) ? BigInt(object.machineId) : BigInt("0"),
      instanceId: isSet(object.instanceId) ? BigInt(object.instanceId) : BigInt("0"),
      address: isSet(object.address) ? Number(object.address) : 0,
      egressPolices: isObject(object.egressPolices)
        ? Object.entries(object.egressPolices).reduce<{ [key: number]: EgressPolicy }>((acc, [key, value]) => {
          acc[Number(key)] = EgressPolicy.fromJSON(value);
          return acc;
        }, {})
        : {},
      issueEventOnComplete: isSet(object.issueEventOnComplete) ? Boolean(object.issueEventOnComplete) : false,
      networkIngressPorts: Array.isArray(object?.networkIngressPorts)
        ? object.networkIngressPorts.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SegmentAssignment): unknown {
    const obj: any = {};
    message.machineId !== undefined && (obj.machineId = message.machineId.toString());
    message.instanceId !== undefined && (obj.instanceId = message.instanceId.toString());
    message.address !== undefined && (obj.address = Math.round(message.address));
    obj.egressPolices = {};
    if (message.egressPolices) {
      Object.entries(message.egressPolices).forEach(([k, v]) => {
        obj.egressPolices[k] = EgressPolicy.toJSON(v);
      });
    }
    message.issueEventOnComplete !== undefined && (obj.issueEventOnComplete = message.issueEventOnComplete);
    if (message.networkIngressPorts) {
      obj.networkIngressPorts = message.networkIngressPorts.map((e) => Math.round(e));
    } else {
      obj.networkIngressPorts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<SegmentAssignment>): SegmentAssignment {
    return SegmentAssignment.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SegmentAssignment>): SegmentAssignment {
    const message = createBaseSegmentAssignment();
    message.machineId = object.machineId ?? BigInt("0");
    message.instanceId = object.instanceId ?? BigInt("0");
    message.address = object.address ?? 0;
    message.egressPolices = Object.entries(object.egressPolices ?? {}).reduce<{ [key: number]: EgressPolicy }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = EgressPolicy.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.issueEventOnComplete = object.issueEventOnComplete ?? false;
    message.networkIngressPorts = object.networkIngressPorts?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(SegmentAssignment.$type, SegmentAssignment);

function createBaseSegmentAssignment_EgressPolicesEntry(): SegmentAssignment_EgressPolicesEntry {
  return { $type: "mrc.protos.SegmentAssignment.EgressPolicesEntry", key: 0, value: undefined };
}

export const SegmentAssignment_EgressPolicesEntry = {
  $type: "mrc.protos.SegmentAssignment.EgressPolicesEntry" as const,

  encode(message: SegmentAssignment_EgressPolicesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      EgressPolicy.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SegmentAssignment_EgressPolicesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSegmentAssignment_EgressPolicesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = EgressPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SegmentAssignment_EgressPolicesEntry {
    return {
      $type: SegmentAssignment_EgressPolicesEntry.$type,
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? EgressPolicy.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SegmentAssignment_EgressPolicesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value ? EgressPolicy.toJSON(message.value) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SegmentAssignment_EgressPolicesEntry>): SegmentAssignment_EgressPolicesEntry {
    return SegmentAssignment_EgressPolicesEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SegmentAssignment_EgressPolicesEntry>): SegmentAssignment_EgressPolicesEntry {
    const message = createBaseSegmentAssignment_EgressPolicesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? EgressPolicy.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(SegmentAssignment_EgressPolicesEntry.$type, SegmentAssignment_EgressPolicesEntry);

function createBaseTopology(): Topology {
  return { $type: "mrc.protos.Topology", hwlocXmlString: "", cpuSet: "", gpuInfo: [] };
}

export const Topology = {
  $type: "mrc.protos.Topology" as const,

  encode(message: Topology, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hwlocXmlString !== "") {
      writer.uint32(10).string(message.hwlocXmlString);
    }
    if (message.cpuSet !== "") {
      writer.uint32(18).string(message.cpuSet);
    }
    for (const v of message.gpuInfo) {
      GpuInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Topology {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopology();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hwlocXmlString = reader.string();
          break;
        case 2:
          message.cpuSet = reader.string();
          break;
        case 3:
          message.gpuInfo.push(GpuInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Topology {
    return {
      $type: Topology.$type,
      hwlocXmlString: isSet(object.hwlocXmlString) ? String(object.hwlocXmlString) : "",
      cpuSet: isSet(object.cpuSet) ? String(object.cpuSet) : "",
      gpuInfo: Array.isArray(object?.gpuInfo) ? object.gpuInfo.map((e: any) => GpuInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: Topology): unknown {
    const obj: any = {};
    message.hwlocXmlString !== undefined && (obj.hwlocXmlString = message.hwlocXmlString);
    message.cpuSet !== undefined && (obj.cpuSet = message.cpuSet);
    if (message.gpuInfo) {
      obj.gpuInfo = message.gpuInfo.map((e) => e ? GpuInfo.toJSON(e) : undefined);
    } else {
      obj.gpuInfo = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Topology>): Topology {
    return Topology.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Topology>): Topology {
    const message = createBaseTopology();
    message.hwlocXmlString = object.hwlocXmlString ?? "";
    message.cpuSet = object.cpuSet ?? "";
    message.gpuInfo = object.gpuInfo?.map((e) => GpuInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Topology.$type, Topology);

function createBaseGpuInfo(): GpuInfo {
  return {
    $type: "mrc.protos.GpuInfo",
    cpuSet: "",
    name: "",
    uuid: "",
    pcieBusId: "",
    memoryCapacity: BigInt("0"),
    cudaDeviceId: 0,
  };
}

export const GpuInfo = {
  $type: "mrc.protos.GpuInfo" as const,

  encode(message: GpuInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cpuSet !== "") {
      writer.uint32(10).string(message.cpuSet);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.uuid !== "") {
      writer.uint32(26).string(message.uuid);
    }
    if (message.pcieBusId !== "") {
      writer.uint32(34).string(message.pcieBusId);
    }
    if (message.memoryCapacity !== BigInt("0")) {
      writer.uint32(40).uint64(message.memoryCapacity.toString());
    }
    if (message.cudaDeviceId !== 0) {
      writer.uint32(48).int32(message.cudaDeviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GpuInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpuInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpuSet = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.uuid = reader.string();
          break;
        case 4:
          message.pcieBusId = reader.string();
          break;
        case 5:
          message.memoryCapacity = longToBigint(reader.uint64() as Long);
          break;
        case 6:
          message.cudaDeviceId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GpuInfo {
    return {
      $type: GpuInfo.$type,
      cpuSet: isSet(object.cpuSet) ? String(object.cpuSet) : "",
      name: isSet(object.name) ? String(object.name) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      pcieBusId: isSet(object.pcieBusId) ? String(object.pcieBusId) : "",
      memoryCapacity: isSet(object.memoryCapacity) ? BigInt(object.memoryCapacity) : BigInt("0"),
      cudaDeviceId: isSet(object.cudaDeviceId) ? Number(object.cudaDeviceId) : 0,
    };
  },

  toJSON(message: GpuInfo): unknown {
    const obj: any = {};
    message.cpuSet !== undefined && (obj.cpuSet = message.cpuSet);
    message.name !== undefined && (obj.name = message.name);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.pcieBusId !== undefined && (obj.pcieBusId = message.pcieBusId);
    message.memoryCapacity !== undefined && (obj.memoryCapacity = message.memoryCapacity.toString());
    message.cudaDeviceId !== undefined && (obj.cudaDeviceId = Math.round(message.cudaDeviceId));
    return obj;
  },

  create(base?: DeepPartial<GpuInfo>): GpuInfo {
    return GpuInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GpuInfo>): GpuInfo {
    const message = createBaseGpuInfo();
    message.cpuSet = object.cpuSet ?? "";
    message.name = object.name ?? "";
    message.uuid = object.uuid ?? "";
    message.pcieBusId = object.pcieBusId ?? "";
    message.memoryCapacity = object.memoryCapacity ?? BigInt("0");
    message.cudaDeviceId = object.cudaDeviceId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GpuInfo.$type, GpuInfo);

function createBasePipeline(): Pipeline {
  return { $type: "mrc.protos.Pipeline", name: "", segments: [] };
}

export const Pipeline = {
  $type: "mrc.protos.Pipeline" as const,

  encode(message: Pipeline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.segments) {
      SegmentDefinition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pipeline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipeline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.segments.push(SegmentDefinition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pipeline {
    return {
      $type: Pipeline.$type,
      name: isSet(object.name) ? String(object.name) : "",
      segments: Array.isArray(object?.segments) ? object.segments.map((e: any) => SegmentDefinition.fromJSON(e)) : [],
    };
  },

  toJSON(message: Pipeline): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.segments) {
      obj.segments = message.segments.map((e) => e ? SegmentDefinition.toJSON(e) : undefined);
    } else {
      obj.segments = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Pipeline>): Pipeline {
    return Pipeline.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Pipeline>): Pipeline {
    const message = createBasePipeline();
    message.name = object.name ?? "";
    message.segments = object.segments?.map((e) => SegmentDefinition.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Pipeline.$type, Pipeline);

function createBaseWorkerAddress(): WorkerAddress {
  return { $type: "mrc.protos.WorkerAddress", machineId: BigInt("0"), instanceId: BigInt("0"), workerAddress: "" };
}

export const WorkerAddress = {
  $type: "mrc.protos.WorkerAddress" as const,

  encode(message: WorkerAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.machineId !== BigInt("0")) {
      writer.uint32(8).uint64(message.machineId.toString());
    }
    if (message.instanceId !== BigInt("0")) {
      writer.uint32(16).uint64(message.instanceId.toString());
    }
    if (message.workerAddress !== "") {
      writer.uint32(26).string(message.workerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkerAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkerAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.machineId = longToBigint(reader.uint64() as Long);
          break;
        case 2:
          message.instanceId = longToBigint(reader.uint64() as Long);
          break;
        case 3:
          message.workerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerAddress {
    return {
      $type: WorkerAddress.$type,
      machineId: isSet(object.machineId) ? BigInt(object.machineId) : BigInt("0"),
      instanceId: isSet(object.instanceId) ? BigInt(object.instanceId) : BigInt("0"),
      workerAddress: isSet(object.workerAddress) ? String(object.workerAddress) : "",
    };
  },

  toJSON(message: WorkerAddress): unknown {
    const obj: any = {};
    message.machineId !== undefined && (obj.machineId = message.machineId.toString());
    message.instanceId !== undefined && (obj.instanceId = message.instanceId.toString());
    message.workerAddress !== undefined && (obj.workerAddress = message.workerAddress);
    return obj;
  },

  create(base?: DeepPartial<WorkerAddress>): WorkerAddress {
    return WorkerAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WorkerAddress>): WorkerAddress {
    const message = createBaseWorkerAddress();
    message.machineId = object.machineId ?? BigInt("0");
    message.instanceId = object.instanceId ?? BigInt("0");
    message.workerAddress = object.workerAddress ?? "";
    return message;
  },
};

messageTypeRegistry.set(WorkerAddress.$type, WorkerAddress);

function createBaseInstancesResources(): InstancesResources {
  return { $type: "mrc.protos.InstancesResources", hostMemory: BigInt("0"), cpus: [], gpus: [], nics: [] };
}

export const InstancesResources = {
  $type: "mrc.protos.InstancesResources" as const,

  encode(message: InstancesResources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostMemory !== BigInt("0")) {
      writer.uint32(8).uint64(message.hostMemory.toString());
    }
    for (const v of message.cpus) {
      CPU.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.gpus) {
      GPU.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.nics) {
      NIC.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstancesResources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstancesResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostMemory = longToBigint(reader.uint64() as Long);
          break;
        case 2:
          message.cpus.push(CPU.decode(reader, reader.uint32()));
          break;
        case 3:
          message.gpus.push(GPU.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nics.push(NIC.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstancesResources {
    return {
      $type: InstancesResources.$type,
      hostMemory: isSet(object.hostMemory) ? BigInt(object.hostMemory) : BigInt("0"),
      cpus: Array.isArray(object?.cpus) ? object.cpus.map((e: any) => CPU.fromJSON(e)) : [],
      gpus: Array.isArray(object?.gpus) ? object.gpus.map((e: any) => GPU.fromJSON(e)) : [],
      nics: Array.isArray(object?.nics) ? object.nics.map((e: any) => NIC.fromJSON(e)) : [],
    };
  },

  toJSON(message: InstancesResources): unknown {
    const obj: any = {};
    message.hostMemory !== undefined && (obj.hostMemory = message.hostMemory.toString());
    if (message.cpus) {
      obj.cpus = message.cpus.map((e) => e ? CPU.toJSON(e) : undefined);
    } else {
      obj.cpus = [];
    }
    if (message.gpus) {
      obj.gpus = message.gpus.map((e) => e ? GPU.toJSON(e) : undefined);
    } else {
      obj.gpus = [];
    }
    if (message.nics) {
      obj.nics = message.nics.map((e) => e ? NIC.toJSON(e) : undefined);
    } else {
      obj.nics = [];
    }
    return obj;
  },

  create(base?: DeepPartial<InstancesResources>): InstancesResources {
    return InstancesResources.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<InstancesResources>): InstancesResources {
    const message = createBaseInstancesResources();
    message.hostMemory = object.hostMemory ?? BigInt("0");
    message.cpus = object.cpus?.map((e) => CPU.fromPartial(e)) || [];
    message.gpus = object.gpus?.map((e) => GPU.fromPartial(e)) || [];
    message.nics = object.nics?.map((e) => NIC.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(InstancesResources.$type, InstancesResources);

function createBaseCPU(): CPU {
  return { $type: "mrc.protos.CPU", cores: 0, numaNodes: 0 };
}

export const CPU = {
  $type: "mrc.protos.CPU" as const,

  encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cores !== 0) {
      writer.uint32(8).uint32(message.cores);
    }
    if (message.numaNodes !== 0) {
      writer.uint32(16).uint32(message.numaNodes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPU {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cores = reader.uint32();
          break;
        case 2:
          message.numaNodes = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPU {
    return {
      $type: CPU.$type,
      cores: isSet(object.cores) ? Number(object.cores) : 0,
      numaNodes: isSet(object.numaNodes) ? Number(object.numaNodes) : 0,
    };
  },

  toJSON(message: CPU): unknown {
    const obj: any = {};
    message.cores !== undefined && (obj.cores = Math.round(message.cores));
    message.numaNodes !== undefined && (obj.numaNodes = Math.round(message.numaNodes));
    return obj;
  },

  create(base?: DeepPartial<CPU>): CPU {
    return CPU.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CPU>): CPU {
    const message = createBaseCPU();
    message.cores = object.cores ?? 0;
    message.numaNodes = object.numaNodes ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CPU.$type, CPU);

function createBaseGPU(): GPU {
  return { $type: "mrc.protos.GPU", name: "", cores: 0, memory: BigInt("0"), computeCapability: 0 };
}

export const GPU = {
  $type: "mrc.protos.GPU" as const,

  encode(message: GPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.cores !== 0) {
      writer.uint32(16).uint32(message.cores);
    }
    if (message.memory !== BigInt("0")) {
      writer.uint32(24).uint64(message.memory.toString());
    }
    if (message.computeCapability !== 0) {
      writer.uint32(37).float(message.computeCapability);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GPU {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.cores = reader.uint32();
          break;
        case 3:
          message.memory = longToBigint(reader.uint64() as Long);
          break;
        case 4:
          message.computeCapability = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GPU {
    return {
      $type: GPU.$type,
      name: isSet(object.name) ? String(object.name) : "",
      cores: isSet(object.cores) ? Number(object.cores) : 0,
      memory: isSet(object.memory) ? BigInt(object.memory) : BigInt("0"),
      computeCapability: isSet(object.computeCapability) ? Number(object.computeCapability) : 0,
    };
  },

  toJSON(message: GPU): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.cores !== undefined && (obj.cores = Math.round(message.cores));
    message.memory !== undefined && (obj.memory = message.memory.toString());
    message.computeCapability !== undefined && (obj.computeCapability = message.computeCapability);
    return obj;
  },

  create(base?: DeepPartial<GPU>): GPU {
    return GPU.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GPU>): GPU {
    const message = createBaseGPU();
    message.name = object.name ?? "";
    message.cores = object.cores ?? 0;
    message.memory = object.memory ?? BigInt("0");
    message.computeCapability = object.computeCapability ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GPU.$type, GPU);

function createBaseNIC(): NIC {
  return { $type: "mrc.protos.NIC" };
}

export const NIC = {
  $type: "mrc.protos.NIC" as const,

  encode(_: NIC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NIC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNIC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NIC {
    return { $type: NIC.$type };
  },

  toJSON(_: NIC): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<NIC>): NIC {
    return NIC.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<NIC>): NIC {
    const message = createBaseNIC();
    return message;
  },
};

messageTypeRegistry.set(NIC.$type, NIC);

export type ArchitectDefinition = typeof ArchitectDefinition;
export const ArchitectDefinition = {
  name: "Architect",
  fullName: "mrc.protos.Architect",
  methods: {
    eventStream: {
      name: "EventStream",
      requestType: Event,
      requestStream: true,
      responseType: Event,
      responseStream: true,
      options: {},
    },
    ping: {
      name: "Ping",
      requestType: PingRequest,
      requestStream: false,
      responseType: PingResponse,
      responseStream: false,
      options: {},
    },
    shutdown: {
      name: "Shutdown",
      requestType: ShutdownRequest,
      requestStream: false,
      responseType: ShutdownResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ArchitectServiceImplementation<CallContextExt = {}> {
  eventStream(
    request: AsyncIterable<Event>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<Event>>;
  ping(request: PingRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PingResponse>>;
  shutdown(request: ShutdownRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ShutdownResponse>>;
}

export interface ArchitectClient<CallOptionsExt = {}> {
  eventStream(request: AsyncIterable<DeepPartial<Event>>, options?: CallOptions & CallOptionsExt): AsyncIterable<Event>;
  ping(request: DeepPartial<PingRequest>, options?: CallOptions & CallOptionsExt): Promise<PingResponse>;
  shutdown(request: DeepPartial<ShutdownRequest>, options?: CallOptions & CallOptionsExt): Promise<ShutdownResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
