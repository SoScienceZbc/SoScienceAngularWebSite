// package: MockupGRPC
// file: src/app/protos/MockupProto.proto

import * as src_app_protos_MockupProto_pb from "../../../src/app/protos/MockupProto_pb";
import {grpc} from "@improbable-eng/grpc-web";

type loginMockuploginMockupSuccessful = {
  readonly methodName: string;
  readonly service: typeof loginMockup;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MockupProto_pb.MockLoginRequest;
  readonly responseType: typeof src_app_protos_MockupProto_pb.MockLoginReply;
};

export class loginMockup {
  static readonly serviceName: string;
  static readonly loginMockupSuccessful: loginMockuploginMockupSuccessful;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class loginMockupClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  loginMockupSuccessful(
    requestMessage: src_app_protos_MockupProto_pb.MockLoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MockupProto_pb.MockLoginReply|null) => void
  ): UnaryResponse;
  loginMockupSuccessful(
    requestMessage: src_app_protos_MockupProto_pb.MockLoginRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MockupProto_pb.MockLoginReply|null) => void
  ): UnaryResponse;
}

