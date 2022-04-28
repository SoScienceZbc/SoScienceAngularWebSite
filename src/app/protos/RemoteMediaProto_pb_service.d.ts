// package: RemoteMediaGRPC
// file: src/app/protos/RemoteMediaProto.proto

import * as src_app_protos_RemoteMediaProto_pb from "../../../src/app/protos/RemoteMediaProto_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RemoteMediaServiceSendVideo = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.VideoRequest;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.VideoReply;
};

type RemoteMediaServiceRetrieveVideo = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.RetrieveVideoRequest;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.RetrieveVideoReply;
};

type RemoteMediaServiceUpdateVideo = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.ChangeTitleRequest;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.VideoReply;
};

type RemoteMediaServiceDeleteVideo = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.RetrieveVideoRequest;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.VideoReply;
};

type RemoteMediaServiceGetVideos = {
  readonly methodName: string;
  readonly service: typeof RemoteMediaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_RemoteMediaProto_pb.UserDbInformation;
  readonly responseType: typeof src_app_protos_RemoteMediaProto_pb.VideosReply;
};

export class RemoteMediaService {
  static readonly serviceName: string;
  static readonly SendVideo: RemoteMediaServiceSendVideo;
  static readonly RetrieveVideo: RemoteMediaServiceRetrieveVideo;
  static readonly UpdateVideo: RemoteMediaServiceUpdateVideo;
  static readonly DeleteVideo: RemoteMediaServiceDeleteVideo;
  static readonly GetVideos: RemoteMediaServiceGetVideos;
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
  sendVideo(
    requestMessage: src_app_protos_RemoteMediaProto_pb.VideoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.VideoReply|null) => void
  ): UnaryResponse;
  sendVideo(
    requestMessage: src_app_protos_RemoteMediaProto_pb.VideoRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.VideoReply|null) => void
  ): UnaryResponse;
  retrieveVideo(
    requestMessage: src_app_protos_RemoteMediaProto_pb.RetrieveVideoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.RetrieveVideoReply|null) => void
  ): UnaryResponse;
  retrieveVideo(
    requestMessage: src_app_protos_RemoteMediaProto_pb.RetrieveVideoRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.RetrieveVideoReply|null) => void
  ): UnaryResponse;
  updateVideo(
    requestMessage: src_app_protos_RemoteMediaProto_pb.ChangeTitleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.VideoReply|null) => void
  ): UnaryResponse;
  updateVideo(
    requestMessage: src_app_protos_RemoteMediaProto_pb.ChangeTitleRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.VideoReply|null) => void
  ): UnaryResponse;
  deleteVideo(
    requestMessage: src_app_protos_RemoteMediaProto_pb.RetrieveVideoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.VideoReply|null) => void
  ): UnaryResponse;
  deleteVideo(
    requestMessage: src_app_protos_RemoteMediaProto_pb.RetrieveVideoRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.VideoReply|null) => void
  ): UnaryResponse;
  getVideos(
    requestMessage: src_app_protos_RemoteMediaProto_pb.UserDbInformation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.VideosReply|null) => void
  ): UnaryResponse;
  getVideos(
    requestMessage: src_app_protos_RemoteMediaProto_pb.UserDbInformation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_RemoteMediaProto_pb.VideosReply|null) => void
  ): UnaryResponse;
}

