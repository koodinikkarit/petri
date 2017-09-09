// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var computer_pb = require('./computer_pb.js');
var device_info_pb = require('./device_info_pb.js');
var key_value_pb = require('./key_value_pb.js');
var arttu_pb = require('./arttu_pb.js');
var device_pb = require('./device_pb.js');
var ethernet_interface_pb = require('./ethernet_interface_pb.js');
var wol_interface_pb = require('./wol_interface_pb.js');
var device_type_pb = require('./device_type_pb.js');
var serial_interface_pb = require('./serial_interface_pb.js');
var telnet_interface_pb = require('./telnet_interface_pb.js');
var command_pb = require('./command_pb.js');
var keijo_pb = require('./keijo_pb.js');
var severi_pb = require('./severi_pb.js');

function serialize_WompattiService_CreateCommandRequest(arg) {
  if (!(arg instanceof command_pb.CreateCommandRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateCommandRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateCommandRequest(buffer_arg) {
  return command_pb.CreateCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateCommandResponse(arg) {
  if (!(arg instanceof command_pb.CreateCommandResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateCommandResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateCommandResponse(buffer_arg) {
  return command_pb.CreateCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_CreateKeijoRequest(arg) {
  if (!(arg instanceof keijo_pb.CreateKeijoRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateKeijoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateKeijoRequest(buffer_arg) {
  return keijo_pb.CreateKeijoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateKeijoResponse(arg) {
  if (!(arg instanceof keijo_pb.CreateKeijoResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateKeijoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateKeijoResponse(buffer_arg) {
  return keijo_pb.CreateKeijoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateSeveriRequest(arg) {
  if (!(arg instanceof severi_pb.CreateSeveriRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateSeveriRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateSeveriRequest(buffer_arg) {
  return severi_pb.CreateSeveriRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateSeveriResponse(arg) {
  if (!(arg instanceof severi_pb.CreateSeveriResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateSeveriResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateSeveriResponse(buffer_arg) {
  return severi_pb.CreateSeveriResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateTelnetInterfaceRequest(arg) {
  if (!(arg instanceof telnet_interface_pb.CreateTelnetInterfaceRequest)) {
    throw new Error('Expected argument of type WompattiService.CreateTelnetInterfaceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateTelnetInterfaceRequest(buffer_arg) {
  return telnet_interface_pb.CreateTelnetInterfaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_CreateTelnetInterfaceResponse(arg) {
  if (!(arg instanceof telnet_interface_pb.CreateTelnetInterfaceResponse)) {
    throw new Error('Expected argument of type WompattiService.CreateTelnetInterfaceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_CreateTelnetInterfaceResponse(buffer_arg) {
  return telnet_interface_pb.CreateTelnetInterfaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_EditCommandReponse(arg) {
  if (!(arg instanceof command_pb.EditCommandReponse)) {
    throw new Error('Expected argument of type WompattiService.EditCommandReponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditCommandReponse(buffer_arg) {
  return command_pb.EditCommandReponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditCommandRequest(arg) {
  if (!(arg instanceof command_pb.EditCommandRequest)) {
    throw new Error('Expected argument of type WompattiService.EditCommandRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditCommandRequest(buffer_arg) {
  return command_pb.EditCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditDeviceRequest(arg) {
  if (!(arg instanceof device_pb.EditDeviceRequest)) {
    throw new Error('Expected argument of type WompattiService.EditDeviceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditDeviceRequest(buffer_arg) {
  return device_pb.EditDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditDeviceResponse(arg) {
  if (!(arg instanceof device_pb.EditDeviceResponse)) {
    throw new Error('Expected argument of type WompattiService.EditDeviceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditDeviceResponse(buffer_arg) {
  return device_pb.EditDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_EditSeveriRequest(arg) {
  if (!(arg instanceof severi_pb.EditSeveriRequest)) {
    throw new Error('Expected argument of type WompattiService.EditSeveriRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditSeveriRequest(buffer_arg) {
  return severi_pb.EditSeveriRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditSeveriResponse(arg) {
  if (!(arg instanceof severi_pb.EditSeveriResponse)) {
    throw new Error('Expected argument of type WompattiService.EditSeveriResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditSeveriResponse(buffer_arg) {
  return severi_pb.EditSeveriResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditTelnetInterfaceRequest(arg) {
  if (!(arg instanceof telnet_interface_pb.EditTelnetInterfaceRequest)) {
    throw new Error('Expected argument of type WompattiService.EditTelnetInterfaceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditTelnetInterfaceRequest(buffer_arg) {
  return telnet_interface_pb.EditTelnetInterfaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_EditTelnetInterfaceResponse(arg) {
  if (!(arg instanceof telnet_interface_pb.EditTelnetInterfaceResponse)) {
    throw new Error('Expected argument of type WompattiService.EditTelnetInterfaceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_EditTelnetInterfaceResponse(buffer_arg) {
  return telnet_interface_pb.EditTelnetInterfaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_FetchCommandByIdRequest(arg) {
  if (!(arg instanceof command_pb.FetchCommandByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchCommandByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCommandByIdRequest(buffer_arg) {
  return command_pb.FetchCommandByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCommandByIdResponse(arg) {
  if (!(arg instanceof command_pb.FetchCommandByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchCommandByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCommandByIdResponse(buffer_arg) {
  return command_pb.FetchCommandByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCommandsByDeviceTypeIdRequest(arg) {
  if (!(arg instanceof command_pb.FetchCommandsByDeviceTypeIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchCommandsByDeviceTypeIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCommandsByDeviceTypeIdRequest(buffer_arg) {
  return command_pb.FetchCommandsByDeviceTypeIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCommandsByDeviceTypeIdResponse(arg) {
  if (!(arg instanceof command_pb.FetchCommandsByDeviceTypeIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchCommandsByDeviceTypeIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCommandsByDeviceTypeIdResponse(buffer_arg) {
  return command_pb.FetchCommandsByDeviceTypeIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCommandsRequest(arg) {
  if (!(arg instanceof command_pb.FetchCommandsRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchCommandsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCommandsRequest(buffer_arg) {
  return command_pb.FetchCommandsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchCommandsResponse(arg) {
  if (!(arg instanceof command_pb.FetchCommandsResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchCommandsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchCommandsResponse(buffer_arg) {
  return command_pb.FetchCommandsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_FetchDeviceTypeByIdRequest(arg) {
  if (!(arg instanceof device_type_pb.FetchDeviceTypeByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchDeviceTypeByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDeviceTypeByIdRequest(buffer_arg) {
  return device_type_pb.FetchDeviceTypeByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchDeviceTypeByIdResponse(arg) {
  if (!(arg instanceof device_type_pb.FetchDeviceTypeByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchDeviceTypeByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDeviceTypeByIdResponse(buffer_arg) {
  return device_type_pb.FetchDeviceTypeByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchDeviceTypesRequest(arg) {
  if (!(arg instanceof device_type_pb.FetchDeviceTypesRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchDeviceTypesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDeviceTypesRequest(buffer_arg) {
  return device_type_pb.FetchDeviceTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchDeviceTypesResponse(arg) {
  if (!(arg instanceof device_type_pb.FetchDeviceTypesResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchDeviceTypesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDeviceTypesResponse(buffer_arg) {
  return device_type_pb.FetchDeviceTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_FetchDevicesResponse(arg) {
  if (!(arg instanceof device_pb.FetchDevicesResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchDevicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchDevicesResponse(buffer_arg) {
  return device_pb.FetchDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_FetchKeijosResponse(arg) {
  if (!(arg instanceof keijo_pb.FetchKeijosResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchKeijosResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchKeijosResponse(buffer_arg) {
  return keijo_pb.FetchKeijosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchSeveriByIdRequest(arg) {
  if (!(arg instanceof severi_pb.FetchSeveriByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchSeveriByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchSeveriByIdRequest(buffer_arg) {
  return severi_pb.FetchSeveriByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchSeveriByIdResponse(arg) {
  if (!(arg instanceof severi_pb.FetchSeveriByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchSeveriByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchSeveriByIdResponse(buffer_arg) {
  return severi_pb.FetchSeveriByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchSeverisRequest(arg) {
  if (!(arg instanceof severi_pb.FetchSeverisRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchSeverisRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchSeverisRequest(buffer_arg) {
  return severi_pb.FetchSeverisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchSeverisResponse(arg) {
  if (!(arg instanceof severi_pb.FetchSeverisResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchSeverisResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchSeverisResponse(buffer_arg) {
  return severi_pb.FetchSeverisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchTelnetInterfaceByIdRequest(arg) {
  if (!(arg instanceof telnet_interface_pb.FetchTelnetInterfaceByIdRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchTelnetInterfaceByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchTelnetInterfaceByIdRequest(buffer_arg) {
  return telnet_interface_pb.FetchTelnetInterfaceByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchTelnetInterfaceByIdResponse(arg) {
  if (!(arg instanceof telnet_interface_pb.FetchTelnetInterfaceByIdResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchTelnetInterfaceByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchTelnetInterfaceByIdResponse(buffer_arg) {
  return telnet_interface_pb.FetchTelnetInterfaceByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchTelnetInterfacesRequest(arg) {
  if (!(arg instanceof telnet_interface_pb.FetchTelnetInterfacesRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchTelnetInterfacesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchTelnetInterfacesRequest(buffer_arg) {
  return telnet_interface_pb.FetchTelnetInterfacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchTelnetInterfacesResponse(arg) {
  if (!(arg instanceof telnet_interface_pb.FetchTelnetInterfacesResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchTelnetInterfacesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchTelnetInterfacesResponse(buffer_arg) {
  return telnet_interface_pb.FetchTelnetInterfacesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_FetchWolInterfacesRequest(arg) {
  if (!(arg instanceof wol_interface_pb.FetchWolInterfacesRequest)) {
    throw new Error('Expected argument of type WompattiService.FetchWolInterfacesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchWolInterfacesRequest(buffer_arg) {
  return wol_interface_pb.FetchWolInterfacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_FetchWolInterfacesResponse(arg) {
  if (!(arg instanceof wol_interface_pb.FetchWolInterfacesResponse)) {
    throw new Error('Expected argument of type WompattiService.FetchWolInterfacesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_FetchWolInterfacesResponse(buffer_arg) {
  return wol_interface_pb.FetchWolInterfacesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveCommandRequest(arg) {
  if (!(arg instanceof command_pb.RemoveCommandRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveCommandRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveCommandRequest(buffer_arg) {
  return command_pb.RemoveCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveCommandResponse(arg) {
  if (!(arg instanceof command_pb.RemoveCommandResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveCommandResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveCommandResponse(buffer_arg) {
  return command_pb.RemoveCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_RemoveSeveriRequest(arg) {
  if (!(arg instanceof severi_pb.RemoveSeveriRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveSeveriRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveSeveriRequest(buffer_arg) {
  return severi_pb.RemoveSeveriRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveSeveriResponse(arg) {
  if (!(arg instanceof severi_pb.RemoveSeveriResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveSeveriResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveSeveriResponse(buffer_arg) {
  return severi_pb.RemoveSeveriResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveTelnetInterfaceRequest(arg) {
  if (!(arg instanceof telnet_interface_pb.RemoveTelnetInterfaceRequest)) {
    throw new Error('Expected argument of type WompattiService.RemoveTelnetInterfaceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveTelnetInterfaceRequest(buffer_arg) {
  return telnet_interface_pb.RemoveTelnetInterfaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_RemoveTelnetInterfaceResponse(arg) {
  if (!(arg instanceof telnet_interface_pb.RemoveTelnetInterfaceResponse)) {
    throw new Error('Expected argument of type WompattiService.RemoveTelnetInterfaceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_RemoveTelnetInterfaceResponse(buffer_arg) {
  return telnet_interface_pb.RemoveTelnetInterfaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WompattiService_WakeupRequest(arg) {
  if (!(arg instanceof wol_interface_pb.WakeupRequest)) {
    throw new Error('Expected argument of type WompattiService.WakeupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_WakeupRequest(buffer_arg) {
  return wol_interface_pb.WakeupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WompattiService_WakeupResponse(arg) {
  if (!(arg instanceof wol_interface_pb.WakeupResponse)) {
    throw new Error('Expected argument of type WompattiService.WakeupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WompattiService_WakeupResponse(buffer_arg) {
  return wol_interface_pb.WakeupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WompattiService = exports.WompattiService = {
  // Fetch
  fetchTelnetInterfaces: {
    path: '/WompattiService.Wompatti/fetchTelnetInterfaces',
    requestStream: false,
    responseStream: false,
    requestType: telnet_interface_pb.FetchTelnetInterfacesRequest,
    responseType: telnet_interface_pb.FetchTelnetInterfacesResponse,
    requestSerialize: serialize_WompattiService_FetchTelnetInterfacesRequest,
    requestDeserialize: deserialize_WompattiService_FetchTelnetInterfacesRequest,
    responseSerialize: serialize_WompattiService_FetchTelnetInterfacesResponse,
    responseDeserialize: deserialize_WompattiService_FetchTelnetInterfacesResponse,
  },
  fetchTelnetInterfaceById: {
    path: '/WompattiService.Wompatti/fetchTelnetInterfaceById',
    requestStream: false,
    responseStream: false,
    requestType: telnet_interface_pb.FetchTelnetInterfaceByIdRequest,
    responseType: telnet_interface_pb.FetchTelnetInterfaceByIdResponse,
    requestSerialize: serialize_WompattiService_FetchTelnetInterfaceByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchTelnetInterfaceByIdRequest,
    responseSerialize: serialize_WompattiService_FetchTelnetInterfaceByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchTelnetInterfaceByIdResponse,
  },
  fetchDevices: {
    path: '/WompattiService.Wompatti/fetchDevices',
    requestStream: false,
    responseStream: false,
    requestType: device_pb.FetchDevicesRequest,
    responseType: device_pb.FetchDevicesResponse,
    requestSerialize: serialize_WompattiService_FetchDevicesRequest,
    requestDeserialize: deserialize_WompattiService_FetchDevicesRequest,
    responseSerialize: serialize_WompattiService_FetchDevicesResponse,
    responseDeserialize: deserialize_WompattiService_FetchDevicesResponse,
  },
  fetchDeviceById: {
    path: '/WompattiService.Wompatti/fetchDeviceById',
    requestStream: false,
    responseStream: false,
    requestType: device_pb.FetchDeviceByIdRequest,
    responseType: device_pb.FetchDeviceByIdResponse,
    requestSerialize: serialize_WompattiService_FetchDeviceByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchDeviceByIdRequest,
    responseSerialize: serialize_WompattiService_FetchDeviceByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchDeviceByIdResponse,
  },
  fetchDeviceTypes: {
    path: '/WompattiService.Wompatti/fetchDeviceTypes',
    requestStream: false,
    responseStream: false,
    requestType: device_type_pb.FetchDeviceTypesRequest,
    responseType: device_type_pb.FetchDeviceTypesResponse,
    requestSerialize: serialize_WompattiService_FetchDeviceTypesRequest,
    requestDeserialize: deserialize_WompattiService_FetchDeviceTypesRequest,
    responseSerialize: serialize_WompattiService_FetchDeviceTypesResponse,
    responseDeserialize: deserialize_WompattiService_FetchDeviceTypesResponse,
  },
  fetchDeviceTypeById: {
    path: '/WompattiService.Wompatti/fetchDeviceTypeById',
    requestStream: false,
    responseStream: false,
    requestType: device_type_pb.FetchDeviceTypeByIdRequest,
    responseType: device_type_pb.FetchDeviceTypeByIdResponse,
    requestSerialize: serialize_WompattiService_FetchDeviceTypeByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchDeviceTypeByIdRequest,
    responseSerialize: serialize_WompattiService_FetchDeviceTypeByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchDeviceTypeByIdResponse,
  },
  fetchCommands: {
    path: '/WompattiService.Wompatti/fetchCommands',
    requestStream: false,
    responseStream: false,
    requestType: command_pb.FetchCommandsRequest,
    responseType: command_pb.FetchCommandsResponse,
    requestSerialize: serialize_WompattiService_FetchCommandsRequest,
    requestDeserialize: deserialize_WompattiService_FetchCommandsRequest,
    responseSerialize: serialize_WompattiService_FetchCommandsResponse,
    responseDeserialize: deserialize_WompattiService_FetchCommandsResponse,
  },
  fetchCommandsByDeviceTypeId: {
    path: '/WompattiService.Wompatti/fetchCommandsByDeviceTypeId',
    requestStream: false,
    responseStream: false,
    requestType: command_pb.FetchCommandsByDeviceTypeIdRequest,
    responseType: command_pb.FetchCommandsByDeviceTypeIdResponse,
    requestSerialize: serialize_WompattiService_FetchCommandsByDeviceTypeIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchCommandsByDeviceTypeIdRequest,
    responseSerialize: serialize_WompattiService_FetchCommandsByDeviceTypeIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchCommandsByDeviceTypeIdResponse,
  },
  fetchCommandById: {
    path: '/WompattiService.Wompatti/fetchCommandById',
    requestStream: false,
    responseStream: false,
    requestType: command_pb.FetchCommandByIdRequest,
    responseType: command_pb.FetchCommandByIdResponse,
    requestSerialize: serialize_WompattiService_FetchCommandByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchCommandByIdRequest,
    responseSerialize: serialize_WompattiService_FetchCommandByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchCommandByIdResponse,
  },
  fetchKeijos: {
    path: '/WompattiService.Wompatti/fetchKeijos',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.FetchKeijosRequest,
    responseType: keijo_pb.FetchKeijosResponse,
    requestSerialize: serialize_WompattiService_FetchKeijosRequest,
    requestDeserialize: deserialize_WompattiService_FetchKeijosRequest,
    responseSerialize: serialize_WompattiService_FetchKeijosResponse,
    responseDeserialize: deserialize_WompattiService_FetchKeijosResponse,
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
  fetchSeveris: {
    path: '/WompattiService.Wompatti/fetchSeveris',
    requestStream: false,
    responseStream: false,
    requestType: severi_pb.FetchSeverisRequest,
    responseType: severi_pb.FetchSeverisResponse,
    requestSerialize: serialize_WompattiService_FetchSeverisRequest,
    requestDeserialize: deserialize_WompattiService_FetchSeverisRequest,
    responseSerialize: serialize_WompattiService_FetchSeverisResponse,
    responseDeserialize: deserialize_WompattiService_FetchSeverisResponse,
  },
  fetchSeveriById: {
    path: '/WompattiService.Wompatti/fetchSeveriById',
    requestStream: false,
    responseStream: false,
    requestType: severi_pb.FetchSeveriByIdRequest,
    responseType: severi_pb.FetchSeveriByIdResponse,
    requestSerialize: serialize_WompattiService_FetchSeveriByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchSeveriByIdRequest,
    responseSerialize: serialize_WompattiService_FetchSeveriByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchSeveriByIdResponse,
  },
  fetchWolInterfaces: {
    path: '/WompattiService.Wompatti/fetchWolInterfaces',
    requestStream: false,
    responseStream: false,
    requestType: wol_interface_pb.FetchWolInterfacesRequest,
    responseType: wol_interface_pb.FetchWolInterfacesResponse,
    requestSerialize: serialize_WompattiService_FetchWolInterfacesRequest,
    requestDeserialize: deserialize_WompattiService_FetchWolInterfacesRequest,
    responseSerialize: serialize_WompattiService_FetchWolInterfacesResponse,
    responseDeserialize: deserialize_WompattiService_FetchWolInterfacesResponse,
  },
  fetchWolInterfaceById: {
    path: '/WompattiService.Wompatti/fetchWolInterfaceById',
    requestStream: false,
    responseStream: false,
    requestType: wol_interface_pb.FetchWolInterfaceByIdRequest,
    responseType: wol_interface_pb.FetchWolInterfaceByIdResponse,
    requestSerialize: serialize_WompattiService_FetchWolInterfaceByIdRequest,
    requestDeserialize: deserialize_WompattiService_FetchWolInterfaceByIdRequest,
    responseSerialize: serialize_WompattiService_FetchWolInterfaceByIdResponse,
    responseDeserialize: deserialize_WompattiService_FetchWolInterfaceByIdResponse,
  },
  // Mutate
  createTelnetInterface: {
    path: '/WompattiService.Wompatti/createTelnetInterface',
    requestStream: false,
    responseStream: false,
    requestType: telnet_interface_pb.CreateTelnetInterfaceRequest,
    responseType: telnet_interface_pb.CreateTelnetInterfaceResponse,
    requestSerialize: serialize_WompattiService_CreateTelnetInterfaceRequest,
    requestDeserialize: deserialize_WompattiService_CreateTelnetInterfaceRequest,
    responseSerialize: serialize_WompattiService_CreateTelnetInterfaceResponse,
    responseDeserialize: deserialize_WompattiService_CreateTelnetInterfaceResponse,
  },
  editTelnetInterface: {
    path: '/WompattiService.Wompatti/editTelnetInterface',
    requestStream: false,
    responseStream: false,
    requestType: telnet_interface_pb.EditTelnetInterfaceRequest,
    responseType: telnet_interface_pb.EditTelnetInterfaceResponse,
    requestSerialize: serialize_WompattiService_EditTelnetInterfaceRequest,
    requestDeserialize: deserialize_WompattiService_EditTelnetInterfaceRequest,
    responseSerialize: serialize_WompattiService_EditTelnetInterfaceResponse,
    responseDeserialize: deserialize_WompattiService_EditTelnetInterfaceResponse,
  },
  removeTelnetInterface: {
    path: '/WompattiService.Wompatti/removeTelnetInterface',
    requestStream: false,
    responseStream: false,
    requestType: telnet_interface_pb.RemoveTelnetInterfaceRequest,
    responseType: telnet_interface_pb.RemoveTelnetInterfaceResponse,
    requestSerialize: serialize_WompattiService_RemoveTelnetInterfaceRequest,
    requestDeserialize: deserialize_WompattiService_RemoveTelnetInterfaceRequest,
    responseSerialize: serialize_WompattiService_RemoveTelnetInterfaceResponse,
    responseDeserialize: deserialize_WompattiService_RemoveTelnetInterfaceResponse,
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
  editDevice: {
    path: '/WompattiService.Wompatti/editDevice',
    requestStream: false,
    responseStream: false,
    requestType: device_pb.EditDeviceRequest,
    responseType: device_pb.EditDeviceResponse,
    requestSerialize: serialize_WompattiService_EditDeviceRequest,
    requestDeserialize: deserialize_WompattiService_EditDeviceRequest,
    responseSerialize: serialize_WompattiService_EditDeviceResponse,
    responseDeserialize: deserialize_WompattiService_EditDeviceResponse,
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
    requestType: command_pb.CreateCommandRequest,
    responseType: command_pb.CreateCommandResponse,
    requestSerialize: serialize_WompattiService_CreateCommandRequest,
    requestDeserialize: deserialize_WompattiService_CreateCommandRequest,
    responseSerialize: serialize_WompattiService_CreateCommandResponse,
    responseDeserialize: deserialize_WompattiService_CreateCommandResponse,
  },
  editCommand: {
    path: '/WompattiService.Wompatti/editCommand',
    requestStream: false,
    responseStream: false,
    requestType: command_pb.EditCommandRequest,
    responseType: command_pb.EditCommandReponse,
    requestSerialize: serialize_WompattiService_EditCommandRequest,
    requestDeserialize: deserialize_WompattiService_EditCommandRequest,
    responseSerialize: serialize_WompattiService_EditCommandReponse,
    responseDeserialize: deserialize_WompattiService_EditCommandReponse,
  },
  removeCommand: {
    path: '/WompattiService.Wompatti/removeCommand',
    requestStream: false,
    responseStream: false,
    requestType: command_pb.RemoveCommandRequest,
    responseType: command_pb.RemoveCommandResponse,
    requestSerialize: serialize_WompattiService_RemoveCommandRequest,
    requestDeserialize: deserialize_WompattiService_RemoveCommandRequest,
    responseSerialize: serialize_WompattiService_RemoveCommandResponse,
    responseDeserialize: deserialize_WompattiService_RemoveCommandResponse,
  },
  createKeijo: {
    path: '/WompattiService.Wompatti/createKeijo',
    requestStream: false,
    responseStream: false,
    requestType: keijo_pb.CreateKeijoRequest,
    responseType: keijo_pb.CreateKeijoResponse,
    requestSerialize: serialize_WompattiService_CreateKeijoRequest,
    requestDeserialize: deserialize_WompattiService_CreateKeijoRequest,
    responseSerialize: serialize_WompattiService_CreateKeijoResponse,
    responseDeserialize: deserialize_WompattiService_CreateKeijoResponse,
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
  createSeveri: {
    path: '/WompattiService.Wompatti/createSeveri',
    requestStream: false,
    responseStream: false,
    requestType: severi_pb.CreateSeveriRequest,
    responseType: severi_pb.CreateSeveriResponse,
    requestSerialize: serialize_WompattiService_CreateSeveriRequest,
    requestDeserialize: deserialize_WompattiService_CreateSeveriRequest,
    responseSerialize: serialize_WompattiService_CreateSeveriResponse,
    responseDeserialize: deserialize_WompattiService_CreateSeveriResponse,
  },
  editSeveri: {
    path: '/WompattiService.Wompatti/editSeveri',
    requestStream: false,
    responseStream: false,
    requestType: severi_pb.EditSeveriRequest,
    responseType: severi_pb.EditSeveriResponse,
    requestSerialize: serialize_WompattiService_EditSeveriRequest,
    requestDeserialize: deserialize_WompattiService_EditSeveriRequest,
    responseSerialize: serialize_WompattiService_EditSeveriResponse,
    responseDeserialize: deserialize_WompattiService_EditSeveriResponse,
  },
  removeSeveri: {
    path: '/WompattiService.Wompatti/removeSeveri',
    requestStream: false,
    responseStream: false,
    requestType: severi_pb.RemoveSeveriRequest,
    responseType: severi_pb.RemoveSeveriResponse,
    requestSerialize: serialize_WompattiService_RemoveSeveriRequest,
    requestDeserialize: deserialize_WompattiService_RemoveSeveriRequest,
    responseSerialize: serialize_WompattiService_RemoveSeveriResponse,
    responseDeserialize: deserialize_WompattiService_RemoveSeveriResponse,
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
  wakeup: {
    path: '/WompattiService.Wompatti/wakeup',
    requestStream: false,
    responseStream: false,
    requestType: wol_interface_pb.WakeupRequest,
    responseType: wol_interface_pb.WakeupResponse,
    requestSerialize: serialize_WompattiService_WakeupRequest,
    requestDeserialize: deserialize_WompattiService_WakeupRequest,
    responseSerialize: serialize_WompattiService_WakeupResponse,
    responseDeserialize: deserialize_WompattiService_WakeupResponse,
  },
};

exports.WompattiClient = grpc.makeGenericClientConstructor(WompattiService);
