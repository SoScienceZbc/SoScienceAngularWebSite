// package: LoginGRPC
// file: src/app/protos/AdLookupProto.proto

import * as jspb from "google-protobuf";

export class LoginRequset extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequset.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequset): LoginRequset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequset;
  static deserializeBinaryFromReader(message: LoginRequset, reader: jspb.BinaryReader): LoginRequset;
}

export namespace LoginRequset {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginRepley extends jspb.Message {
  getLoginsucsefull(): boolean;
  setLoginsucsefull(value: boolean): void;

  getAdmin(): boolean;
  setAdmin(value: boolean): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRepley.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRepley): LoginRepley.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRepley, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRepley;
  static deserializeBinaryFromReader(message: LoginRepley, reader: jspb.BinaryReader): LoginRepley;
}

export namespace LoginRepley {
  export type AsObject = {
    loginsucsefull: boolean,
    admin: boolean,
    token: string,
  }
}

