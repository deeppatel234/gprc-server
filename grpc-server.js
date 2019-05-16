var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync('ping_pong.proto');

var pingPongProto = grpc.loadPackageDefinition(packageDefinition);
var server = new grpc.Server();

server.addService(pingPongProto.pingpong.PingPongService.service, {
  pingPong: function(call,callback) {
    console.log("Request")
    return callback(null,{pong:"Pong"})
  }
});

server.bind('localhost:8080',grpc.ServerCredentials.createInsecure());
server.start();
