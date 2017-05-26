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
var keijo_pb = require('./keijo_pb.js');

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

function serialize_WompattiService_AddKeijoRequest(arg) {
  if (!(arg instanceof keijo_pb.AddKeijoRequest)) {
    throw new Error('Expected argument of type WompattiService.AddKeijoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_AddKeijoRequest(buffer_arg) {
  return keijo_pb.AddKeijoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_AddKeijoResponse(arg) {
  if (!(arg instanceof keijo_pb.AddKeijoResponse)) {
    throw new Error('Expected argument of type WompattiService.AddKeijoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_AddKeijoResponse(buffer_arg) {
  return keijo_pb.AddKeijoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_ChangeKeijoSourceRequest(arg) {
  if (!(arg instanceof keijo_pb.ChangeKeijoSourceRequest)) {
    throw new Error('Expected argument of type WompattiService.ChangeKeijoSourceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_ChangeKeijoSourceRequest(buffer_arg) {
  return keijo_pb.ChangeKeijoSourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_ChangeKeijoSourceResponse(arg) {
  if (!(arg instanceof keijo_pb.ChangeKeijoSourceResponse)) {
    throw new Error('Expected argument of type WompattiService.ChangeKeijoSourceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_ChangeKeijoSourceResponse(buffer_arg) {
  return keijo_pb.ChangeKeijoSourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_EditKeijoRequest(arg) {
  if (!(arg instanceof keijo_pb.EditKeijoRequest)) {
    throw new Error('Expected argument of type WompattiService.EditKeijoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditKeijoRequest(buffer_arg) {
  return keijo_pb.EditKeijoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditKeijoResponse(arg) {
  if (!(arg instanceof keijo_pb.EditKeijoResponse)) {
    throw new Error('Expected argument of type WompattiService.EditKeijoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditKeijoResponse(buffer_arg) {
  return keijo_pb.EditKeijoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCecDevicePowerStatusByKeijoIdRequest(arg) {
  if (!(arg instanceof keijo_pb.FetchCecDevicePowerStatusByKeijoIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchCecDevicePowerStatusByKeijoIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCecDevicePowerStatusByKeijoIdRequest(buffer_arg) {
  return keijo_pb.FetchCecDevicePowerStatusByKeijoIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCecDevicePowerStatusByKeijoIdResponse(arg) {
  if (!(arg instanceof keijo_pb.FetchCecDevicePowerStatusByKeijoIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchCecDevicePowerStatusByKeijoIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCecDevicePowerStatusByKeijoIdResponse(buffer_arg) {
  return keijo_pb.FetchCecDevicePowerStatusByKeijoIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCecTvDeviceSourceByKeijoIdRequest(arg) {
  if (!(arg instanceof keijo_pb.FetchCecTvDeviceSourceByKeijoIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchCecTvDeviceSourceByKeijoIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCecTvDeviceSourceByKeijoIdRequest(buffer_arg) {
  return keijo_pb.FetchCecTvDeviceSourceByKeijoIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCecTvDeviceSourceByKeijoIdResponse(arg) {
  if (!(arg instanceof keijo_pb.FetchCecTvDeviceSourceByKeijoIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchCecTvDeviceSourceByKeijoIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCecTvDeviceSourceByKeijoIdResponse(buffer_arg) {
  return keijo_pb.FetchCecTvDeviceSourceByKeijoIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_FetchKeijoByIdRequest(arg) {
  if (!(arg instanceof keijo_pb.FetchKeijoByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchKeijoByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchKeijoByIdRequest(buffer_arg) {
  return keijo_pb.FetchKeijoByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchKeijoByIdResponse(arg) {
  if (!(arg instanceof keijo_pb.FetchKeijoByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchKeijoByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchKeijoByIdResponse(buffer_arg) {
  return keijo_pb.FetchKeijoByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchKeijosRequest(arg) {
  if (!(arg instanceof keijo_pb.FetchKeijosRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchKeijosRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchKeijosRequest(buffer_arg) {
  return keijo_pb.FetchKeijosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_Keijo(arg) {
  if (!(arg instanceof keijo_pb.Keijo)) {
    throw new Error('Expected argument of type WompattiService.Keijo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_Keijo(buffer_arg) {
  return keijo_pb.Keijo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveComputerRequest(arg) {
  if (!(arg instanceof computer_pb.RemoveComputerRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveComputerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveComputerRequest(buffer_arg) {
  return computer_pb.RemoveComputerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveComputerResponse(arg) {
  if (!(arg instanceof computer_pb.RemoveComputerResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveComputerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveComputerResponse(buffer_arg) {
  return computer_pb.RemoveComputerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveKeijoRequest(arg) {
  if (!(arg instanceof keijo_pb.RemoveKeijoRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveKeijoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveKeijoRequest(buffer_arg) {
  return keijo_pb.RemoveKeijoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveKeijoResponse(arg) {
  if (!(arg instanceof keijo_pb.RemoveKeijoResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveKeijoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveKeijoResponse(buffer_arg) {
  return keijo_pb.RemoveKeijoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_ShutDownCecDeviceRequest(arg) {
  if (!(arg instanceof keijo_pb.ShutDownCecDeviceRequest)) {
    throw new Error('Expected argument of type WompattiService.ShutDownCecDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_ShutDownCecDeviceRequest(buffer_arg) {
  return keijo_pb.ShutDownCecDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_ShutDownCecDeviceResponse(arg) {
  if (!(arg instanceof keijo_pb.ShutDownCecDeviceResponse)) {
    throw new Error('Expected argument of type WompattiService.ShutDownCecDeviceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_ShutDownCecDeviceResponse(buffer_arg) {
  return keijo_pb.ShutDownCecDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_TurnOnCecDeviceRequest(arg) {
  if (!(arg instanceof keijo_pb.TurnOnCecDeviceRequest)) {
    throw new Error('Expected argument of type WompattiService.TurnOnCecDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_TurnOnCecDeviceRequest(buffer_arg) {
  return keijo_pb.TurnOnCecDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_TurnOnCecDeviceResponse(arg) {
  if (!(arg instanceof keijo_pb.TurnOnCecDeviceResponse)) {
    throw new Error('Expected argument of type WompattiService.TurnOnCecDeviceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_TurnOnCecDeviceResponse(buffer_arg) {
  return keijo_pb.TurnOnCecDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  removeComputer: {
    path: '/WompattiService.Wompatti/removeComputer',
    requestStream: false,
    responseStream: false,
    requestType: computer_pb.RemoveComputerRequest,
    responseType: computer_pb.RemoveComputerResponse,
    requestSerialize: serialize_WompattiService_RemoveComputerRequest,
    requestDeserialize: deserialize_WompattiService_RemoveComputerRequest,
    responseSerialize: serialize_WompattiService_RemoveComputerResponse,
    responseDeserialize: deserialize_WompattiService_RemoveComputerResponse,
  },
  addKeijo: {
    path: '/WompattiService.Wompatti/addKeijo',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.AddKeijoRequest,
    responseType: keijo_pb.AddKeijoResponse,
    requestSerialize: serialize_WompattiService_AddKeijoRequest,
    requestDeserialize: deserialize_WompattiService_AddKeijoRequest,
    responseSerialize: serialize_WompattiService_AddKeijoResponse,
    responseDeserialize: deserialize_WompattiService_AddKeijoResponse,
  },
  editKeijo: {
    path: '/WompattiService.Wompatti/editKeijo',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.EditKeijoRequest,
    responseType: keijo_pb.EditKeijoResponse,
    requestSerialize: serialize_WompattiService_EditKeijoRequest,
    requestDeserialize: deserialize_WompattiService_EditKeijoRequest,
    responseSerialize: serialize_WompattiService_EditKeijoResponse,
    responseDeserialize: deserialize_WompattiService_EditKeijoResponse,
  },
  removeKeijo: {
    path: '/WompattiService.Wompatti/removeKeijo',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.RemoveKeijoRequest,
    responseType: keijo_pb.RemoveKeijoResponse,
    requestSerialize: serialize_WompattiService_RemoveKeijoRequest,
    requestDeserialize: deserialize_WompattiService_RemoveKeijoRequest,
    responseSerialize: serialize_WompattiService_RemoveKeijoResponse,
    responseDeserialize: deserialize_WompattiService_RemoveKeijoResponse,
  },
  fetchKeijos: {
    path: '/WompattiService.Wompatti/fetchKeijos',
    requestStream: false,
    responseStream: true,
    requestType: keijo_pb.FetchKeijosRequest,
    responseType: keijo_pb.Keijo,
    requestSerialize: serialize_WompattiService_FetchKeijosRequest,
    requestDeserialize: deserialize_WompattiService_FetchKeijosRequest,
    responseSerialize: serialize_WompattiService_Keijo,
    responseDeserialize: deserialize_WompattiService_Keijo,
  },
  fetchKeijoById: {
    path: '/WompattiService.Wompatti/fetchKeijoById',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.FetchKeijoByIdRequest,
    responseType: keijo_pb.FetchKeijoByIdResponse,
    requestSerialize: serialize_WompattiService_FetchKeijoByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchKeijoByIdRequest,
    responseSerialize: serialize_WompattiService_FetchKeijoByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchKeijoByIdResponse,
  },
  turnOnCecDevice: {
    path: '/WompattiService.Wompatti/turnOnCecDevice',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.TurnOnCecDeviceRequest,
    responseType: keijo_pb.TurnOnCecDeviceResponse,
    requestSerialize: serialize_WompattiService_TurnOnCecDeviceRequest,
    requestDeserialize: deserialize_WompattiService_TurnOnCecDeviceRequest,
    responseSerialize: serialize_WompattiService_TurnOnCecDeviceResponse,
    responseDeserialize: deserialize_WompattiService_TurnOnCecDeviceResponse,
  },
  changeKeijoSource: {
    path: '/WompattiService.Wompatti/changeKeijoSource',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.ChangeKeijoSourceRequest,
    responseType: keijo_pb.ChangeKeijoSourceResponse,
    requestSerialize: serialize_WompattiService_ChangeKeijoSourceRequest,
    requestDeserialize: deserialize_WompattiService_ChangeKeijoSourceRequest,
    responseSerialize: serialize_WompattiService_ChangeKeijoSourceResponse,
    responseDeserialize: deserialize_WompattiService_ChangeKeijoSourceResponse,
  },
  shutDownCecDevice: {
    path: '/WompattiService.Wompatti/shutDownCecDevice',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.ShutDownCecDeviceRequest,
    responseType: keijo_pb.ShutDownCecDeviceResponse,
    requestSerialize: serialize_WompattiService_ShutDownCecDeviceRequest,
    requestDeserialize: deserialize_WompattiService_ShutDownCecDeviceRequest,
    responseSerialize: serialize_WompattiService_ShutDownCecDeviceResponse,
    responseDeserialize: deserialize_WompattiService_ShutDownCecDeviceResponse,
  },
  fetchCecDevicePowerStatusByKeijoId: {
    path: '/WompattiService.Wompatti/fetchCecDevicePowerStatusByKeijoId',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.FetchCecDevicePowerStatusByKeijoIdRequest,
    responseType: keijo_pb.FetchCecDevicePowerStatusByKeijoIdResponse,
    requestSerialize: serialize_WompattiService_FetchCecDevicePowerStatusByKeijoIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchCecDevicePowerStatusByKeijoIdRequest,
    responseSerialize: serialize_WompattiService_FetchCecDevicePowerStatusByKeijoIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchCecDevicePowerStatusByKeijoIdResponse,
  },
  fetchCecTvDeviceSourceByKeijoId: {
    path: '/WompattiService.Wompatti/fetchCecTvDeviceSourceByKeijoId',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.FetchCecTvDeviceSourceByKeijoIdRequest,
    responseType: keijo_pb.FetchCecTvDeviceSourceByKeijoIdResponse,
    requestSerialize: serialize_WompattiService_FetchCecTvDeviceSourceByKeijoIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchCecTvDeviceSourceByKeijoIdRequest,
    responseSerialize: serialize_WompattiService_FetchCecTvDeviceSourceByKeijoIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchCecTvDeviceSourceByKeijoIdResponse,
  },
};

exports.WompattiClient = grpc.makeGenericClientConstructor(WompattiService);
