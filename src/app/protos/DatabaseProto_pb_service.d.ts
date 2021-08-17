// package: DatabaseGRPC
// file: src/app/protos/DatabaseProto.proto

import * as src_app_protos_DatabaseProto_pb from "../../../src/app/protos/DatabaseProto_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GrpcDatabaseProjectGetProject = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_Project;
};

type GrpcDatabaseProjectAddProject = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.ProjectUserInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectEditProject = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.ProjectUserInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectRemoveProject = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.ProjectUserInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectGetProjects = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_Projects;
};

type GrpcDatabaseProjectGetDocuments = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_Documents;
};

type GrpcDatabaseProjectAddDocument = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.D_Document;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectGetDocument = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_Document;
};

type GrpcDatabaseProjectUpdateDocument = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.D_Document;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectRemoveDocument = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.ProjectUserInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectAddRemoteFile = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.D_RemoteFile;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectGetRemoteFile = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_RemoteFile;
};

type GrpcDatabaseProjectUpdateRemoteFile = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.D_RemoteFile;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_RemoteFile;
};

type GrpcDatabaseProjectRemoveRemoteFile = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectGetRemoteFiles = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_RemoteFiles;
};

type GrpcDatabaseProjectAddSubject = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.D_Subject;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectGetSubjects = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_Subjects;
};

type GrpcDatabaseProjectAddProjectTheme = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.D_ProjectTheme;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectGetProjectThemes = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.UserDbInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_ProjectThemes;
};

type GrpcDatabaseProjectGetProjectThemesFromSubject = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.ThemeFromSubject;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.D_ProjectThemes;
};

type GrpcDatabaseProjectRemoveProjectTheme = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectAddProjectThemeCoTeacher = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

type GrpcDatabaseProjectRemoveProjectThemeCoTeacher = {
  readonly methodName: string;
  readonly service: typeof GrpcDatabaseProject;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation;
  readonly responseType: typeof src_app_protos_DatabaseProto_pb.intger;
};

