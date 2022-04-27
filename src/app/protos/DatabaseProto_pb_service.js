// package: DatabaseGRPC
// file: src/app/protos/DatabaseProto.proto

var src_app_protos_DatabaseProto_pb = require("../../../src/app/protos/DatabaseProto_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GrpcDatabaseProject = (function () {
  function GrpcDatabaseProject() {}
  GrpcDatabaseProject.serviceName = "DatabaseGRPC.GrpcDatabaseProject";
  return GrpcDatabaseProject;
}());

GrpcDatabaseProject.GetProject = {
  methodName: "GetProject",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.D_Project
};

GrpcDatabaseProject.AddProject = {
  methodName: "AddProject",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.EditProject = {
  methodName: "EditProject",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.RemoveProject = {
  methodName: "RemoveProject",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.GetProjects = {
  methodName: "GetProjects",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.D_Projects
};

GrpcDatabaseProject.AddDocument = {
  methodName: "AddDocument",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.D_Document,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.GetDocument = {
  methodName: "GetDocument",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.D_Document
};

GrpcDatabaseProject.UpdateDocument = {
  methodName: "UpdateDocument",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.D_Document,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.RemoveDocument = {
  methodName: "RemoveDocument",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.ProjectUserInfomation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.GetDocuments = {
  methodName: "GetDocuments",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.D_Documents
};

GrpcDatabaseProject.AddRemoteFile = {
  methodName: "AddRemoteFile",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.D_RemoteFile,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.GetRemoteFile = {
  methodName: "GetRemoteFile",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.D_RemoteFile
};

GrpcDatabaseProject.UpdateRemoteFile = {
  methodName: "UpdateRemoteFile",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.D_RemoteFile,
  responseType: src_app_protos_DatabaseProto_pb.D_RemoteFile
};

GrpcDatabaseProject.RemoveRemoteFile = {
  methodName: "RemoveRemoteFile",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.GetRemoteFiles = {
  methodName: "GetRemoteFiles",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.D_RemoteFiles
};

GrpcDatabaseProject.AddSubject = {
  methodName: "AddSubject",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.D_Subject,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.GetSubjects = {
  methodName: "GetSubjects",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.D_Subjects
};

GrpcDatabaseProject.AddProjectTheme = {
  methodName: "AddProjectTheme",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.D_ProjectTheme,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.GetProjectThemes = {
  methodName: "GetProjectThemes",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.UserDbInfomation,
  responseType: src_app_protos_DatabaseProto_pb.D_ProjectThemes
};

GrpcDatabaseProject.GetProjectThemesFromSubject = {
  methodName: "GetProjectThemesFromSubject",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.ThemeFromSubject,
  responseType: src_app_protos_DatabaseProto_pb.D_ProjectThemes
};

GrpcDatabaseProject.RemoveProjectTheme = {
  methodName: "RemoveProjectTheme",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.AddProjectThemeCoTeacher = {
  methodName: "AddProjectThemeCoTeacher",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.RemoveProjectThemeCoTeacher = {
  methodName: "RemoveProjectThemeCoTeacher",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.ProjectThemeUserInfomation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.AddProjectMember = {
  methodName: "AddProjectMember",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.MemberInformation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

GrpcDatabaseProject.RemoveProjectMember = {
  methodName: "RemoveProjectMember",
  service: GrpcDatabaseProject,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_DatabaseProto_pb.MemberInformation,
  responseType: src_app_protos_DatabaseProto_pb.intger
};

exports.GrpcDatabaseProject = GrpcDatabaseProject;

function GrpcDatabaseProjectClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GrpcDatabaseProjectClient.prototype.getProject = function getProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.addProject = function addProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.AddProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.editProject = function editProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.EditProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.removeProject = function removeProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.RemoveProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.getProjects = function getProjects(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetProjects, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.addDocument = function addDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.AddDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.getDocument = function getDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.updateDocument = function updateDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.UpdateDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.removeDocument = function removeDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.RemoveDocument, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.getDocuments = function getDocuments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetDocuments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.addRemoteFile = function addRemoteFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.AddRemoteFile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.getRemoteFile = function getRemoteFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetRemoteFile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.updateRemoteFile = function updateRemoteFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.UpdateRemoteFile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.removeRemoteFile = function removeRemoteFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.RemoveRemoteFile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.getRemoteFiles = function getRemoteFiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetRemoteFiles, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.addSubject = function addSubject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.AddSubject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.getSubjects = function getSubjects(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetSubjects, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.addProjectTheme = function addProjectTheme(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.AddProjectTheme, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.getProjectThemes = function getProjectThemes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetProjectThemes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.getProjectThemesFromSubject = function getProjectThemesFromSubject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.GetProjectThemesFromSubject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.removeProjectTheme = function removeProjectTheme(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.RemoveProjectTheme, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.addProjectThemeCoTeacher = function addProjectThemeCoTeacher(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.AddProjectThemeCoTeacher, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.removeProjectThemeCoTeacher = function removeProjectThemeCoTeacher(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.RemoveProjectThemeCoTeacher, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.addProjectMember = function addProjectMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.AddProjectMember, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GrpcDatabaseProjectClient.prototype.removeProjectMember = function removeProjectMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GrpcDatabaseProject.RemoveProjectMember, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.GrpcDatabaseProjectClient = GrpcDatabaseProjectClient;

