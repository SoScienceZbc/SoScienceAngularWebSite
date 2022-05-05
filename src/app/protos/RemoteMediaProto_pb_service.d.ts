// package: RemoteMediaGRPC
// file: src/app/protos/RemoteMediaProto.proto

import * as src_app_protos_RemoteMediaProto_pb from "../../../src/app/protos/RemoteMediaProto_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RemoteMediaServiceSendMedia = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.MediaRequest;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.MediaReply;
};

type RemoteMediaServiceRetrieveMedia = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.RetrieveMediaRequest;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.RetrieveMediaReply;
};

type RemoteMediaServiceUpdateMedia = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.ChangeTitleRequest;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.MediaReply;
};

type RemoteMediaServiceDeleteMedia = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.RetrieveMediaRequest;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.MediaReply;
};

type RemoteMediaServiceGetMedias = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.ProjectInformation;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.MediaRequests;
};

export class RemoteMediaService {
  static readonly serviceName: string;
  static readonly SendMedia: RemoteMediaServiceSendMedia;
  static readonly RetrieveMedia: RemoteMediaServiceRetrieveMedia;
  static readonly UpdateMedia: RemoteMediaServiceUpdateMedia;
  static readonly DeleteMedia: RemoteMediaServiceDeleteMedia;
  static readonly GetMedias: RemoteMediaServiceGetMedias;
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

export class RemoteMediaServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sendMedia(
    requestMessage: src_app_protos_RemoteMediaProto_pb.MediaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.MediaReply|null) => void
  ): UnaryResponse;
  sendMedia(
    requestMessage: src_app_protos_RemoteMediaProto_pb.MediaRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.MediaReply|null) => void
  ): UnaryResponse;
  retrieveMedia(
    requestMessage: src_app_protos_RemoteMediaProto_pb.RetrieveMediaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.RetrieveMediaReply|null) => void
  ): UnaryResponse;
  retrieveMedia(
    requestMessage: src_app_protos_RemoteMediaProto_pb.RetrieveMediaRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.RetrieveMediaReply|null) => void
  ): UnaryResponse;
  updateMedia(
    requestMessage: src_app_protos_RemoteMediaProto_pb.ChangeTitleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.MediaReply|null) => void
  ): UnaryResponse;
  updateMedia(
    requestMessage: src_app_protos_RemoteMediaProto_pb.ChangeTitleRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.MediaReply|null) => void
  ): UnaryResponse;
  deleteMedia(
    requestMessage: src_app_protos_RemoteMediaProto_pb.RetrieveMediaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.MediaReply|null) => void
  ): UnaryResponse;
  deleteMedia(
    requestMessage: src_app_protos_RemoteMediaProto_pb.RetrieveMediaRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.MediaReply|null) => void
  ): UnaryResponse;
  getMedias(
    requestMessage: src_app_protos_RemoteMediaProto_pb.ProjectInformation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.MediaRequests|null) => void
  ): UnaryResponse;
  getMedias(
    requestMessage: src_app_protos_RemoteMediaProto_pb.ProjectInformation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.MediaRequests|null) => void
  ): UnaryResponse;
}

