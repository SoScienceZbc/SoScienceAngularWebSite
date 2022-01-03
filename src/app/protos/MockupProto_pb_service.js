// package: MockupGRPC
// file: src/app/protos/MockupProto.proto

var src_app_protos_MockupProto_pb = require("../../../src/app/protos/MockupProto_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var loginMockup = (function () {
  function loginMockup() {}
  loginMockup.serviceName = "MockupGRPC.loginMockup";
  return loginMockup;
}());

loginMockup.loginMockupSuccessful = {
  methodName: "loginMockupSuccessful",
  service: loginMockup,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MockupProto_pb.MockLoginRequest,
  responseType: src_app_protos_MockupProto_pb.MockLoginReply
};

exports.loginMockup = loginMockup;

function loginMockupClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

loginMockupClient.prototype.loginMockupSuccessful = function loginMockupSuccessful(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(loginMockup.loginMockupSuccessful, {
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

exports.loginMockupClient = loginMockupClient;

