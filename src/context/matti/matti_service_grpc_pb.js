// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var matrix_pb = require('./matrix_pb.js');
var con_port_pb = require('./con_port_pb.js');
var cpu_port_pb = require('./cpu_port_pb.js');
var default_state_pb = require('./default_state_pb.js');
var default_state_video_connection_pb = require('./default_state_video_connection_pb.js');
var default_state_kvm_connection_pb = require('./default_state_kvm_connection_pb.js');
var diagram_pb = require('./diagram_pb.js');
var diagram_screen_pb = require('./diagram_screen_pb.js');
var diagram_screen_cpu_port_pb = require('./diagram_screen_cpu_port_pb.js');

function serialize_MattiService_AddCpuToDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.AddCpuToDiagramScreenRequest)) {
    throw new Error('Expected argument of type MattiService.AddCpuToDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_AddCpuToDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.AddCpuToDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_AddCpuToDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.AddCpuToDiagramScreenResponse)) {
    throw new Error('Expected argument of type MattiService.AddCpuToDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_AddCpuToDiagramScreenResponse(buffer_arg) {
  return diagram_screen_pb.AddCpuToDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_ConPort(arg) {
  if (!(arg instanceof con_port_pb.ConPort)) {
    throw new Error('Expected argument of type MattiService.ConPort');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_ConPort(buffer_arg) {
  return con_port_pb.ConPort.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_ConnectMatrixRequest(arg) {
  if (!(arg instanceof matrix_pb.ConnectMatrixRequest)) {
    throw new Error('Expected argument of type MattiService.ConnectMatrixRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_ConnectMatrixRequest(buffer_arg) {
  return matrix_pb.ConnectMatrixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_ConnectMatrixResponse(arg) {
  if (!(arg instanceof matrix_pb.ConnectMatrixResponse)) {
    throw new Error('Expected argument of type MattiService.ConnectMatrixResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_ConnectMatrixResponse(buffer_arg) {
  return matrix_pb.ConnectMatrixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_CpuPort(arg) {
  if (!(arg instanceof cpu_port_pb.CpuPort)) {
    throw new Error('Expected argument of type MattiService.CpuPort');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_CpuPort(buffer_arg) {
  return cpu_port_pb.CpuPort.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_CreateDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.CreateDefaultStateRequest)) {
    throw new Error('Expected argument of type MattiService.CreateDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_CreateDefaultStateRequest(buffer_arg) {
  return default_state_pb.CreateDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_CreateDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.CreateDefaultStateResponse)) {
    throw new Error('Expected argument of type MattiService.CreateDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_CreateDefaultStateResponse(buffer_arg) {
  return default_state_pb.CreateDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_CreateDiagramRequest(arg) {
  if (!(arg instanceof diagram_pb.CreateDiagramRequest)) {
    throw new Error('Expected argument of type MattiService.CreateDiagramRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_CreateDiagramRequest(buffer_arg) {
  return diagram_pb.CreateDiagramRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_CreateDiagramResponse(arg) {
  if (!(arg instanceof diagram_pb.CreateDiagramResponse)) {
    throw new Error('Expected argument of type MattiService.CreateDiagramResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_CreateDiagramResponse(buffer_arg) {
  return diagram_pb.CreateDiagramResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_CreateDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.CreateDiagramScreenRequest)) {
    throw new Error('Expected argument of type MattiService.CreateDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_CreateDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.CreateDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_CreateDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.CreateDiagramScreenResponse)) {
    throw new Error('Expected argument of type MattiService.CreateDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_CreateDiagramScreenResponse(buffer_arg) {
  return diagram_screen_pb.CreateDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_DefaultState(arg) {
  if (!(arg instanceof default_state_pb.DefaultState)) {
    throw new Error('Expected argument of type MattiService.DefaultState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_DefaultState(buffer_arg) {
  return default_state_pb.DefaultState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_Diagram(arg) {
  if (!(arg instanceof diagram_pb.Diagram)) {
    throw new Error('Expected argument of type MattiService.Diagram');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_Diagram(buffer_arg) {
  return diagram_pb.Diagram.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_DiagramScreen(arg) {
  if (!(arg instanceof diagram_screen_pb.DiagramScreen)) {
    throw new Error('Expected argument of type MattiService.DiagramScreen');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_DiagramScreen(buffer_arg) {
  return diagram_screen_pb.DiagramScreen.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditConPortRequest(arg) {
  if (!(arg instanceof con_port_pb.EditConPortRequest)) {
    throw new Error('Expected argument of type MattiService.EditConPortRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditConPortRequest(buffer_arg) {
  return con_port_pb.EditConPortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditConPortResponse(arg) {
  if (!(arg instanceof con_port_pb.EditConPortResponse)) {
    throw new Error('Expected argument of type MattiService.EditConPortResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditConPortResponse(buffer_arg) {
  return con_port_pb.EditConPortResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditCpuPortRequest(arg) {
  if (!(arg instanceof cpu_port_pb.EditCpuPortRequest)) {
    throw new Error('Expected argument of type MattiService.EditCpuPortRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditCpuPortRequest(buffer_arg) {
  return cpu_port_pb.EditCpuPortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditCpuPortResponse(arg) {
  if (!(arg instanceof cpu_port_pb.EditCpuPortResponse)) {
    throw new Error('Expected argument of type MattiService.EditCpuPortResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditCpuPortResponse(buffer_arg) {
  return cpu_port_pb.EditCpuPortResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.EditDefaultStateRequest)) {
    throw new Error('Expected argument of type MattiService.EditDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditDefaultStateRequest(buffer_arg) {
  return default_state_pb.EditDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.EditDefaultStateResponse)) {
    throw new Error('Expected argument of type MattiService.EditDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditDefaultStateResponse(buffer_arg) {
  return default_state_pb.EditDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditDiagramRequest(arg) {
  if (!(arg instanceof diagram_pb.EditDiagramRequest)) {
    throw new Error('Expected argument of type MattiService.EditDiagramRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditDiagramRequest(buffer_arg) {
  return diagram_pb.EditDiagramRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditDiagramResponse(arg) {
  if (!(arg instanceof diagram_pb.EditDiagramResponse)) {
    throw new Error('Expected argument of type MattiService.EditDiagramResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditDiagramResponse(buffer_arg) {
  return diagram_pb.EditDiagramResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.EditDiagramScreenRequest)) {
    throw new Error('Expected argument of type MattiService.EditDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.EditDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.EditDiagramScreenResponse)) {
    throw new Error('Expected argument of type MattiService.EditDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditDiagramScreenResponse(buffer_arg) {
  return diagram_screen_pb.EditDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditMatrixRequest(arg) {
  if (!(arg instanceof matrix_pb.EditMatrixRequest)) {
    throw new Error('Expected argument of type MattiService.EditMatrixRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditMatrixRequest(buffer_arg) {
  return matrix_pb.EditMatrixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_EditMatrixResponse(arg) {
  if (!(arg instanceof matrix_pb.EditMatrixResponse)) {
    throw new Error('Expected argument of type MattiService.EditMatrixResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_EditMatrixResponse(buffer_arg) {
  return matrix_pb.EditMatrixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_ExecuteDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.ExecuteDefaultStateRequest)) {
    throw new Error('Expected argument of type MattiService.ExecuteDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_ExecuteDefaultStateRequest(buffer_arg) {
  return default_state_pb.ExecuteDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_ExecuteDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.ExecuteDefaultStateResponse)) {
    throw new Error('Expected argument of type MattiService.ExecuteDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_ExecuteDefaultStateResponse(buffer_arg) {
  return default_state_pb.ExecuteDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchConPortByIdRequest(arg) {
  if (!(arg instanceof con_port_pb.FetchConPortByIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchConPortByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchConPortByIdRequest(buffer_arg) {
  return con_port_pb.FetchConPortByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchConPortByIdResponse(arg) {
  if (!(arg instanceof con_port_pb.FetchConPortByIdResponse)) {
    throw new Error('Expected argument of type MattiService.FetchConPortByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchConPortByIdResponse(buffer_arg) {
  return con_port_pb.FetchConPortByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchConPortsByMatrixIdRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchConPortsByMatrixIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchConPortsByMatrixIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchConPortsByMatrixIdRequest(buffer_arg) {
  return matrix_pb.FetchConPortsByMatrixIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchCpuPortByIdRequest(arg) {
  if (!(arg instanceof cpu_port_pb.FetchCpuPortByIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchCpuPortByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchCpuPortByIdRequest(buffer_arg) {
  return cpu_port_pb.FetchCpuPortByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchCpuPortsByMatrixIdRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchCpuPortsByMatrixIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchCpuPortsByMatrixIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchCpuPortsByMatrixIdRequest(buffer_arg) {
  return matrix_pb.FetchCpuPortsByMatrixIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDefaultStateByIdRequest(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStateByIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDefaultStateByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDefaultStateByIdRequest(buffer_arg) {
  return default_state_pb.FetchDefaultStateByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDefaultStateByIdResponse(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStateByIdResponse)) {
    throw new Error('Expected argument of type MattiService.FetchDefaultStateByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDefaultStateByIdResponse(buffer_arg) {
  return default_state_pb.FetchDefaultStateByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDefaultStateBySlugRequest(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStateBySlugRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDefaultStateBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDefaultStateBySlugRequest(buffer_arg) {
  return default_state_pb.FetchDefaultStateBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDefaultStateBySlugResponse(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStateBySlugResponse)) {
    throw new Error('Expected argument of type MattiService.FetchDefaultStateBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDefaultStateBySlugResponse(buffer_arg) {
  return default_state_pb.FetchDefaultStateBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDefaultStatesRequest(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStatesRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDefaultStatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDefaultStatesRequest(buffer_arg) {
  return default_state_pb.FetchDefaultStatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramByIdRequest(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramByIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramByIdRequest(buffer_arg) {
  return diagram_pb.FetchDiagramByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramByIdResponse(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramByIdResponse)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramByIdResponse(buffer_arg) {
  return diagram_pb.FetchDiagramByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramBySlugRequest(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramBySlugRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramBySlugRequest(buffer_arg) {
  return diagram_pb.FetchDiagramBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramBySlugResponse(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramBySlugResponse)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramBySlugResponse(buffer_arg) {
  return diagram_pb.FetchDiagramBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramScreenByIdRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreenByIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramScreenByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramScreenByIdRequest(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreenByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramScreenByIdResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreenByIdResponse)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramScreenByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramScreenByIdResponse(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreenByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramScreenBySlugRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreenBySlugRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramScreenBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramScreenBySlugRequest(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreenBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramScreenBySlugResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreenBySlugResponse)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramScreenBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramScreenBySlugResponse(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreenBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramScreensByDiagramIdRequest(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramScreensByDiagramIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramScreensByDiagramIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramScreensByDiagramIdRequest(buffer_arg) {
  return diagram_pb.FetchDiagramScreensByDiagramIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramScreensRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreensRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramScreensRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramScreensRequest(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreensRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchDiagramsRequest(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramsRequest)) {
    throw new Error('Expected argument of type MattiService.FetchDiagramsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchDiagramsRequest(buffer_arg) {
  return diagram_pb.FetchDiagramsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchMatrixByIdRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixByIdRequest)) {
    throw new Error('Expected argument of type MattiService.FetchMatrixByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchMatrixByIdRequest(buffer_arg) {
  return matrix_pb.FetchMatrixByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchMatrixByIdResponse(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixByIdResponse)) {
    throw new Error('Expected argument of type MattiService.FetchMatrixByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchMatrixByIdResponse(buffer_arg) {
  return matrix_pb.FetchMatrixByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchMatrixBySlugRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixBySlugRequest)) {
    throw new Error('Expected argument of type MattiService.FetchMatrixBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchMatrixBySlugRequest(buffer_arg) {
  return matrix_pb.FetchMatrixBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchMatrixBySlugResponse(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixBySlugResponse)) {
    throw new Error('Expected argument of type MattiService.FetchMatrixBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchMatrixBySlugResponse(buffer_arg) {
  return matrix_pb.FetchMatrixBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_FetchMatrixsRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixsRequest)) {
    throw new Error('Expected argument of type MattiService.FetchMatrixsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_FetchMatrixsRequest(buffer_arg) {
  return matrix_pb.FetchMatrixsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_InsertKvmConnectionToDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.InsertKvmConnectionToDefaultStateRequest)) {
    throw new Error('Expected argument of type MattiService.InsertKvmConnectionToDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_InsertKvmConnectionToDefaultStateRequest(buffer_arg) {
  return default_state_pb.InsertKvmConnectionToDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_InsertKvmConnectionToDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.InsertKvmConnectionToDefaultStateResponse)) {
    throw new Error('Expected argument of type MattiService.InsertKvmConnectionToDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_InsertKvmConnectionToDefaultStateResponse(buffer_arg) {
  return default_state_pb.InsertKvmConnectionToDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_InsertVideoConnectionToDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.InsertVideoConnectionToDefaultStateRequest)) {
    throw new Error('Expected argument of type MattiService.InsertVideoConnectionToDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_InsertVideoConnectionToDefaultStateRequest(buffer_arg) {
  return default_state_pb.InsertVideoConnectionToDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_InsertVideoConnectionToDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.InsertVideoConnectionToDefaultStateResponse)) {
    throw new Error('Expected argument of type MattiService.InsertVideoConnectionToDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_InsertVideoConnectionToDefaultStateResponse(buffer_arg) {
  return default_state_pb.InsertVideoConnectionToDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_Matrix(arg) {
  if (!(arg instanceof matrix_pb.Matrix)) {
    throw new Error('Expected argument of type MattiService.Matrix');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_Matrix(buffer_arg) {
  return matrix_pb.Matrix.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveCpuFromDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_cpu_port_pb.RemoveCpuFromDiagramScreenRequest)) {
    throw new Error('Expected argument of type MattiService.RemoveCpuFromDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveCpuFromDiagramScreenRequest(buffer_arg) {
  return diagram_screen_cpu_port_pb.RemoveCpuFromDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveCpuFromDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_cpu_port_pb.RemoveCpuFromDiagramScreenResponse)) {
    throw new Error('Expected argument of type MattiService.RemoveCpuFromDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveCpuFromDiagramScreenResponse(buffer_arg) {
  return diagram_screen_cpu_port_pb.RemoveCpuFromDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.RemoveDefaultStateRequest)) {
    throw new Error('Expected argument of type MattiService.RemoveDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveDefaultStateRequest(buffer_arg) {
  return default_state_pb.RemoveDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.RemoveDefaultStateResponse)) {
    throw new Error('Expected argument of type MattiService.RemoveDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveDefaultStateResponse(buffer_arg) {
  return default_state_pb.RemoveDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveDiagramRequest(arg) {
  if (!(arg instanceof diagram_pb.RemoveDiagramRequest)) {
    throw new Error('Expected argument of type MattiService.RemoveDiagramRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveDiagramRequest(buffer_arg) {
  return diagram_pb.RemoveDiagramRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveDiagramResponse(arg) {
  if (!(arg instanceof diagram_pb.RemoveDiagramResponse)) {
    throw new Error('Expected argument of type MattiService.RemoveDiagramResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveDiagramResponse(buffer_arg) {
  return diagram_pb.RemoveDiagramResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.RemoveDiagramScreenRequest)) {
    throw new Error('Expected argument of type MattiService.RemoveDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.RemoveDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.RemoveDiagramScreenResponse)) {
    throw new Error('Expected argument of type MattiService.RemoveDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveDiagramScreenResponse(buffer_arg) {
  return diagram_screen_pb.RemoveDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveKvmConnectionFromDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_kvm_connection_pb.RemoveKvmConnectionFromDefaultStateRequest)) {
    throw new Error('Expected argument of type MattiService.RemoveKvmConnectionFromDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveKvmConnectionFromDefaultStateRequest(buffer_arg) {
  return default_state_kvm_connection_pb.RemoveKvmConnectionFromDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveKvmConnectionFromDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_kvm_connection_pb.RemoveKvmConnectionFromDefaultStateResponse)) {
    throw new Error('Expected argument of type MattiService.RemoveKvmConnectionFromDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveKvmConnectionFromDefaultStateResponse(buffer_arg) {
  return default_state_kvm_connection_pb.RemoveKvmConnectionFromDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveMatrixRequest(arg) {
  if (!(arg instanceof matrix_pb.RemoveMatrixRequest)) {
    throw new Error('Expected argument of type MattiService.RemoveMatrixRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveMatrixRequest(buffer_arg) {
  return matrix_pb.RemoveMatrixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveMatrixResponse(arg) {
  if (!(arg instanceof matrix_pb.RemoveMatrixResponse)) {
    throw new Error('Expected argument of type MattiService.RemoveMatrixResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveMatrixResponse(buffer_arg) {
  return matrix_pb.RemoveMatrixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveVideoConnectionFromDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_video_connection_pb.RemoveVideoConnectionFromDefaultStateRequest)) {
    throw new Error('Expected argument of type MattiService.RemoveVideoConnectionFromDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveVideoConnectionFromDefaultStateRequest(buffer_arg) {
  return default_state_video_connection_pb.RemoveVideoConnectionFromDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MattiService_RemoveVideoConnectionFromDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_video_connection_pb.RemoveVideoConnectionFromDefaultStateResponse)) {
    throw new Error('Expected argument of type MattiService.RemoveVideoConnectionFromDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MattiService_RemoveVideoConnectionFromDefaultStateResponse(buffer_arg) {
  return default_state_video_connection_pb.RemoveVideoConnectionFromDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MattiService = exports.MattiService = {
  // Matrixs queries
  fetchMatrixs: {
    path: '/MattiService.Matti/fetchMatrixs',
    requestStream: false,
    responseStream: true,
    requestType: matrix_pb.FetchMatrixsRequest,
    responseType: matrix_pb.Matrix,
    requestSerialize: serialize_MattiService_FetchMatrixsRequest,
    requestDeserialize: deserialize_MattiService_FetchMatrixsRequest,
    responseSerialize: serialize_MattiService_Matrix,
    responseDeserialize: deserialize_MattiService_Matrix,
  },
  fetchMatrixById: {
    path: '/MattiService.Matti/fetchMatrixById',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.FetchMatrixByIdRequest,
    responseType: matrix_pb.FetchMatrixByIdResponse,
    requestSerialize: serialize_MattiService_FetchMatrixByIdRequest,
    requestDeserialize: deserialize_MattiService_FetchMatrixByIdRequest,
    responseSerialize: serialize_MattiService_FetchMatrixByIdResponse,
    responseDeserialize: deserialize_MattiService_FetchMatrixByIdResponse,
  },
  fetchMatrixBySlug: {
    path: '/MattiService.Matti/fetchMatrixBySlug',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.FetchMatrixBySlugRequest,
    responseType: matrix_pb.FetchMatrixBySlugResponse,
    requestSerialize: serialize_MattiService_FetchMatrixBySlugRequest,
    requestDeserialize: deserialize_MattiService_FetchMatrixBySlugRequest,
    responseSerialize: serialize_MattiService_FetchMatrixBySlugResponse,
    responseDeserialize: deserialize_MattiService_FetchMatrixBySlugResponse,
  },
  fetchConPortsByMatrixId: {
    path: '/MattiService.Matti/fetchConPortsByMatrixId',
    requestStream: false,
    responseStream: true,
    requestType: matrix_pb.FetchConPortsByMatrixIdRequest,
    responseType: con_port_pb.ConPort,
    requestSerialize: serialize_MattiService_FetchConPortsByMatrixIdRequest,
    requestDeserialize: deserialize_MattiService_FetchConPortsByMatrixIdRequest,
    responseSerialize: serialize_MattiService_ConPort,
    responseDeserialize: deserialize_MattiService_ConPort,
  },
  fetchCpuPortsByMatrixId: {
    path: '/MattiService.Matti/fetchCpuPortsByMatrixId',
    requestStream: false,
    responseStream: true,
    requestType: matrix_pb.FetchCpuPortsByMatrixIdRequest,
    responseType: cpu_port_pb.CpuPort,
    requestSerialize: serialize_MattiService_FetchCpuPortsByMatrixIdRequest,
    requestDeserialize: deserialize_MattiService_FetchCpuPortsByMatrixIdRequest,
    responseSerialize: serialize_MattiService_CpuPort,
    responseDeserialize: deserialize_MattiService_CpuPort,
  },
  fetchConPortById: {
    path: '/MattiService.Matti/fetchConPortById',
    requestStream: false,
    responseStream: false,
    requestType: con_port_pb.FetchConPortByIdRequest,
    responseType: con_port_pb.FetchConPortByIdResponse,
    requestSerialize: serialize_MattiService_FetchConPortByIdRequest,
    requestDeserialize: deserialize_MattiService_FetchConPortByIdRequest,
    responseSerialize: serialize_MattiService_FetchConPortByIdResponse,
    responseDeserialize: deserialize_MattiService_FetchConPortByIdResponse,
  },
  fetchCpuPortById: {
    path: '/MattiService.Matti/fetchCpuPortById',
    requestStream: false,
    responseStream: false,
    requestType: cpu_port_pb.FetchCpuPortByIdRequest,
    responseType: con_port_pb.FetchConPortByIdResponse,
    requestSerialize: serialize_MattiService_FetchCpuPortByIdRequest,
    requestDeserialize: deserialize_MattiService_FetchCpuPortByIdRequest,
    responseSerialize: serialize_MattiService_FetchConPortByIdResponse,
    responseDeserialize: deserialize_MattiService_FetchConPortByIdResponse,
  },
  // Matrix mutations
  connectMatrix: {
    path: '/MattiService.Matti/connectMatrix',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.ConnectMatrixRequest,
    responseType: matrix_pb.ConnectMatrixResponse,
    requestSerialize: serialize_MattiService_ConnectMatrixRequest,
    requestDeserialize: deserialize_MattiService_ConnectMatrixRequest,
    responseSerialize: serialize_MattiService_ConnectMatrixResponse,
    responseDeserialize: deserialize_MattiService_ConnectMatrixResponse,
  },
  editMatrix: {
    path: '/MattiService.Matti/editMatrix',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.EditMatrixRequest,
    responseType: matrix_pb.EditMatrixResponse,
    requestSerialize: serialize_MattiService_EditMatrixRequest,
    requestDeserialize: deserialize_MattiService_EditMatrixRequest,
    responseSerialize: serialize_MattiService_EditMatrixResponse,
    responseDeserialize: deserialize_MattiService_EditMatrixResponse,
  },
  removeMatrix: {
    path: '/MattiService.Matti/removeMatrix',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.RemoveMatrixRequest,
    responseType: matrix_pb.RemoveMatrixResponse,
    requestSerialize: serialize_MattiService_RemoveMatrixRequest,
    requestDeserialize: deserialize_MattiService_RemoveMatrixRequest,
    responseSerialize: serialize_MattiService_RemoveMatrixResponse,
    responseDeserialize: deserialize_MattiService_RemoveMatrixResponse,
  },
  editConPort: {
    path: '/MattiService.Matti/editConPort',
    requestStream: false,
    responseStream: false,
    requestType: con_port_pb.EditConPortRequest,
    responseType: con_port_pb.EditConPortResponse,
    requestSerialize: serialize_MattiService_EditConPortRequest,
    requestDeserialize: deserialize_MattiService_EditConPortRequest,
    responseSerialize: serialize_MattiService_EditConPortResponse,
    responseDeserialize: deserialize_MattiService_EditConPortResponse,
  },
  editCpuPort: {
    path: '/MattiService.Matti/editCpuPort',
    requestStream: false,
    responseStream: false,
    requestType: cpu_port_pb.EditCpuPortRequest,
    responseType: cpu_port_pb.EditCpuPortResponse,
    requestSerialize: serialize_MattiService_EditCpuPortRequest,
    requestDeserialize: deserialize_MattiService_EditCpuPortRequest,
    responseSerialize: serialize_MattiService_EditCpuPortResponse,
    responseDeserialize: deserialize_MattiService_EditCpuPortResponse,
  },
  // Defaulstate queries
  fetchDefaultStates: {
    path: '/MattiService.Matti/fetchDefaultStates',
    requestStream: false,
    responseStream: true,
    requestType: default_state_pb.FetchDefaultStatesRequest,
    responseType: default_state_pb.DefaultState,
    requestSerialize: serialize_MattiService_FetchDefaultStatesRequest,
    requestDeserialize: deserialize_MattiService_FetchDefaultStatesRequest,
    responseSerialize: serialize_MattiService_DefaultState,
    responseDeserialize: deserialize_MattiService_DefaultState,
  },
  fetchDefaultStateById: {
    path: '/MattiService.Matti/fetchDefaultStateById',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.FetchDefaultStateByIdRequest,
    responseType: default_state_pb.FetchDefaultStateByIdResponse,
    requestSerialize: serialize_MattiService_FetchDefaultStateByIdRequest,
    requestDeserialize: deserialize_MattiService_FetchDefaultStateByIdRequest,
    responseSerialize: serialize_MattiService_FetchDefaultStateByIdResponse,
    responseDeserialize: deserialize_MattiService_FetchDefaultStateByIdResponse,
  },
  fetchDefaultStateBySlug: {
    path: '/MattiService.Matti/fetchDefaultStateBySlug',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.FetchDefaultStateBySlugRequest,
    responseType: default_state_pb.FetchDefaultStateBySlugResponse,
    requestSerialize: serialize_MattiService_FetchDefaultStateBySlugRequest,
    requestDeserialize: deserialize_MattiService_FetchDefaultStateBySlugRequest,
    responseSerialize: serialize_MattiService_FetchDefaultStateBySlugResponse,
    responseDeserialize: deserialize_MattiService_FetchDefaultStateBySlugResponse,
  },
  // Defaultstate mutations
  createDefaultState: {
    path: '/MattiService.Matti/createDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.CreateDefaultStateRequest,
    responseType: default_state_pb.CreateDefaultStateResponse,
    requestSerialize: serialize_MattiService_CreateDefaultStateRequest,
    requestDeserialize: deserialize_MattiService_CreateDefaultStateRequest,
    responseSerialize: serialize_MattiService_CreateDefaultStateResponse,
    responseDeserialize: deserialize_MattiService_CreateDefaultStateResponse,
  },
  editDefaultState: {
    path: '/MattiService.Matti/editDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.EditDefaultStateRequest,
    responseType: default_state_pb.EditDefaultStateResponse,
    requestSerialize: serialize_MattiService_EditDefaultStateRequest,
    requestDeserialize: deserialize_MattiService_EditDefaultStateRequest,
    responseSerialize: serialize_MattiService_EditDefaultStateResponse,
    responseDeserialize: deserialize_MattiService_EditDefaultStateResponse,
  },
  removeDefaultState: {
    path: '/MattiService.Matti/removeDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.RemoveDefaultStateRequest,
    responseType: default_state_pb.RemoveDefaultStateResponse,
    requestSerialize: serialize_MattiService_RemoveDefaultStateRequest,
    requestDeserialize: deserialize_MattiService_RemoveDefaultStateRequest,
    responseSerialize: serialize_MattiService_RemoveDefaultStateResponse,
    responseDeserialize: deserialize_MattiService_RemoveDefaultStateResponse,
  },
  insertVideoConnectionToDefaultState: {
    path: '/MattiService.Matti/insertVideoConnectionToDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.InsertVideoConnectionToDefaultStateRequest,
    responseType: default_state_pb.InsertVideoConnectionToDefaultStateResponse,
    requestSerialize: serialize_MattiService_InsertVideoConnectionToDefaultStateRequest,
    requestDeserialize: deserialize_MattiService_InsertVideoConnectionToDefaultStateRequest,
    responseSerialize: serialize_MattiService_InsertVideoConnectionToDefaultStateResponse,
    responseDeserialize: deserialize_MattiService_InsertVideoConnectionToDefaultStateResponse,
  },
  insertKvmConnectionToDefaultState: {
    path: '/MattiService.Matti/insertKvmConnectionToDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.InsertKvmConnectionToDefaultStateRequest,
    responseType: default_state_pb.InsertKvmConnectionToDefaultStateResponse,
    requestSerialize: serialize_MattiService_InsertKvmConnectionToDefaultStateRequest,
    requestDeserialize: deserialize_MattiService_InsertKvmConnectionToDefaultStateRequest,
    responseSerialize: serialize_MattiService_InsertKvmConnectionToDefaultStateResponse,
    responseDeserialize: deserialize_MattiService_InsertKvmConnectionToDefaultStateResponse,
  },
  removeVideoConnectionFromDefaultState: {
    path: '/MattiService.Matti/removeVideoConnectionFromDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_video_connection_pb.RemoveVideoConnectionFromDefaultStateRequest,
    responseType: default_state_video_connection_pb.RemoveVideoConnectionFromDefaultStateResponse,
    requestSerialize: serialize_MattiService_RemoveVideoConnectionFromDefaultStateRequest,
    requestDeserialize: deserialize_MattiService_RemoveVideoConnectionFromDefaultStateRequest,
    responseSerialize: serialize_MattiService_RemoveVideoConnectionFromDefaultStateResponse,
    responseDeserialize: deserialize_MattiService_RemoveVideoConnectionFromDefaultStateResponse,
  },
  removeKvmConnectionFromDefaultState: {
    path: '/MattiService.Matti/removeKvmConnectionFromDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_kvm_connection_pb.RemoveKvmConnectionFromDefaultStateRequest,
    responseType: default_state_kvm_connection_pb.RemoveKvmConnectionFromDefaultStateResponse,
    requestSerialize: serialize_MattiService_RemoveKvmConnectionFromDefaultStateRequest,
    requestDeserialize: deserialize_MattiService_RemoveKvmConnectionFromDefaultStateRequest,
    responseSerialize: serialize_MattiService_RemoveKvmConnectionFromDefaultStateResponse,
    responseDeserialize: deserialize_MattiService_RemoveKvmConnectionFromDefaultStateResponse,
  },
  executeDefaultState: {
    path: '/MattiService.Matti/executeDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.ExecuteDefaultStateRequest,
    responseType: default_state_pb.ExecuteDefaultStateResponse,
    requestSerialize: serialize_MattiService_ExecuteDefaultStateRequest,
    requestDeserialize: deserialize_MattiService_ExecuteDefaultStateRequest,
    responseSerialize: serialize_MattiService_ExecuteDefaultStateResponse,
    responseDeserialize: deserialize_MattiService_ExecuteDefaultStateResponse,
  },
  // Diagram queries
  fetchDiagrams: {
    path: '/MattiService.Matti/fetchDiagrams',
    requestStream: false,
    responseStream: true,
    requestType: diagram_pb.FetchDiagramsRequest,
    responseType: diagram_pb.Diagram,
    requestSerialize: serialize_MattiService_FetchDiagramsRequest,
    requestDeserialize: deserialize_MattiService_FetchDiagramsRequest,
    responseSerialize: serialize_MattiService_Diagram,
    responseDeserialize: deserialize_MattiService_Diagram,
  },
  fetchDiagramById: {
    path: '/MattiService.Matti/fetchDiagramById',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.FetchDiagramByIdRequest,
    responseType: diagram_pb.FetchDiagramByIdResponse,
    requestSerialize: serialize_MattiService_FetchDiagramByIdRequest,
    requestDeserialize: deserialize_MattiService_FetchDiagramByIdRequest,
    responseSerialize: serialize_MattiService_FetchDiagramByIdResponse,
    responseDeserialize: deserialize_MattiService_FetchDiagramByIdResponse,
  },
  fetchDiagramBySlug: {
    path: '/MattiService.Matti/fetchDiagramBySlug',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.FetchDiagramBySlugRequest,
    responseType: diagram_pb.FetchDiagramBySlugResponse,
    requestSerialize: serialize_MattiService_FetchDiagramBySlugRequest,
    requestDeserialize: deserialize_MattiService_FetchDiagramBySlugRequest,
    responseSerialize: serialize_MattiService_FetchDiagramBySlugResponse,
    responseDeserialize: deserialize_MattiService_FetchDiagramBySlugResponse,
  },
  fetchDiagramScreensByDiagramId: {
    path: '/MattiService.Matti/fetchDiagramScreensByDiagramId',
    requestStream: false,
    responseStream: true,
    requestType: diagram_pb.FetchDiagramScreensByDiagramIdRequest,
    responseType: diagram_screen_pb.DiagramScreen,
    requestSerialize: serialize_MattiService_FetchDiagramScreensByDiagramIdRequest,
    requestDeserialize: deserialize_MattiService_FetchDiagramScreensByDiagramIdRequest,
    responseSerialize: serialize_MattiService_DiagramScreen,
    responseDeserialize: deserialize_MattiService_DiagramScreen,
  },
  // Diagram mutations
  createDiagram: {
    path: '/MattiService.Matti/createDiagram',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.CreateDiagramRequest,
    responseType: diagram_pb.CreateDiagramResponse,
    requestSerialize: serialize_MattiService_CreateDiagramRequest,
    requestDeserialize: deserialize_MattiService_CreateDiagramRequest,
    responseSerialize: serialize_MattiService_CreateDiagramResponse,
    responseDeserialize: deserialize_MattiService_CreateDiagramResponse,
  },
  editDiagram: {
    path: '/MattiService.Matti/editDiagram',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.EditDiagramRequest,
    responseType: diagram_pb.EditDiagramResponse,
    requestSerialize: serialize_MattiService_EditDiagramRequest,
    requestDeserialize: deserialize_MattiService_EditDiagramRequest,
    responseSerialize: serialize_MattiService_EditDiagramResponse,
    responseDeserialize: deserialize_MattiService_EditDiagramResponse,
  },
  removeDiagram: {
    path: '/MattiService.Matti/removeDiagram',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.RemoveDiagramRequest,
    responseType: diagram_pb.RemoveDiagramResponse,
    requestSerialize: serialize_MattiService_RemoveDiagramRequest,
    requestDeserialize: deserialize_MattiService_RemoveDiagramRequest,
    responseSerialize: serialize_MattiService_RemoveDiagramResponse,
    responseDeserialize: deserialize_MattiService_RemoveDiagramResponse,
  },
  // DiagramScreen queries
  fetchDiagramScreens: {
    path: '/MattiService.Matti/fetchDiagramScreens',
    requestStream: false,
    responseStream: true,
    requestType: diagram_screen_pb.FetchDiagramScreensRequest,
    responseType: diagram_screen_pb.DiagramScreen,
    requestSerialize: serialize_MattiService_FetchDiagramScreensRequest,
    requestDeserialize: deserialize_MattiService_FetchDiagramScreensRequest,
    responseSerialize: serialize_MattiService_DiagramScreen,
    responseDeserialize: deserialize_MattiService_DiagramScreen,
  },
  fetchDiagramScreenById: {
    path: '/MattiService.Matti/fetchDiagramScreenById',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.FetchDiagramScreenByIdRequest,
    responseType: diagram_screen_pb.FetchDiagramScreenByIdResponse,
    requestSerialize: serialize_MattiService_FetchDiagramScreenByIdRequest,
    requestDeserialize: deserialize_MattiService_FetchDiagramScreenByIdRequest,
    responseSerialize: serialize_MattiService_FetchDiagramScreenByIdResponse,
    responseDeserialize: deserialize_MattiService_FetchDiagramScreenByIdResponse,
  },
  fetchDiagramScreenBySlug: {
    path: '/MattiService.Matti/fetchDiagramScreenBySlug',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.FetchDiagramScreenBySlugRequest,
    responseType: diagram_screen_pb.FetchDiagramScreenBySlugResponse,
    requestSerialize: serialize_MattiService_FetchDiagramScreenBySlugRequest,
    requestDeserialize: deserialize_MattiService_FetchDiagramScreenBySlugRequest,
    responseSerialize: serialize_MattiService_FetchDiagramScreenBySlugResponse,
    responseDeserialize: deserialize_MattiService_FetchDiagramScreenBySlugResponse,
  },
  // DiagramScreen mutations
  createDiagramScreen: {
    path: '/MattiService.Matti/createDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.CreateDiagramScreenRequest,
    responseType: diagram_screen_pb.CreateDiagramScreenResponse,
    requestSerialize: serialize_MattiService_CreateDiagramScreenRequest,
    requestDeserialize: deserialize_MattiService_CreateDiagramScreenRequest,
    responseSerialize: serialize_MattiService_CreateDiagramScreenResponse,
    responseDeserialize: deserialize_MattiService_CreateDiagramScreenResponse,
  },
  removeDiagramScreen: {
    path: '/MattiService.Matti/removeDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.RemoveDiagramScreenRequest,
    responseType: diagram_screen_pb.RemoveDiagramScreenResponse,
    requestSerialize: serialize_MattiService_RemoveDiagramScreenRequest,
    requestDeserialize: deserialize_MattiService_RemoveDiagramScreenRequest,
    responseSerialize: serialize_MattiService_RemoveDiagramScreenResponse,
    responseDeserialize: deserialize_MattiService_RemoveDiagramScreenResponse,
  },
  editDiagramScreen: {
    path: '/MattiService.Matti/editDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.EditDiagramScreenRequest,
    responseType: diagram_screen_pb.EditDiagramScreenResponse,
    requestSerialize: serialize_MattiService_EditDiagramScreenRequest,
    requestDeserialize: deserialize_MattiService_EditDiagramScreenRequest,
    responseSerialize: serialize_MattiService_EditDiagramScreenResponse,
    responseDeserialize: deserialize_MattiService_EditDiagramScreenResponse,
  },
  addCpuToDiagramScreen: {
    path: '/MattiService.Matti/addCpuToDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.AddCpuToDiagramScreenRequest,
    responseType: diagram_screen_pb.AddCpuToDiagramScreenResponse,
    requestSerialize: serialize_MattiService_AddCpuToDiagramScreenRequest,
    requestDeserialize: deserialize_MattiService_AddCpuToDiagramScreenRequest,
    responseSerialize: serialize_MattiService_AddCpuToDiagramScreenResponse,
    responseDeserialize: deserialize_MattiService_AddCpuToDiagramScreenResponse,
  },
  removeCpuFromDiagramScreen: {
    path: '/MattiService.Matti/removeCpuFromDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_cpu_port_pb.RemoveCpuFromDiagramScreenRequest,
    responseType: diagram_screen_cpu_port_pb.RemoveCpuFromDiagramScreenResponse,
    requestSerialize: serialize_MattiService_RemoveCpuFromDiagramScreenRequest,
    requestDeserialize: deserialize_MattiService_RemoveCpuFromDiagramScreenRequest,
    responseSerialize: serialize_MattiService_RemoveCpuFromDiagramScreenResponse,
    responseDeserialize: deserialize_MattiService_RemoveCpuFromDiagramScreenResponse,
  },
};

exports.MattiClient = grpc.makeGenericClientConstructor(MattiService);