export class GrpcDatabaseProject {
  static readonly serviceName: string;
  static readonly GetProject: GrpcDatabaseProjectGetProject;
  static readonly AddProject: GrpcDatabaseProjectAddProject;
  static readonly EditProject: GrpcDatabaseProjectEditProject;
  static readonly RemoveProject: GrpcDatabaseProjectRemoveProject;
  static readonly GetProjects: GrpcDatabaseProjectGetProjects;
  static readonly GetDocuments: GrpcDatabaseProjectGetDocuments;
  static readonly AddDocument: GrpcDatabaseProjectAddDocument;
  static readonly GetDocument: GrpcDatabaseProjectGetDocument;
  static readonly UpdateDocument: GrpcDatabaseProjectUpdateDocument;
  static readonly RemoveDocument: GrpcDatabaseProjectRemoveDocument;
  static readonly AddRemoteFile: GrpcDatabaseProjectAddRemoteFile;
  static readonly GetRemoteFile: GrpcDatabaseProjectGetRemoteFile;
  static readonly UpdateRemoteFile: GrpcDatabaseProjectUpdateRemoteFile;
  static readonly RemoveRemoteFile: GrpcDatabaseProjectRemoveRemoteFile;
  static readonly GetRemoteFiles: GrpcDatabaseProjectGetRemoteFiles;
  static readonly AddSubject: GrpcDatabaseProjectAddSubject;
  static readonly GetSubjects: GrpcDatabaseProjectGetSubjects;
  static readonly AddProjectTheme: GrpcDatabaseProjectAddProjectTheme;
  static readonly GetProjectThemes: GrpcDatabaseProjectGetProjectThemes;
  static readonly GetProjectThemesFromSubject: GrpcDatabaseProjectGetProjectThemesFromSubject;
  static readonly RemoveProjectTheme: GrpcDatabaseProjectRemoveProjectTheme;
  static readonly AddProjectThemeCoTeacher: GrpcDatabaseProjectAddProjectThemeCoTeacher;
  static readonly RemoveProjectThemeCoTeacher: GrpcDatabaseProjectRemoveProjectThemeCoTeacher;
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

export class GrpcDatabaseProjectClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getProject(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Project|null) => void
  ): UnaryResponse;
  getProject(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Project|null) => void
  ): UnaryResponse;
  addProject(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  addProject(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  editProject(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  editProject(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  removeProject(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  removeProject(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  getProjects(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Projects|null) => void
  ): UnaryResponse;
  getProjects(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Projects|null) => void
  ): UnaryResponse;
  getDocuments(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Documents|null) => void
  ): UnaryResponse;
  getDocuments(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Documents|null) => void
  ): UnaryResponse;
  addDocument(
    requestMessage: src_app_protos_DatabaseProto_pb.D_Document,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  addDocument(
    requestMessage: src_app_protos_DatabaseProto_pb.D_Document,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  getDocument(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Document|null) => void
  ): UnaryResponse;
  getDocument(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Document|null) => void
  ): UnaryResponse;
  updateDocument(
    requestMessage: src_app_protos_DatabaseProto_pb.D_Document,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  updateDocument(
    requestMessage: src_app_protos_DatabaseProto_pb.D_Document,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  removeDocument(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  removeDocument(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  addRemoteFile(
    requestMessage: src_app_protos_DatabaseProto_pb.D_RemoteFile,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  addRemoteFile(
    requestMessage: src_app_protos_DatabaseProto_pb.D_RemoteFile,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  getRemoteFile(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_RemoteFile|null) => void
  ): UnaryResponse;
  getRemoteFile(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_RemoteFile|null) => void
  ): UnaryResponse;
  updateRemoteFile(
    requestMessage: src_app_protos_DatabaseProto_pb.D_RemoteFile,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_RemoteFile|null) => void
  ): UnaryResponse;
  updateRemoteFile(
    requestMessage: src_app_protos_DatabaseProto_pb.D_RemoteFile,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_RemoteFile|null) => void
  ): UnaryResponse;
  removeRemoteFile(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  removeRemoteFile(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  getRemoteFiles(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_RemoteFiles|null) => void
  ): UnaryResponse;
  getRemoteFiles(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_RemoteFiles|null) => void
  ): UnaryResponse;
  addSubject(
    requestMessage: src_app_protos_DatabaseProto_pb.D_Subject,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  addSubject(
    requestMessage: src_app_protos_DatabaseProto_pb.D_Subject,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  getSubjects(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Subjects|null) => void
  ): UnaryResponse;
  getSubjects(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_Subjects|null) => void
  ): UnaryResponse;
  addProjectTheme(
    requestMessage: src_app_protos_DatabaseProto_pb.D_ProjectTheme,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  addProjectTheme(
    requestMessage: src_app_protos_DatabaseProto_pb.D_ProjectTheme,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  getProjectThemes(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_ProjectThemes|null) => void
  ): UnaryResponse;
  getProjectThemes(
    requestMessage: src_app_protos_DatabaseProto_pb.UserDbInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_ProjectThemes|null) => void
  ): UnaryResponse;
  getProjectThemesFromSubject(
    requestMessage: src_app_protos_DatabaseProto_pb.ThemeFromSubject,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_ProjectThemes|null) => void
  ): UnaryResponse;
  getProjectThemesFromSubject(
    requestMessage: src_app_protos_DatabaseProto_pb.ThemeFromSubject,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.D_ProjectThemes|null) => void
  ): UnaryResponse;
  removeProjectTheme(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  removeProjectTheme(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  addProjectThemeCoTeacher(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  addProjectThemeCoTeacher(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  removeProjectThemeCoTeacher(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
  removeProjectThemeCoTeacher(
    requestMessage: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_DatabaseProto_pb.intger|null) => void
  ): UnaryResponse;
}

