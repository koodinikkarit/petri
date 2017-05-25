// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var token_pb = require('./token_pb.js');
var user_pb = require('./user_pb.js');

function serialize_RistoService_CreateTokenRequest(arg) {
  if (!(arg instanceof token_pb.CreateTokenRequest)) {
    throw new Error('Expected argument of type RistoService.CreateTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RistoService_CreateTokenRequest(buffer_arg) {
  return token_pb.CreateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RistoService_CreateTokenResponse(arg) {
  if (!(arg instanceof token_pb.CreateTokenResponse)) {
    throw new Error('Expected argument of type RistoService.CreateTokenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RistoService_CreateTokenResponse(buffer_arg) {
  return token_pb.CreateTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RistoService_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type RistoService.CreateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RistoService_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RistoService_CreateUserResponse(arg) {
  if (!(arg instanceof user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type RistoService.CreateUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RistoService_CreateUserResponse(buffer_arg) {
  return user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RistoService = exports.RistoService = {
  createToken: {
    path: '/RistoService.Risto/createToken',
    requestStream: false,
    responseStream: false,
    requestType: token_pb.CreateTokenRequest,
    responseType: token_pb.CreateTokenResponse,
    requestSerialize: serialize_RistoService_CreateTokenRequest,
    requestDeserialize: deserialize_RistoService_CreateTokenRequest,
    responseSerialize: serialize_RistoService_CreateTokenResponse,
    responseDeserialize: deserialize_RistoService_CreateTokenResponse,
  },
  createUser: {
    path: '/RistoService.Risto/createUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.CreateUserResponse,
    requestSerialize: serialize_RistoService_CreateUserRequest,
    requestDeserialize: deserialize_RistoService_CreateUserRequest,
    responseSerialize: serialize_RistoService_CreateUserResponse,
    responseDeserialize: deserialize_RistoService_CreateUserResponse,
  },
  fetchUserByToken: {
    path: '/RistoService.Risto/fetchUserByToken',
    requestStream: false,
    responseStream: false,
    requestType: token_pb.CreateTokenRequest,
    responseType: token_pb.CreateTokenResponse,
    requestSerialize: serialize_RistoService_CreateTokenRequest,
    requestDeserialize: deserialize_RistoService_CreateTokenRequest,
    responseSerialize: serialize_RistoService_CreateTokenResponse,
    responseDeserialize: deserialize_RistoService_CreateTokenResponse,
  },
};

exports.RistoClient = grpc.makeGenericClientConstructor(RistoService);
