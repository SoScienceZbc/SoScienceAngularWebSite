// package: LoginGRPC
// file: /protos/AdLookupProto.proto

import * as src_app_protos_AdLookupProto_pb from "../AdLookupProto/AdLookupProto_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LoginServcieLoginAD = {
  readonly methodName: string;
  readonly service: typeof LoginServcie;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_AdLookupProto_pb.LoginRequset;
  readonly responseType: typeof src_app_protos_AdLookupProto_pb.LoginRepley;
};

export class LoginServcie {
  static readonly serviceName: string;
  static readonly LoginAD: LoginServcieLoginAD;
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

export class LoginServcieClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  loginAD(
    requestMessage: src_app_protos_AdLookupProto_pb.LoginRequset,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_AdLookupProto_pb.LoginRepley|null) => void
  ): UnaryResponse;
  loginAD(
    requestMessage: src_app_protos_AdLookupProto_pb.LoginRequset,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_AdLookupProto_pb.LoginRepley|null) => void
  ): UnaryResponse;
}

