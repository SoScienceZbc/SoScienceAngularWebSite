// package: LoginGRPC
// file: src/app/protos/AdLookupProto.proto

var src_app_protos_AdLookupProto_pb = require("./AdLookupProto_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LoginServcie = (function () {
  function LoginServcie() {}
  LoginServcie.serviceName = "LoginGRPC.LoginServcie";
  return LoginServcie;
}());

LoginServcie.LoginAD = {
  methodName: "LoginAD",
  service: LoginServcie,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_AdLookupProto_pb.LoginRequset,
  responseType: src_app_protos_AdLookupProto_pb.LoginRepley
};

exports.LoginServcie = LoginServcie;

function LoginServcieClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LoginServcieClient.prototype.loginAD = function loginAD(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoginServcie.LoginAD, {
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

exports.LoginServcieClient = LoginServcieClient;

