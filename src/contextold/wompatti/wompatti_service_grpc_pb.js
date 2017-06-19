// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var computer_pb = require('./computer_pb.js');
var keijo_pb = require('./keijo_pb.js');
var arttu_pb = require('./arttu_pb.js');
var wompatti_ethernet_interface_pb = require('./wompatti_ethernet_interface_pb.js');
var wol_device_pb = require('./wol_device_pb.js');
var device_pb = require('./device_pb.js');

function serialize_WompattiService_Arttu(arg) {
  if (!(arg instanceof arttu_pb.Arttu)) {
    throw new Error('Expected argument of type WompattiService.Arttu');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_Arttu(buffer_arg) {
  return arttu_pb.Arttu.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_CreateWolDeviceRequest(arg) {
  if (!(arg instanceof wol_device_pb.CreateWolDeviceRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateWolDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateWolDeviceRequest(buffer_arg) {
  return wol_device_pb.CreateWolDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateWolDeviceResponse(arg) {
  if (!(arg instanceof wol_device_pb.CreateWolDeviceResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateWolDeviceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateWolDeviceResponse(buffer_arg) {
  return wol_device_pb.CreateWolDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_EthernetInterface(arg) {
  if (!(arg instanceof wompatti_ethernet_interface_pb.EthernetInterface)) {
    throw new Error('Expected argument of type WompattiService.EthernetInterface');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EthernetInterface(buffer_arg) {
  return wompatti_ethernet_interface_pb.EthernetInterface.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchArttuDeviceByIdRequest(arg) {
  if (!(arg instanceof arttu_pb.FetchArttuDeviceByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchArttuDeviceByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchArttuDeviceByIdRequest(buffer_arg) {
  return arttu_pb.FetchArttuDeviceByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchArttuDeviceByIdResponse(arg) {
  if (!(arg instanceof arttu_pb.FetchArttuDeviceByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchArttuDeviceByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchArttuDeviceByIdResponse(buffer_arg) {
  return arttu_pb.FetchArttuDeviceByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchArttuDevicesRequest(arg) {
  if (!(arg instanceof arttu_pb.FetchArttuDevicesRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchArttuDevicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchArttuDevicesRequest(buffer_arg) {
  return arttu_pb.FetchArttuDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchArttuEthernetInterfaceByIdRequest(arg) {
  if (!(arg instanceof wompatti_ethernet_interface_pb.FetchArttuEthernetInterfaceByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchArttuEthernetInterfaceByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchArttuEthernetInterfaceByIdRequest(buffer_arg) {
  return wompatti_ethernet_interface_pb.FetchArttuEthernetInterfaceByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchArttuEthernetInterfaceByIdResponse(arg) {
  if (!(arg instanceof wompatti_ethernet_interface_pb.FetchArttuEthernetInterfaceByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchArttuEthernetInterfaceByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchArttuEthernetInterfaceByIdResponse(buffer_arg) {
  return wompatti_ethernet_interface_pb.FetchArttuEthernetInterfaceByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchArttuEthernetInterfacesRequest(arg) {
  if (!(arg instanceof wompatti_ethernet_interface_pb.FetchArttuEthernetInterfacesRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchArttuEthernetInterfacesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchArttuEthernetInterfacesRequest(buffer_arg) {
  return wompatti_ethernet_interface_pb.FetchArttuEthernetInterfacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_FetchComputerWolDeviceRequest(arg) {
  if (!(arg instanceof wol_device_pb.FetchComputerWolDeviceRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchComputerWolDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchComputerWolDeviceRequest(buffer_arg) {
  return wol_device_pb.FetchComputerWolDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchComputerWolDeviceResponse(arg) {
  if (!(arg instanceof wol_device_pb.FetchComputerWolDeviceResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchComputerWolDeviceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchComputerWolDeviceResponse(buffer_arg) {
  return wol_device_pb.FetchComputerWolDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  if (!(arg instanceof computer_pb.WakeupRequest)) {
    throw new Error('Expected argument of type WompattiService.WakeupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_WakeupRequest(buffer_arg) {
  return computer_pb.WakeupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_WakeupResponse(arg) {
  if (!(arg instanceof computer_pb.WakeupResponse)) {
    throw new Error('Expected argument of type WompattiService.WakeupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_WakeupResponse(buffer_arg) {
  return computer_pb.WakeupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WompattiService = exports.WompattiService = {
  // rpc addComputer(AddComputerRequest) returns (AddComputerResponse) {}
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
    responseStream: false,
    requestType: computer_pb.FetchComputerByIdRequest,
    responseType: computer_pb.FetchComputerByIdResponse,
    requestSerialize: serialize_WompattiService_FetchComputerByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchComputerByIdRequest,
    responseSerialize: serialize_WompattiService_FetchComputerByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchComputerByIdResponse,
  },
  wakeup: {
    path: '/WompattiService.Wompatti/wakeup',
    requestStream: false,
    responseStream: false,
    requestType: computer_pb.WakeupRequest,
    responseType: computer_pb.WakeupResponse,
    requestSerialize: serialize_WompattiService_WakeupRequest,
    requestDeserialize: deserialize_WompattiService_WakeupRequest,
    responseSerialize: serialize_WompattiService_WakeupResponse,
    responseDeserialize: deserialize_WompattiService_WakeupResponse,
  },
  createWolDevice: {
    path: '/WompattiService.Wompatti/createWolDevice',
    requestStream: false,
    responseStream: false,
    requestType: wol_device_pb.CreateWolDeviceRequest,
    responseType: wol_device_pb.CreateWolDeviceResponse,
    requestSerialize: serialize_WompattiService_CreateWolDeviceRequest,
    requestDeserialize: deserialize_WompattiService_CreateWolDeviceRequest,
    responseSerialize: serialize_WompattiService_CreateWolDeviceResponse,
    responseDeserialize: deserialize_WompattiService_CreateWolDeviceResponse,
  },
  fetchComputerWolDevice: {
    path: '/WompattiService.Wompatti/fetchComputerWolDevice',
    requestStream: false,
    responseStream: false,
    requestType: wol_device_pb.FetchComputerWolDeviceRequest,
    responseType: wol_device_pb.FetchComputerWolDeviceResponse,
    requestSerialize: serialize_WompattiService_FetchComputerWolDeviceRequest,
    requestDeserialize: deserialize_WompattiService_FetchComputerWolDeviceRequest,
    responseSerialize: serialize_WompattiService_FetchComputerWolDeviceResponse,
    responseDeserialize: deserialize_WompattiService_FetchComputerWolDeviceResponse,
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
  fetchArttuDevices: {
    path: '/WompattiService.Wompatti/fetchArttuDevices',
    requestStream: false,
    responseStream: true,
    requestType: arttu_pb.FetchArttuDevicesRequest,
    responseType: arttu_pb.Arttu,
    requestSerialize: serialize_WompattiService_FetchArttuDevicesRequest,
    requestDeserialize: deserialize_WompattiService_FetchArttuDevicesRequest,
    responseSerialize: serialize_WompattiService_Arttu,
    responseDeserialize: deserialize_WompattiService_Arttu,
  },
  fetchArttuDeviceById: {
    path: '/WompattiService.Wompatti/fetchArttuDeviceById',
    requestStream: false,
    responseStream: false,
    requestType: arttu_pb.FetchArttuDeviceByIdRequest,
    responseType: arttu_pb.FetchArttuDeviceByIdResponse,
    requestSerialize: serialize_WompattiService_FetchArttuDeviceByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchArttuDeviceByIdRequest,
    responseSerialize: serialize_WompattiService_FetchArttuDeviceByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchArttuDeviceByIdResponse,
  },
  fetchArttuEthernetInterfaces: {
    path: '/WompattiService.Wompatti/fetchArttuEthernetInterfaces',
    requestStream: false,
    responseStream: true,
    requestType: wompatti_ethernet_interface_pb.FetchArttuEthernetInterfacesRequest,
    responseType: wompatti_ethernet_interface_pb.EthernetInterface,
    requestSerialize: serialize_WompattiService_FetchArttuEthernetInterfacesRequest,
    requestDeserialize: deserialize_WompattiService_FetchArttuEthernetInterfacesRequest,
    responseSerialize: serialize_WompattiService_EthernetInterface,
    responseDeserialize: deserialize_WompattiService_EthernetInterface,
  },
  fetchArttuEthernetInterfaceById: {
    path: '/WompattiService.Wompatti/fetchArttuEthernetInterfaceById',
    requestStream: false,
    responseStream: false,
    requestType: wompatti_ethernet_interface_pb.FetchArttuEthernetInterfaceByIdRequest,
    responseType: wompatti_ethernet_interface_pb.FetchArttuEthernetInterfaceByIdResponse,
    requestSerialize: serialize_WompattiService_FetchArttuEthernetInterfaceByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchArttuEthernetInterfaceByIdRequest,
    responseSerialize: serialize_WompattiService_FetchArttuEthernetInterfaceByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchArttuEthernetInterfaceByIdResponse,
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
};

exports.WompattiClient = grpc.makeGenericClientConstructor(WompattiService);
