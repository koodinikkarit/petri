// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var add_computer_request_pb = require('./add_computer_request_pb.js');
var add_computer_response_pb = require('./add_computer_response_pb.js');
var fetch_computers_request_pb = require('./fetch_computers_request_pb.js');
var fetch_computer_by_id_request_pb = require('./fetch_computer_by_id_request_pb.js');
var fetch_computer_by_id_response_pb = require('./fetch_computer_by_id_response_pb.js');
var wakeup_request_pb = require('./wakeup_request_pb.js');
var wakeup_response_pb = require('./wakeup_response_pb.js');
var edit_computer_request_pb = require('./edit_computer_request_pb.js');
var edit_computer_response_pb = require('./edit_computer_response_pb.js');
var computer_pb = require('./computer_pb.js');

function serialize_WompattiService_AddComputerRequest(arg) {
  if (!(arg instanceof add_computer_request_pb.AddComputerRequest)) {
    throw new Error('Expected argument of type WompattiService.AddComputerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_AddComputerRequest(buffer_arg) {
  return add_computer_request_pb.AddComputerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_AddComputerResponse(arg) {
  if (!(arg instanceof add_computer_response_pb.AddComputerResponse)) {
    throw new Error('Expected argument of type WompattiService.AddComputerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_AddComputerResponse(buffer_arg) {
  return add_computer_response_pb.AddComputerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_Computer(arg) {
  if (!(arg instanceof computer_pb.Computer)) {
    throw new Error('Expected argument of type WompattiService.Computer');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_Computer(buffer_arg) {
  return computer_pb.Computer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditComputerRequest(arg) {
  if (!(arg instanceof edit_computer_request_pb.EditComputerRequest)) {
    throw new Error('Expected argument of type WompattiService.EditComputerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditComputerRequest(buffer_arg) {
  return edit_computer_request_pb.EditComputerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditComputerResponse(arg) {
  if (!(arg instanceof edit_computer_response_pb.EditComputerResponse)) {
    throw new Error('Expected argument of type WompattiService.EditComputerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditComputerResponse(buffer_arg) {
  return edit_computer_response_pb.EditComputerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchComputerByIdRequest(arg) {
  if (!(arg instanceof fetch_computer_by_id_request_pb.FetchComputerByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchComputerByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchComputerByIdRequest(buffer_arg) {
  return fetch_computer_by_id_request_pb.FetchComputerByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchComputerByIdResponse(arg) {
  if (!(arg instanceof fetch_computer_by_id_response_pb.FetchComputerByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchComputerByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchComputerByIdResponse(buffer_arg) {
  return fetch_computer_by_id_response_pb.FetchComputerByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchComputersRequest(arg) {
  if (!(arg instanceof fetch_computers_request_pb.FetchComputersRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchComputersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchComputersRequest(buffer_arg) {
  return fetch_computers_request_pb.FetchComputersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_WakeupRequest(arg) {
  if (!(arg instanceof wakeup_request_pb.WakeupRequest)) {
    throw new Error('Expected argument of type WompattiService.WakeupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_WakeupRequest(buffer_arg) {
  return wakeup_request_pb.WakeupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_WakeupResponse(arg) {
  if (!(arg instanceof wakeup_response_pb.WakeupResponse)) {
    throw new Error('Expected argument of type WompattiService.WakeupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_WakeupResponse(buffer_arg) {
  return wakeup_response_pb.WakeupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WompattiService = exports.WompattiService = {
  addComputer: {
    path: '/WompattiService.Wompatti/addComputer',
    requestStream: false,
    responseStream: false,
    requestType: add_computer_request_pb.AddComputerRequest,
    responseType: add_computer_response_pb.AddComputerResponse,
    requestSerialize: serialize_WompattiService_AddComputerRequest,
    requestDeserialize: deserialize_WompattiService_AddComputerRequest,
    responseSerialize: serialize_WompattiService_AddComputerResponse,
    responseDeserialize: deserialize_WompattiService_AddComputerResponse,
  },
  fetchComputers: {
    path: '/WompattiService.Wompatti/fetchComputers',
    requestStream: false,
    responseStream: true,
    requestType: fetch_computers_request_pb.FetchComputersRequest,
    responseType: computer_pb.Computer,
    requestSerialize: serialize_WompattiService_FetchComputersRequest,
    requestDeserialize: deserialize_WompattiService_FetchComputersRequest,
    responseSerialize: serialize_WompattiService_Computer,
    responseDeserialize: deserialize_WompattiService_Computer,
  },
  fetchComputerById: {
    path: '/WompattiService.Wompatti/fetchComputerById',
    requestStream: false,
    responseStream: false,
    requestType: fetch_computer_by_id_request_pb.FetchComputerByIdRequest,
    responseType: fetch_computer_by_id_response_pb.FetchComputerByIdResponse,
    requestSerialize: serialize_WompattiService_FetchComputerByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchComputerByIdRequest,
    responseSerialize: serialize_WompattiService_FetchComputerByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchComputerByIdResponse,
  },
  wakeup: {
    path: '/WompattiService.Wompatti/wakeup',
    requestStream: false,
    responseStream: false,
    requestType: wakeup_request_pb.WakeupRequest,
    responseType: wakeup_response_pb.WakeupResponse,
    requestSerialize: serialize_WompattiService_WakeupRequest,
    requestDeserialize: deserialize_WompattiService_WakeupRequest,
    responseSerialize: serialize_WompattiService_WakeupResponse,
    responseDeserialize: deserialize_WompattiService_WakeupResponse,
  },
  editComputer: {
    path: '/WompattiService.Wompatti/editComputer',
    requestStream: false,
    responseStream: false,
    requestType: edit_computer_request_pb.EditComputerRequest,
    responseType: edit_computer_response_pb.EditComputerResponse,
    requestSerialize: serialize_WompattiService_EditComputerRequest,
    requestDeserialize: deserialize_WompattiService_EditComputerRequest,
    responseSerialize: serialize_WompattiService_EditComputerResponse,
    responseDeserialize: deserialize_WompattiService_EditComputerResponse,
  },
};

exports.WompattiClient = grpc.makeGenericClientConstructor(WompattiService);
