// package: RemoteMediaGRPC
// file: src/app/protos/RemoteMediaProto.proto

var src_app_protos_RemoteMediaProto_pb = require("../../../src/app/protos/RemoteMediaProto_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RemoteMediaService = (function () {
  function RemoteMediaService() {}
  RemoteMediaService.serviceName = "RemoteMediaGRPC.RemoteMediaService";
  return RemoteMediaService;
}());

RemoteMediaService.SendMedia = {
  methodName: "SendMedia",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.MediaRequest,
  responseType: src_app_protos_RemoteMediaProto_pb.MediaReply
};

RemoteMediaService.RetrieveMedia = {
  methodName: "RetrieveMedia",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.RetrieveMediaRequest,
  responseType: src_app_protos_RemoteMediaProto_pb.RetrieveMediaReply
};

RemoteMediaService.UpdateMedia = {
  methodName: "UpdateMedia",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.ChangeTitleRequest,
  responseType: src_app_protos_RemoteMediaProto_pb.MediaReply
};

RemoteMediaService.DeleteMedia = {
  methodName: "DeleteMedia",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.RetrieveMediaRequest,
  responseType: src_app_protos_RemoteMediaProto_pb.MediaReply
};

RemoteMediaService.GetMedias = {
  methodName: "GetMedias",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.ProjectInformation,
  responseType: src_app_protos_RemoteMediaProto_pb.MediaRequests
};

exports.RemoteMediaService = RemoteMediaService;

function RemoteMediaServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RemoteMediaServiceClient.prototype.sendMedia = function sendMedia(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.SendMedia, {
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

RemoteMediaServiceClient.prototype.retrieveMedia = function retrieveMedia(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.RetrieveMedia, {
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

RemoteMediaServiceClient.prototype.updateMedia = function updateMedia(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.UpdateMedia, {
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

RemoteMediaServiceClient.prototype.deleteMedia = function deleteMedia(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.DeleteMedia, {
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

RemoteMediaServiceClient.prototype.getMedias = function getMedias(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.GetMedias, {
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

exports.RemoteMediaServiceClient = RemoteMediaServiceClient;

