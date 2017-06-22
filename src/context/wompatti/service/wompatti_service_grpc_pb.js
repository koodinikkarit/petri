// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var computer_pb = require('./computer_pb.js');
var device_info_pb = require('./device_info_pb.js');
var arttu_pb = require('./arttu_pb.js');
var device_pb = require('./device_pb.js');
var ethernet_interface_pb = require('./ethernet_interface_pb.js');
var wol_interface_pb = require('./wol_interface_pb.js');
var device_type_pb = require('./device_type_pb.js');

function serialize_WompattiService_Computer(arg) {
  if (!(arg instanceof computer_pb.Computer)) {
    throw new Error('Expected argument of type WompattiService.Computer');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_Computer(buffer_arg) {
  return computer_pb.Computer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateCommandRequest(arg) {
  if (!(arg instanceof device_type_pb.CreateCommandRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateCommandRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateCommandRequest(buffer_arg) {
  return device_type_pb.CreateCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateCommandResponse(arg) {
  if (!(arg instanceof device_type_pb.CreateCommandResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateCommandResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateCommandResponse(buffer_arg) {
  return device_type_pb.CreateCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateComputerRequest(arg) {
  if (!(arg instanceof computer_pb.CreateComputerRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateComputerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateComputerRequest(buffer_arg) {
  return computer_pb.CreateComputerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateComputerResponse(arg) {
  if (!(arg instanceof computer_pb.CreateComputerResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateComputerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateComputerResponse(buffer_arg) {
  return computer_pb.CreateComputerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateDeviceRequest(arg) {
  if (!(arg instanceof device_pb.CreateDeviceRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateDeviceRequest(buffer_arg) {
  return device_pb.CreateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateDeviceResponse(arg) {
  if (!(arg instanceof device_pb.CreateDeviceResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateDeviceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateDeviceResponse(buffer_arg) {
  return device_pb.CreateDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateDeviceTypeRequest(arg) {
  if (!(arg instanceof device_type_pb.CreateDeviceTypeRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateDeviceTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateDeviceTypeRequest(buffer_arg) {
  return device_type_pb.CreateDeviceTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateDeviceTypeResponse(arg) {
  if (!(arg instanceof device_type_pb.CreateDeviceTypeResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateDeviceTypeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateDeviceTypeResponse(buffer_arg) {
  return device_type_pb.CreateDeviceTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateKeyValueRequest(arg) {
  if (!(arg instanceof device_info_pb.CreateKeyValueRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateKeyValueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateKeyValueRequest(buffer_arg) {
  return device_info_pb.CreateKeyValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateKeyValueResponse(arg) {
  if (!(arg instanceof device_info_pb.CreateKeyValueResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateKeyValueResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateKeyValueResponse(buffer_arg) {
  return device_info_pb.CreateKeyValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateWolInterfaceRequest(arg) {
  if (!(arg instanceof wol_interface_pb.CreateWolInterfaceRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateWolInterfaceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateWolInterfaceRequest(buffer_arg) {
  return wol_interface_pb.CreateWolInterfaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateWolInterfaceResponse(arg) {
  if (!(arg instanceof wol_interface_pb.CreateWolInterfaceResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateWolInterfaceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateWolInterfaceResponse(buffer_arg) {
  return wol_interface_pb.CreateWolInterfaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_Device(arg) {
  if (!(arg instanceof device_pb.Device)) {
    throw new Error('Expected argument of type WompattiService.Device');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_Device(buffer_arg) {
  return device_pb.Device.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditCommandReponse(arg) {
  if (!(arg instanceof device_type_pb.EditCommandReponse)) {
    throw new Error('Expected argument of type WompattiService.EditCommandReponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditCommandReponse(buffer_arg) {
  return device_type_pb.EditCommandReponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditCommandRequest(arg) {
  if (!(arg instanceof device_type_pb.EditCommandRequest)) {
    throw new Error('Expected argument of type WompattiService.EditCommandRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditCommandRequest(buffer_arg) {
  return device_type_pb.EditCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditComputerRequest(arg) {
  if (!(arg instanceof computer_pb.EditComputerRequest)) {
    throw new Error('Expected argument of type WompattiService.EditComputerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditComputerRequest(buffer_arg) {
  return computer_pb.EditComputerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditComputerResponse(arg) {
  if (!(arg instanceof computer_pb.EditComputerResponse)) {
    throw new Error('Expected argument of type WompattiService.EditComputerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditComputerResponse(buffer_arg) {
  return computer_pb.EditComputerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditDeviceTypeRequest(arg) {
  if (!(arg instanceof device_type_pb.EditDeviceTypeRequest)) {
    throw new Error('Expected argument of type WompattiService.EditDeviceTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditDeviceTypeRequest(buffer_arg) {
  return device_type_pb.EditDeviceTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditDeviceTypeResponse(arg) {
  if (!(arg instanceof device_type_pb.EditDeviceTypeResponse)) {
    throw new Error('Expected argument of type WompattiService.EditDeviceTypeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditDeviceTypeResponse(buffer_arg) {
  return device_type_pb.EditDeviceTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditKeyValueRequest(arg) {
  if (!(arg instanceof device_info_pb.EditKeyValueRequest)) {
    throw new Error('Expected argument of type WompattiService.EditKeyValueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditKeyValueRequest(buffer_arg) {
  return device_info_pb.EditKeyValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditKeyValueResponse(arg) {
  if (!(arg instanceof device_info_pb.EditKeyValueResponse)) {
    throw new Error('Expected argument of type WompattiService.EditKeyValueResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditKeyValueResponse(buffer_arg) {
  return device_info_pb.EditKeyValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditWolInterfaceRequest(arg) {
  if (!(arg instanceof wol_interface_pb.EditWolInterfaceRequest)) {
    throw new Error('Expected argument of type WompattiService.EditWolInterfaceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditWolInterfaceRequest(buffer_arg) {
  return wol_interface_pb.EditWolInterfaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditWolInterfaceResponse(arg) {
  if (!(arg instanceof wol_interface_pb.EditWolInterfaceResponse)) {
    throw new Error('Expected argument of type WompattiService.EditWolInterfaceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditWolInterfaceResponse(buffer_arg) {
  return wol_interface_pb.EditWolInterfaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EthernetInterface(arg) {
  if (!(arg instanceof ethernet_interface_pb.EthernetInterface)) {
    throw new Error('Expected argument of type WompattiService.EthernetInterface');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EthernetInterface(buffer_arg) {
  return ethernet_interface_pb.EthernetInterface.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_ExecuteWolInterfaceRequest(arg) {
  if (!(arg instanceof wol_interface_pb.ExecuteWolInterfaceRequest)) {
    throw new Error('Expected argument of type WompattiService.ExecuteWolInterfaceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_ExecuteWolInterfaceRequest(buffer_arg) {
  return wol_interface_pb.ExecuteWolInterfaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_ExecuteWolInterfaceResponse(arg) {
  if (!(arg instanceof wol_interface_pb.ExecuteWolInterfaceResponse)) {
    throw new Error('Expected argument of type WompattiService.ExecuteWolInterfaceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_ExecuteWolInterfaceResponse(buffer_arg) {
  return wol_interface_pb.ExecuteWolInterfaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchComputerByIdRequest(arg) {
  if (!(arg instanceof computer_pb.FetchComputerByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchComputerByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchComputerByIdRequest(buffer_arg) {
  return computer_pb.FetchComputerByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchComputerByIdResponse(arg) {
  if (!(arg instanceof computer_pb.FetchComputerByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchComputerByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchComputerByIdResponse(buffer_arg) {
  return computer_pb.FetchComputerByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchComputersRequest(arg) {
  if (!(arg instanceof computer_pb.FetchComputersRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchComputersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchComputersRequest(buffer_arg) {
  return computer_pb.FetchComputersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchDeviceByIdRequest(arg) {
  if (!(arg instanceof device_pb.FetchDeviceByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchDeviceByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDeviceByIdRequest(buffer_arg) {
  return device_pb.FetchDeviceByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchDeviceByIdResponse(arg) {
  if (!(arg instanceof device_pb.FetchDeviceByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchDeviceByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDeviceByIdResponse(buffer_arg) {
  return device_pb.FetchDeviceByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchDeviceInfoByIdRequest(arg) {
  if (!(arg instanceof device_info_pb.FetchDeviceInfoByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchDeviceInfoByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDeviceInfoByIdRequest(buffer_arg) {
  return device_info_pb.FetchDeviceInfoByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchDeviceInfoByIdResponse(arg) {
  if (!(arg instanceof device_info_pb.FetchDeviceInfoByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchDeviceInfoByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDeviceInfoByIdResponse(buffer_arg) {
  return device_info_pb.FetchDeviceInfoByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchDevicesRequest(arg) {
  if (!(arg instanceof device_pb.FetchDevicesRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchDevicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDevicesRequest(buffer_arg) {
  return device_pb.FetchDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchEthernetInterfacesRequest(arg) {
  if (!(arg instanceof ethernet_interface_pb.FetchEthernetInterfacesRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchEthernetInterfacesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchEthernetInterfacesRequest(buffer_arg) {
  return ethernet_interface_pb.FetchEthernetInterfacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchKeyValuesByDeviceInfoIdRequest(arg) {
  if (!(arg instanceof device_info_pb.FetchKeyValuesByDeviceInfoIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchKeyValuesByDeviceInfoIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchKeyValuesByDeviceInfoIdRequest(buffer_arg) {
  return device_info_pb.FetchKeyValuesByDeviceInfoIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchKeyValuesByDeviceInfoIdResponse(arg) {
  if (!(arg instanceof device_info_pb.FetchKeyValuesByDeviceInfoIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchKeyValuesByDeviceInfoIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchKeyValuesByDeviceInfoIdResponse(buffer_arg) {
  return device_info_pb.FetchKeyValuesByDeviceInfoIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchWolInterfaceByIdRequest(arg) {
  if (!(arg instanceof wol_interface_pb.FetchWolInterfaceByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchWolInterfaceByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchWolInterfaceByIdRequest(buffer_arg) {
  return wol_interface_pb.FetchWolInterfaceByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchWolInterfaceByIdResponse(arg) {
  if (!(arg instanceof wol_interface_pb.FetchWolInterfaceByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchWolInterfaceByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchWolInterfaceByIdResponse(buffer_arg) {
  return wol_interface_pb.FetchWolInterfaceByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveCommandRequest(arg) {
  if (!(arg instanceof device_type_pb.RemoveCommandRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveCommandRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveCommandRequest(buffer_arg) {
  return device_type_pb.RemoveCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveCommandResponse(arg) {
  if (!(arg instanceof device_type_pb.RemoveCommandResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveCommandResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveCommandResponse(buffer_arg) {
  return device_type_pb.RemoveCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_RemoveDeviceRequest(arg) {
  if (!(arg instanceof device_pb.RemoveDeviceRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveDeviceRequest(buffer_arg) {
  return device_pb.RemoveDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveDeviceResponse(arg) {
  if (!(arg instanceof device_pb.RemoveDeviceResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveDeviceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveDeviceResponse(buffer_arg) {
  return device_pb.RemoveDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveDeviceTypeRequest(arg) {
  if (!(arg instanceof device_type_pb.RemoveDeviceTypeRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveDeviceTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveDeviceTypeRequest(buffer_arg) {
  return device_type_pb.RemoveDeviceTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveDeviceTypeResponse(arg) {
  if (!(arg instanceof device_type_pb.RemoveDeviceTypeResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveDeviceTypeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveDeviceTypeResponse(buffer_arg) {
  return device_type_pb.RemoveDeviceTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveKeyValueRequest(arg) {
  if (!(arg instanceof device_info_pb.RemoveKeyValueRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveKeyValueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveKeyValueRequest(buffer_arg) {
  return device_info_pb.RemoveKeyValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveKeyValueResponse(arg) {
  if (!(arg instanceof device_info_pb.RemoveKeyValueResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveKeyValueResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveKeyValueResponse(buffer_arg) {
  return device_info_pb.RemoveKeyValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveWolInterfaceRequest(arg) {
  if (!(arg instanceof wol_interface_pb.RemoveWolInterfaceRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveWolInterfaceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveWolInterfaceRequest(buffer_arg) {
  return wol_interface_pb.RemoveWolInterfaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveWolInterfaceResponse(arg) {
  if (!(arg instanceof wol_interface_pb.RemoveWolInterfaceResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveWolInterfaceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveWolInterfaceResponse(buffer_arg) {
  return wol_interface_pb.RemoveWolInterfaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WompattiService = exports.WompattiService = {
  createComputer: {
    path: '/WompattiService.Wompatti/createComputer',
    requestStream: false,
    responseStream: false,
    requestType: computer_pb.CreateComputerRequest,
    responseType: computer_pb.CreateComputerResponse,
    requestSerialize: serialize_WompattiService_CreateComputerRequest,
    requestDeserialize: deserialize_WompattiService_CreateComputerRequest,
    responseSerialize: serialize_WompattiService_CreateComputerResponse,
    responseDeserialize: deserialize_WompattiService_CreateComputerResponse,
  },
  editComputer: {
    path: '/WompattiService.Wompatti/editComputer',
    requestStream: false,
    responseStream: false,
    requestType: computer_pb.EditComputerRequest,
    responseType: computer_pb.EditComputerResponse,
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
  fetchComputers: {
    path: '/WompattiService.Wompatti/fetchComputers',
    requestStream: false,
    responseStream: true,
    requestType: computer_pb.FetchComputersRequest,
    responseType: computer_pb.Computer,
    requestSerialize: serialize_WompattiService_FetchComputersRequest,
    requestDeserialize: deserialize_WompattiService_FetchComputersRequest,
    responseSerialize: serialize_WompattiService_Computer,
    responseDeserialize: deserialize_WompattiService_Computer,
  },
  fetchComputerById: {
    path: '/WompattiService.Wompatti/fetchComputerById',
    requestStream: false,
    responseStream: true,
    requestType: computer_pb.FetchComputerByIdRequest,
    responseType: computer_pb.FetchComputerByIdResponse,
    requestSerialize: serialize_WompattiService_FetchComputerByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchComputerByIdRequest,
    responseSerialize: serialize_WompattiService_FetchComputerByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchComputerByIdResponse,
  },
  fetchDeviceInfoById: {
    path: '/WompattiService.Wompatti/fetchDeviceInfoById',
    requestStream: false,
    responseStream: true,
    requestType: device_info_pb.FetchDeviceInfoByIdRequest,
    responseType: device_info_pb.FetchDeviceInfoByIdResponse,
    requestSerialize: serialize_WompattiService_FetchDeviceInfoByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchDeviceInfoByIdRequest,
    responseSerialize: serialize_WompattiService_FetchDeviceInfoByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchDeviceInfoByIdResponse,
  },
  fetchKeyValuesByDeviceInfoId: {
    path: '/WompattiService.Wompatti/fetchKeyValuesByDeviceInfoId',
    requestStream: false,
    responseStream: true,
    requestType: device_info_pb.FetchKeyValuesByDeviceInfoIdRequest,
    responseType: device_info_pb.FetchKeyValuesByDeviceInfoIdResponse,
    requestSerialize: serialize_WompattiService_FetchKeyValuesByDeviceInfoIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchKeyValuesByDeviceInfoIdRequest,
    responseSerialize: serialize_WompattiService_FetchKeyValuesByDeviceInfoIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchKeyValuesByDeviceInfoIdResponse,
  },
  createKeyValue: {
    path: '/WompattiService.Wompatti/createKeyValue',
    requestStream: false,
    responseStream: false,
    requestType: device_info_pb.CreateKeyValueRequest,
    responseType: device_info_pb.CreateKeyValueResponse,
    requestSerialize: serialize_WompattiService_CreateKeyValueRequest,
    requestDeserialize: deserialize_WompattiService_CreateKeyValueRequest,
    responseSerialize: serialize_WompattiService_CreateKeyValueResponse,
    responseDeserialize: deserialize_WompattiService_CreateKeyValueResponse,
  },
  editKeyValue: {
    path: '/WompattiService.Wompatti/editKeyValue',
    requestStream: false,
    responseStream: false,
    requestType: device_info_pb.EditKeyValueRequest,
    responseType: device_info_pb.EditKeyValueResponse,
    requestSerialize: serialize_WompattiService_EditKeyValueRequest,
    requestDeserialize: deserialize_WompattiService_EditKeyValueRequest,
    responseSerialize: serialize_WompattiService_EditKeyValueResponse,
    responseDeserialize: deserialize_WompattiService_EditKeyValueResponse,
  },
  removeKeyValue: {
    path: '/WompattiService.Wompatti/removeKeyValue',
    requestStream: false,
    responseStream: false,
    requestType: device_info_pb.RemoveKeyValueRequest,
    responseType: device_info_pb.RemoveKeyValueResponse,
    requestSerialize: serialize_WompattiService_RemoveKeyValueRequest,
    requestDeserialize: deserialize_WompattiService_RemoveKeyValueRequest,
    responseSerialize: serialize_WompattiService_RemoveKeyValueResponse,
    responseDeserialize: deserialize_WompattiService_RemoveKeyValueResponse,
  },
  createDevice: {
    path: '/WompattiService.Wompatti/createDevice',
    requestStream: false,
    responseStream: false,
    requestType: device_pb.CreateDeviceRequest,
    responseType: device_pb.CreateDeviceResponse,
    requestSerialize: serialize_WompattiService_CreateDeviceRequest,
    requestDeserialize: deserialize_WompattiService_CreateDeviceRequest,
    responseSerialize: serialize_WompattiService_CreateDeviceResponse,
    responseDeserialize: deserialize_WompattiService_CreateDeviceResponse,
  },
  removeDevice: {
    path: '/WompattiService.Wompatti/removeDevice',
    requestStream: false,
    responseStream: false,
    requestType: device_pb.RemoveDeviceRequest,
    responseType: device_pb.RemoveDeviceResponse,
    requestSerialize: serialize_WompattiService_RemoveDeviceRequest,
    requestDeserialize: deserialize_WompattiService_RemoveDeviceRequest,
    responseSerialize: serialize_WompattiService_RemoveDeviceResponse,
    responseDeserialize: deserialize_WompattiService_RemoveDeviceResponse,
  },
  fetchDevices: {
    path: '/WompattiService.Wompatti/fetchDevices',
    requestStream: false,
    responseStream: true,
    requestType: device_pb.FetchDevicesRequest,
    responseType: device_pb.Device,
    requestSerialize: serialize_WompattiService_FetchDevicesRequest,
    requestDeserialize: deserialize_WompattiService_FetchDevicesRequest,
    responseSerialize: serialize_WompattiService_Device,
    responseDeserialize: deserialize_WompattiService_Device,
  },
  fetchDeviceById: {
    path: '/WompattiService.Wompatti/fetchDeviceById',
    requestStream: false,
    responseStream: true,
    requestType: device_pb.FetchDeviceByIdRequest,
    responseType: device_pb.FetchDeviceByIdResponse,
    requestSerialize: serialize_WompattiService_FetchDeviceByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchDeviceByIdRequest,
    responseSerialize: serialize_WompattiService_FetchDeviceByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchDeviceByIdResponse,
  },
  fetchEthernetInterfaces: {
    path: '/WompattiService.Wompatti/fetchEthernetInterfaces',
    requestStream: false,
    responseStream: true,
    requestType: ethernet_interface_pb.FetchEthernetInterfacesRequest,
    responseType: ethernet_interface_pb.EthernetInterface,
    requestSerialize: serialize_WompattiService_FetchEthernetInterfacesRequest,
    requestDeserialize: deserialize_WompattiService_FetchEthernetInterfacesRequest,
    responseSerialize: serialize_WompattiService_EthernetInterface,
    responseDeserialize: deserialize_WompattiService_EthernetInterface,
  },
  createWolInterface: {
    path: '/WompattiService.Wompatti/createWolInterface',
    requestStream: false,
    responseStream: false,
    requestType: wol_interface_pb.CreateWolInterfaceRequest,
    responseType: wol_interface_pb.CreateWolInterfaceResponse,
    requestSerialize: serialize_WompattiService_CreateWolInterfaceRequest,
    requestDeserialize: deserialize_WompattiService_CreateWolInterfaceRequest,
    responseSerialize: serialize_WompattiService_CreateWolInterfaceResponse,
    responseDeserialize: deserialize_WompattiService_CreateWolInterfaceResponse,
  },
  editWolInterface: {
    path: '/WompattiService.Wompatti/editWolInterface',
    requestStream: false,
    responseStream: false,
    requestType: wol_interface_pb.EditWolInterfaceRequest,
    responseType: wol_interface_pb.EditWolInterfaceResponse,
    requestSerialize: serialize_WompattiService_EditWolInterfaceRequest,
    requestDeserialize: deserialize_WompattiService_EditWolInterfaceRequest,
    responseSerialize: serialize_WompattiService_EditWolInterfaceResponse,
    responseDeserialize: deserialize_WompattiService_EditWolInterfaceResponse,
  },
  removeWolInterface: {
    path: '/WompattiService.Wompatti/removeWolInterface',
    requestStream: false,
    responseStream: false,
    requestType: wol_interface_pb.RemoveWolInterfaceRequest,
    responseType: wol_interface_pb.RemoveWolInterfaceResponse,
    requestSerialize: serialize_WompattiService_RemoveWolInterfaceRequest,
    requestDeserialize: deserialize_WompattiService_RemoveWolInterfaceRequest,
    responseSerialize: serialize_WompattiService_RemoveWolInterfaceResponse,
    responseDeserialize: deserialize_WompattiService_RemoveWolInterfaceResponse,
  },
  executeWolInterface: {
    path: '/WompattiService.Wompatti/executeWolInterface',
    requestStream: false,
    responseStream: false,
    requestType: wol_interface_pb.ExecuteWolInterfaceRequest,
    responseType: wol_interface_pb.ExecuteWolInterfaceResponse,
    requestSerialize: serialize_WompattiService_ExecuteWolInterfaceRequest,
    requestDeserialize: deserialize_WompattiService_ExecuteWolInterfaceRequest,
    responseSerialize: serialize_WompattiService_ExecuteWolInterfaceResponse,
    responseDeserialize: deserialize_WompattiService_ExecuteWolInterfaceResponse,
  },
  fetchWolInterfaceById: {
    path: '/WompattiService.Wompatti/fetchWolInterfaceById',
    requestStream: false,
    responseStream: true,
    requestType: wol_interface_pb.FetchWolInterfaceByIdRequest,
    responseType: wol_interface_pb.FetchWolInterfaceByIdResponse,
    requestSerialize: serialize_WompattiService_FetchWolInterfaceByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchWolInterfaceByIdRequest,
    responseSerialize: serialize_WompattiService_FetchWolInterfaceByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchWolInterfaceByIdResponse,
  },
  createDeviceType: {
    path: '/WompattiService.Wompatti/createDeviceType',
    requestStream: false,
    responseStream: false,
    requestType: device_type_pb.CreateDeviceTypeRequest,
    responseType: device_type_pb.CreateDeviceTypeResponse,
    requestSerialize: serialize_WompattiService_CreateDeviceTypeRequest,
    requestDeserialize: deserialize_WompattiService_CreateDeviceTypeRequest,
    responseSerialize: serialize_WompattiService_CreateDeviceTypeResponse,
    responseDeserialize: deserialize_WompattiService_CreateDeviceTypeResponse,
  },
  editDeviceType: {
    path: '/WompattiService.Wompatti/editDeviceType',
    requestStream: false,
    responseStream: false,
    requestType: device_type_pb.EditDeviceTypeRequest,
    responseType: device_type_pb.EditDeviceTypeResponse,
    requestSerialize: serialize_WompattiService_EditDeviceTypeRequest,
    requestDeserialize: deserialize_WompattiService_EditDeviceTypeRequest,
    responseSerialize: serialize_WompattiService_EditDeviceTypeResponse,
    responseDeserialize: deserialize_WompattiService_EditDeviceTypeResponse,
  },
  removeDeviceType: {
    path: '/WompattiService.Wompatti/removeDeviceType',
    requestStream: false,
    responseStream: false,
    requestType: device_type_pb.RemoveDeviceTypeRequest,
    responseType: device_type_pb.RemoveDeviceTypeResponse,
    requestSerialize: serialize_WompattiService_RemoveDeviceTypeRequest,
    requestDeserialize: deserialize_WompattiService_RemoveDeviceTypeRequest,
    responseSerialize: serialize_WompattiService_RemoveDeviceTypeResponse,
    responseDeserialize: deserialize_WompattiService_RemoveDeviceTypeResponse,
  },
  createCommand: {
    path: '/WompattiService.Wompatti/createCommand',
    requestStream: false,
    responseStream: false,
    requestType: device_type_pb.CreateCommandRequest,
    responseType: device_type_pb.CreateCommandResponse,
    requestSerialize: serialize_WompattiService_CreateCommandRequest,
    requestDeserialize: deserialize_WompattiService_CreateCommandRequest,
    responseSerialize: serialize_WompattiService_CreateCommandResponse,
    responseDeserialize: deserialize_WompattiService_CreateCommandResponse,
  },
  editCommand: {
    path: '/WompattiService.Wompatti/editCommand',
    requestStream: false,
    responseStream: false,
    requestType: device_type_pb.EditCommandRequest,
    responseType: device_type_pb.EditCommandReponse,
    requestSerialize: serialize_WompattiService_EditCommandRequest,
    requestDeserialize: deserialize_WompattiService_EditCommandRequest,
    responseSerialize: serialize_WompattiService_EditCommandReponse,
    responseDeserialize: deserialize_WompattiService_EditCommandReponse,
  },
  removeCommand: {
    path: '/WompattiService.Wompatti/removeCommand',
    requestStream: false,
    responseStream: false,
    requestType: device_type_pb.RemoveCommandRequest,
    responseType: device_type_pb.RemoveCommandResponse,
    requestSerialize: serialize_WompattiService_RemoveCommandRequest,
    requestDeserialize: deserialize_WompattiService_RemoveCommandRequest,
    responseSerialize: serialize_WompattiService_RemoveCommandResponse,
    responseDeserialize: deserialize_WompattiService_RemoveCommandResponse,
  },
};

exports.WompattiClient = grpc.makeGenericClientConstructor(WompattiService);
