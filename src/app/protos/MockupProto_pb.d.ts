// package: MockupGRPC
// file: src/app/protos/MockupProto.proto

import * as jspb from "google-protobuf";

export class MockLoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPass(): string;
  setPass(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MockLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MockLoginRequest): MockLoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MockLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MockLoginRequest;
  static deserializeBinaryFromReader(message: MockLoginRequest, reader: jspb.BinaryReader): MockLoginRequest;
}

export namespace MockLoginRequest {
  export type AsObject = {
    username: string,
    pass: string,
  }
}

export class MockLoginReply extends jspb.Message {
  getMockloginsuccess(): boolean;
  setMockloginsuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MockLoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: MockLoginReply): MockLoginReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MockLoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MockLoginReply;
  static deserializeBinaryFromReader(message: MockLoginReply, reader: jspb.BinaryReader): MockLoginReply;
}

export namespace MockLoginReply {
  export type AsObject = {
    mockloginsuccess: boolean,
  }
}

