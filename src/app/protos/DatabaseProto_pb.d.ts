// package: DatabaseGRPC
// file: src/app/protos/DatabaseProto.proto

import * as jspb from "google-protobuf";

export class ThemeFromSubject extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserDbInfomation | undefined;
  setUser(value?: UserDbInfomation): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): D_Subject | undefined;
  setSubject(value?: D_Subject): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThemeFromSubject.AsObject;
  static toObject(includeInstance: boolean, msg: ThemeFromSubject): ThemeFromSubject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThemeFromSubject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThemeFromSubject;
  static deserializeBinaryFromReader(message: ThemeFromSubject, reader: jspb.BinaryReader): ThemeFromSubject;
}

export namespace ThemeFromSubject {
  export type AsObject = {
    user?: UserDbInfomation.AsObject,
    subject?: D_Subject.AsObject,
  }
}

export class UserDbInfomation extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDbname(): string;
  setDbname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDbInfomation.AsObject;
  static toObject(includeInstance: boolean, msg: UserDbInfomation): UserDbInfomation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDbInfomation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDbInfomation;
  static deserializeBinaryFromReader(message: UserDbInfomation, reader: jspb.BinaryReader): UserDbInfomation;
}

export namespace UserDbInfomation {
  export type AsObject = {
    id: number,
    dbname: string,
  }
}

export class ProjectUserInfomation extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserDbInfomation | undefined;
  setUser(value?: UserDbInfomation): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): D_Project | undefined;
  setProject(value?: D_Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectUserInfomation.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectUserInfomation): ProjectUserInfomation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectUserInfomation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectUserInfomation;
  static deserializeBinaryFromReader(message: ProjectUserInfomation, reader: jspb.BinaryReader): ProjectUserInfomation;
}

export namespace ProjectUserInfomation {
  export type AsObject = {
    user?: UserDbInfomation.AsObject,
    project?: D_Project.AsObject,
  }
}

export class ProjectThemeUserInfomation extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserDbInfomation | undefined;
  setUser(value?: UserDbInfomation): void;

  hasTheme(): boolean;
  clearTheme(): void;
  getTheme(): D_ProjectTheme | undefined;
  setTheme(value?: D_ProjectTheme): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectThemeUserInfomation.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectThemeUserInfomation): ProjectThemeUserInfomation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectThemeUserInfomation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectThemeUserInfomation;
  static deserializeBinaryFromReader(message: ProjectThemeUserInfomation, reader: jspb.BinaryReader): ProjectThemeUserInfomation;
}

export namespace ProjectThemeUserInfomation {
  export type AsObject = {
    user?: UserDbInfomation.AsObject,
    theme?: D_ProjectTheme.AsObject,
    username: string,
  }
}

export class intger extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): intger.AsObject;
  static toObject(includeInstance: boolean, msg: intger): intger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: intger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): intger;
  static deserializeBinaryFromReader(message: intger, reader: jspb.BinaryReader): intger;
}

export namespace intger {
  export type AsObject = {
    number: number,
  }
}

export class D_Documents extends jspb.Message {
  clearDDocumentsList(): void;
  getDDocumentsList(): Array<D_Document>;
  setDDocumentsList(value: Array<D_Document>): void;
  addDDocuments(value?: D_Document, index?: number): D_Document;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_Documents.AsObject;
  static toObject(includeInstance: boolean, msg: D_Documents): D_Documents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_Documents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_Documents;
  static deserializeBinaryFromReader(message: D_Documents, reader: jspb.BinaryReader): D_Documents;
}

export namespace D_Documents {
  export type AsObject = {
    dDocumentsList: Array<D_Document.AsObject>,
  }
}

export class D_Projects extends jspb.Message {
  clearDProjectList(): void;
  getDProjectList(): Array<D_Project>;
  setDProjectList(value: Array<D_Project>): void;
  addDProject(value?: D_Project, index?: number): D_Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_Projects.AsObject;
  static toObject(includeInstance: boolean, msg: D_Projects): D_Projects.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_Projects, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_Projects;
  static deserializeBinaryFromReader(message: D_Projects, reader: jspb.BinaryReader): D_Projects;
}

export namespace D_Projects {
  export type AsObject = {
    dProjectList: Array<D_Project.AsObject>,
  }
}

export class D_RemoteFiles extends jspb.Message {
  clearDRemotefileList(): void;
  getDRemotefileList(): Array<D_RemoteFile>;
  setDRemotefileList(value: Array<D_RemoteFile>): void;
  addDRemotefile(value?: D_RemoteFile, index?: number): D_RemoteFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_RemoteFiles.AsObject;
  static toObject(includeInstance: boolean, msg: D_RemoteFiles): D_RemoteFiles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_RemoteFiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_RemoteFiles;
  static deserializeBinaryFromReader(message: D_RemoteFiles, reader: jspb.BinaryReader): D_RemoteFiles;
}

export namespace D_RemoteFiles {
  export type AsObject = {
    dRemotefileList: Array<D_RemoteFile.AsObject>,
  }
}

