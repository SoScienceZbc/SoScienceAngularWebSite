// package: RemoteMediaGRPC
// file: src/app/protos/RemoteMediaProto.proto

import * as jspb from "google-protobuf";

export class MediaRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): MediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MediaRequest): MediaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaRequest;
  static deserializeBinaryFromReader(message: MediaRequest, reader: jspb.BinaryReader): MediaRequest;
}

export namespace MediaRequest {
  export type AsObject = {
    projectid: number,
    title: string,
    type: string,
    blobdata: Uint8Array | string,
  }
}

export class MediaReply extends jspb.Message {
  getReplysuccessfull(): boolean;
  setReplysuccessfull(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaReply.AsObject;
  static toObject(includeInstance: boolean, msg: MediaReply): MediaReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaReply;
  static deserializeBinaryFromReader(message: MediaReply, reader: jspb.BinaryReader): MediaReply;
}

export namespace MediaReply {
  export type AsObject = {
    replysuccessfull: boolean,
  }
}

export class ProjectInformation extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectInformation.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectInformation): ProjectInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectInformation;
  static deserializeBinaryFromReader(message: ProjectInformation, reader: jspb.BinaryReader): ProjectInformation;
}

export namespace ProjectInformation {
  export type AsObject = {
    id: number,
  }
}

export class RetrieveMediaRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMediaRequest): RetrieveMediaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrieveMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMediaRequest;
  static deserializeBinaryFromReader(message: RetrieveMediaRequest, reader: jspb.BinaryReader): RetrieveMediaRequest;
}

export namespace RetrieveMediaRequest {
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

export class RetrieveMediaReply extends jspb.Message {
  getRetrievedblobdata(): Uint8Array | string;
  getRetrievedblobdata_asU8(): Uint8Array;
  getRetrievedblobdata_asB64(): string;
  setRetrievedblobdata(value: Uint8Array | string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMediaReply.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMediaReply): RetrieveMediaReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrieveMediaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMediaReply;
  static deserializeBinaryFromReader(message: RetrieveMediaReply, reader: jspb.BinaryReader): RetrieveMediaReply;
}

export namespace RetrieveMediaReply {
  export type AsObject = {
    retrievedblobdata: Uint8Array | string,
    type: string,
  }
}

export class MediaRequests extends jspb.Message {
  clearAllmediasList(): void;
  getAllmediasList(): Array<MediasReply>;
  setAllmediasList(value: Array<MediasReply>): void;
  addAllmedias(value?: MediasReply, index?: number): MediasReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaRequests.AsObject;
  static toObject(includeInstance: boolean, msg: MediaRequests): MediaRequests.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaRequests, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaRequests;
  static deserializeBinaryFromReader(message: MediaRequests, reader: jspb.BinaryReader): MediaRequests;
}

export namespace MediaRequests {
  export type AsObject = {
    allmediasList: Array<MediasReply.AsObject>,
  }
}

export class MediasReply extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediasReply.AsObject;
  static toObject(includeInstance: boolean, msg: MediasReply): MediasReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediasReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediasReply;
  static deserializeBinaryFromReader(message: MediasReply, reader: jspb.BinaryReader): MediasReply;
}

export namespace MediasReply {
  export type AsObject = {
    id: number,
    title: string,
    type: string,
  }
}

