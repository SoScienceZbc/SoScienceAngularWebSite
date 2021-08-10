// package: LoginGRPC
// file: src/app/protos/ADLookupProto.proto

var src_app_protos_ADLookupProto_pb = require("./ADLookupProto_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LoginService = (function () {
  function LoginService() {}
  LoginService.serviceName = "LoginGRPC.LoginService";
  return LoginService;
}());

LoginService.LoginAD = {
  methodName: "LoginAD",
  service: LoginService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_ADLookupProto_pb.LoginRequset,
  responseType: src_app_protos_ADLookupProto_pb.LoginRepley
};

LoginService.ValidateToken = {
  methodName: "ValidateToken",
  service: LoginService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_ADLookupProto_pb.LoginRepley,
  responseType: src_app_protos_ADLookupProto_pb.LoginRepley
};

exports.LoginService = LoginService;

function LoginServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LoginServiceClient.prototype.loginAD = function loginAD(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoginService.LoginAD, {
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

LoginServiceClient.prototype.validateToken = function validateToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoginService.ValidateToken, {
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

exports.LoginServiceClient = LoginServiceClient;

