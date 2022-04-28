// package: RemoteMediaGRPC
// file: src/app/protos/RemoteMediaProto.proto

var src_app_protos_RemoteMediaProto_pb = require("../../../src/app/protos/RemoteMediaProto_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RemoteMediaService = (function () {
  function RemoteMediaService() {}
  RemoteMediaService.serviceName = "RemoteMediaGRPC.RemoteMediaService";
  return RemoteMediaService;
}());

RemoteMediaService.SendVideo = {
  methodName: "SendVideo",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.VideoRequest,
  responseType: src_app_protos_RemoteMediaProto_pb.VideoReply
};

RemoteMediaService.RetrieveVideo = {
  methodName: "RetrieveVideo",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.RetrieveVideoRequest,
  responseType: src_app_protos_RemoteMediaProto_pb.RetrieveVideoReply
};

RemoteMediaService.UpdateVideo = {
  methodName: "UpdateVideo",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.ChangeTitleRequest,
  responseType: src_app_protos_RemoteMediaProto_pb.VideoReply
};

RemoteMediaService.DeleteVideo = {
  methodName: "DeleteVideo",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.RetrieveVideoRequest,
  responseType: src_app_protos_RemoteMediaProto_pb.VideoReply
};

RemoteMediaService.GetVideos = {
  methodName: "GetVideos",
  service: RemoteMediaService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_RemoteMediaProto_pb.UserDbInformation,
  responseType: src_app_protos_RemoteMediaProto_pb.VideosReply
};

exports.RemoteMediaService = RemoteMediaService;

function RemoteMediaServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RemoteMediaServiceClient.prototype.sendVideo = function sendVideo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.SendVideo, {
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

RemoteMediaServiceClient.prototype.retrieveVideo = function retrieveVideo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.RetrieveVideo, {
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

RemoteMediaServiceClient.prototype.updateVideo = function updateVideo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.UpdateVideo, {
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

RemoteMediaServiceClient.prototype.deleteVideo = function deleteVideo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.DeleteVideo, {
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

RemoteMediaServiceClient.prototype.getVideos = function getVideos(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RemoteMediaService.GetVideos, {
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