export class D_Subjects extends jspb.Message {
  clearSubjectList(): void;
  getSubjectList(): Array<D_Subject>;
  setSubjectList(value: Array<D_Subject>): void;
  addSubject(value?: D_Subject, index?: number): D_Subject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_Subjects.AsObject;
  static toObject(includeInstance: boolean, msg: D_Subjects): D_Subjects.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_Subjects, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_Subjects;
  static deserializeBinaryFromReader(message: D_Subjects, reader: jspb.BinaryReader): D_Subjects;
}

export namespace D_Subjects {
  export type AsObject = {
    subjectList: Array<D_Subject.AsObject>,
  }
}

export class D_ProjectThemes extends jspb.Message {
  clearProjectthemeList(): void;
  getProjectthemeList(): Array<D_ProjectTheme>;
  setProjectthemeList(value: Array<D_ProjectTheme>): void;
  addProjecttheme(value?: D_ProjectTheme, index?: number): D_ProjectTheme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_ProjectThemes.AsObject;
  static toObject(includeInstance: boolean, msg: D_ProjectThemes): D_ProjectThemes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_ProjectThemes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_ProjectThemes;
  static deserializeBinaryFromReader(message: D_ProjectThemes, reader: jspb.BinaryReader): D_ProjectThemes;
}

export namespace D_ProjectThemes {
  export type AsObject = {
    projectthemeList: Array<D_ProjectTheme.AsObject>,
  }
}

export class D_Project extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getCompleted(): boolean;
  setCompleted(value: boolean): void;

  getLastedited(): string;
  setLastedited(value: string): void;

  getEnddate(): string;
  setEnddate(value: string): void;

  clearDocumentsList(): void;
  getDocumentsList(): Array<D_Document>;
  setDocumentsList(value: Array<D_Document>): void;
  addDocuments(value?: D_Document, index?: number): D_Document;

  getProjectthemeid(): number;
  setProjectthemeid(value: number): void;

  getClosetodeletion(): boolean;
  setClosetodeletion(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_Project.AsObject;
  static toObject(includeInstance: boolean, msg: D_Project): D_Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_Project;
  static deserializeBinaryFromReader(message: D_Project, reader: jspb.BinaryReader): D_Project;
}

export namespace D_Project {
  export type AsObject = {
    id: number,
    name: string,
    completed: boolean,
    lastedited: string,
    enddate: string,
    documentsList: Array<D_Document.AsObject>,
    projectthemeid: number,
    closetodeletion: boolean,
  }
}

export class D_Document extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getProjectid(): number;
  setProjectid(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getType(): string;
  setType(value: string): void;

  getData(): string;
  setData(value: string): void;

  getCompletedcount(): number;
  setCompletedcount(value: number): void;

  clearCompletedList(): void;
  getCompletedList(): Array<string>;
  setCompletedList(value: Array<string>): void;
  addCompleted(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_Document.AsObject;
  static toObject(includeInstance: boolean, msg: D_Document): D_Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_Document;
  static deserializeBinaryFromReader(message: D_Document, reader: jspb.BinaryReader): D_Document;
}

export namespace D_Document {
  export type AsObject = {
    id: number,
    projectid: number,
    title: string,
    type: string,
    data: string,
    completedcount: number,
    completedList: Array<string>,
  }
}

export class D_RemoteFile extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getType(): string;
  setType(value: string): void;

  getProjectid(): number;
  setProjectid(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_RemoteFile.AsObject;
  static toObject(includeInstance: boolean, msg: D_RemoteFile): D_RemoteFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_RemoteFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_RemoteFile;
  static deserializeBinaryFromReader(message: D_RemoteFile, reader: jspb.BinaryReader): D_RemoteFile;
}

export namespace D_RemoteFile {
  export type AsObject = {
    id: number,
    title: string,
    type: string,
    projectid: number,
    path: string,
  }
}

export class D_Subject extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserDbInfomation | undefined;
  setUser(value?: UserDbInfomation): void;

  getName(): string;
  setName(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_Subject.AsObject;
  static toObject(includeInstance: boolean, msg: D_Subject): D_Subject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_Subject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_Subject;
  static deserializeBinaryFromReader(message: D_Subject, reader: jspb.BinaryReader): D_Subject;
}

export namespace D_Subject {
  export type AsObject = {
    user?: UserDbInfomation.AsObject,
    name: string,
    id: number,
  }
}

export class D_ProjectTheme extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getEnddate(): string;
  setEnddate(value: string): void;

  getLastedited(): string;
  setLastedited(value: string): void;

  getTeacher(): string;
  setTeacher(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  hasProjects(): boolean;
  clearProjects(): void;
  getProjects(): D_Projects | undefined;
  setProjects(value?: D_Projects): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): D_ProjectTheme.AsObject;
  static toObject(includeInstance: boolean, msg: D_ProjectTheme): D_ProjectTheme.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: D_ProjectTheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): D_ProjectTheme;
  static deserializeBinaryFromReader(message: D_ProjectTheme, reader: jspb.BinaryReader): D_ProjectTheme;
}

export namespace D_ProjectTheme {
  export type AsObject = {
    id: number,
    name: string,
    enddate: string,
    lastedited: string,
    teacher: string,
    subject: string,
    projects?: D_Projects.AsObject,
  }
}

