// package: RemoteMediaGRPC
// file: src/app/protos/RemoteMediaProto.proto

import * as jspb from "google-protobuf";

export class VideoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getProjectid(): number;
  setProjectid(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getType(): string;
  setType(value: string): void;

  getBlobdata(): Uint8Array | string;
  getBlobdata_asU8(): Uint8Array;
  getBlobdata_asB64(): string;
  setBlobdata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VideoRequest): VideoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoRequest;
  static deserializeBinaryFromReader(message: VideoRequest, reader: jspb.BinaryReader): VideoRequest;
}

export namespace VideoRequest {
  export type AsObject = {
    id: number,
    projectid: number,
    title: string,
    type: string,
    blobdata: Uint8Array | string,
  }
}

export class VideoReply extends jspb.Message {
  getReplysuccessfull(): boolean;
  setReplysuccessfull(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoReply.AsObject;
  static toObject(includeInstance: boolean, msg: VideoReply): VideoReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoReply;
  static deserializeBinaryFromReader(message: VideoReply, reader: jspb.BinaryReader): VideoReply;
}

export namespace VideoReply {
  export type AsObject = {
    replysuccessfull: boolean,
  }
}

export class UserDbInformation extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDbInformation.AsObject;
  static toObject(includeInstance: boolean, msg: UserDbInformation): UserDbInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDbInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDbInformation;
  static deserializeBinaryFromReader(message: UserDbInformation, reader: jspb.BinaryReader): UserDbInformation;
}

export namespace UserDbInformation {
  export type AsObject = {
    id: number,
    username: string,
  }
}

export class RetrieveVideoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveVideoRequest): RetrieveVideoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrieveVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveVideoRequest;
  static deserializeBinaryFromReader(message: RetrieveVideoRequest, reader: jspb.BinaryReader): RetrieveVideoRequest;
}

export namespace RetrieveVideoRequest {
  export type AsObject = {
    id: number,
  }
}

export class ChangeTitleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeTitleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeTitleRequest): ChangeTitleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeTitleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeTitleRequest;
  static deserializeBinaryFromReader(message: ChangeTitleRequest, reader: jspb.BinaryReader): ChangeTitleRequest;
}

export namespace ChangeTitleRequest {
  export type AsObject = {
    id: number,
    title: string,
  }
}

export class RetrieveVideoReply extends jspb.Message {
  getRetrievedblobdata(): Uint8Array | string;
  getRetrievedblobdata_asU8(): Uint8Array;
  getRetrievedblobdata_asB64(): string;
  setRetrievedblobdata(value: Uint8Array | string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveVideoReply.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveVideoReply): RetrieveVideoReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrieveVideoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveVideoReply;
  static deserializeBinaryFromReader(message: RetrieveVideoReply, reader: jspb.BinaryReader): RetrieveVideoReply;
}

export namespace RetrieveVideoReply {
  export type AsObject = {
    retrievedblobdata: Uint8Array | string,
    type: string,
  }
}

export class VideoRequests extends jspb.Message {
  clearVideorequestsList(): void;
  getVideorequestsList(): Array<VideoRequest>;
  setVideorequestsList(value: Array<VideoRequest>): void;
  addVideorequests(value?: VideoRequest, index?: number): VideoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoRequests.AsObject;
  static toObject(includeInstance: boolean, msg: VideoRequests): VideoRequests.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoRequests, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoRequests;
  static deserializeBinaryFromReader(message: VideoRequests, reader: jspb.BinaryReader): VideoRequests;
}

export namespace VideoRequests {
  export type AsObject = {
    videorequestsList: Array<VideoRequest.AsObject>,
  }
}

