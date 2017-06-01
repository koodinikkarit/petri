// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var weekly_timer_pb = require('./weekly_timer_pb.js');
var pentti_pb = require('./pentti_pb.js');
var button_pb = require('./button_pb.js');
var executor_pb = require('./executor_pb.js');
var executor_action_pb = require('./executor_action_pb.js');
var event_timer_pb = require('./event_timer_pb.js');

function serialize_PekkaService_AddExecutorActionToExecutorRequest(arg) {
  if (!(arg instanceof executor_action_pb.AddExecutorActionToExecutorRequest)) {
    throw new Error('Expected argument of type PekkaService.AddExecutorActionToExecutorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_AddExecutorActionToExecutorRequest(buffer_arg) {
  return executor_action_pb.AddExecutorActionToExecutorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_AddExecutorActionToExecutorResponse(arg) {
  if (!(arg instanceof executor_action_pb.AddExecutorActionToExecutorResponse)) {
    throw new Error('Expected argument of type PekkaService.AddExecutorActionToExecutorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_AddExecutorActionToExecutorResponse(buffer_arg) {
  return executor_action_pb.AddExecutorActionToExecutorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_Button(arg) {
  if (!(arg instanceof button_pb.Button)) {
    throw new Error('Expected argument of type PekkaService.Button');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_Button(buffer_arg) {
  return button_pb.Button.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_CreateExecutorRequest(arg) {
  if (!(arg instanceof executor_pb.CreateExecutorRequest)) {
    throw new Error('Expected argument of type PekkaService.CreateExecutorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_CreateExecutorRequest(buffer_arg) {
  return executor_pb.CreateExecutorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_CreateExecutorResponse(arg) {
  if (!(arg instanceof executor_pb.CreateExecutorResponse)) {
    throw new Error('Expected argument of type PekkaService.CreateExecutorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_CreateExecutorResponse(buffer_arg) {
  return executor_pb.CreateExecutorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_CreateWeeklyTimerRequest(arg) {
  if (!(arg instanceof weekly_timer_pb.CreateWeeklyTimerRequest)) {
    throw new Error('Expected argument of type PekkaService.CreateWeeklyTimerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_CreateWeeklyTimerRequest(buffer_arg) {
  return weekly_timer_pb.CreateWeeklyTimerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_CreateWeeklyTimerResponse(arg) {
  if (!(arg instanceof weekly_timer_pb.CreateWeeklyTimerResponse)) {
    throw new Error('Expected argument of type PekkaService.CreateWeeklyTimerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_CreateWeeklyTimerResponse(buffer_arg) {
  return weekly_timer_pb.CreateWeeklyTimerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_EditButtonRequest(arg) {
  if (!(arg instanceof button_pb.EditButtonRequest)) {
    throw new Error('Expected argument of type PekkaService.EditButtonRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_EditButtonRequest(buffer_arg) {
  return button_pb.EditButtonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_EditButtonResponse(arg) {
  if (!(arg instanceof button_pb.EditButtonResponse)) {
    throw new Error('Expected argument of type PekkaService.EditButtonResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_EditButtonResponse(buffer_arg) {
  return button_pb.EditButtonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_EditWeeklyTimerRequest(arg) {
  if (!(arg instanceof weekly_timer_pb.EditWeeklyTimerRequest)) {
    throw new Error('Expected argument of type PekkaService.EditWeeklyTimerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_EditWeeklyTimerRequest(buffer_arg) {
  return weekly_timer_pb.EditWeeklyTimerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_EditWeeklyTimerResponse(arg) {
  if (!(arg instanceof weekly_timer_pb.EditWeeklyTimerResponse)) {
    throw new Error('Expected argument of type PekkaService.EditWeeklyTimerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_EditWeeklyTimerResponse(buffer_arg) {
  return weekly_timer_pb.EditWeeklyTimerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_Executor(arg) {
  if (!(arg instanceof executor_pb.Executor)) {
    throw new Error('Expected argument of type PekkaService.Executor');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_Executor(buffer_arg) {
  return executor_pb.Executor.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_ExecutorAction(arg) {
  if (!(arg instanceof executor_action_pb.ExecutorAction)) {
    throw new Error('Expected argument of type PekkaService.ExecutorAction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_ExecutorAction(buffer_arg) {
  return executor_action_pb.ExecutorAction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchButtonsByPenttiIdRequest(arg) {
  if (!(arg instanceof pentti_pb.FetchButtonsByPenttiIdRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchButtonsByPenttiIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchButtonsByPenttiIdRequest(buffer_arg) {
  return pentti_pb.FetchButtonsByPenttiIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchExecutorActionsByExecutorIdRequest(arg) {
  if (!(arg instanceof executor_pb.FetchExecutorActionsByExecutorIdRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchExecutorActionsByExecutorIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchExecutorActionsByExecutorIdRequest(buffer_arg) {
  return executor_pb.FetchExecutorActionsByExecutorIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchExecutorByIdRequest(arg) {
  if (!(arg instanceof executor_pb.FetchExecutorByIdRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchExecutorByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchExecutorByIdRequest(buffer_arg) {
  return executor_pb.FetchExecutorByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchExecutorByIdResponse(arg) {
  if (!(arg instanceof executor_pb.FetchExecutorByIdResponse)) {
    throw new Error('Expected argument of type PekkaService.FetchExecutorByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchExecutorByIdResponse(buffer_arg) {
  return executor_pb.FetchExecutorByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchExecutorsRequest(arg) {
  if (!(arg instanceof executor_pb.FetchExecutorsRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchExecutorsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchExecutorsRequest(buffer_arg) {
  return executor_pb.FetchExecutorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchPenttiByIdRequest(arg) {
  if (!(arg instanceof pentti_pb.FetchPenttiByIdRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchPenttiByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchPenttiByIdRequest(buffer_arg) {
  return pentti_pb.FetchPenttiByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchPenttiByIdResponse(arg) {
  if (!(arg instanceof pentti_pb.FetchPenttiByIdResponse)) {
    throw new Error('Expected argument of type PekkaService.FetchPenttiByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchPenttiByIdResponse(buffer_arg) {
  return pentti_pb.FetchPenttiByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchPenttiDevicesRequest(arg) {
  if (!(arg instanceof pentti_pb.FetchPenttiDevicesRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchPenttiDevicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchPenttiDevicesRequest(buffer_arg) {
  return pentti_pb.FetchPenttiDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchWeeklyTimerByIdRequest(arg) {
  if (!(arg instanceof weekly_timer_pb.FetchWeeklyTimerByIdRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchWeeklyTimerByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchWeeklyTimerByIdRequest(buffer_arg) {
  return weekly_timer_pb.FetchWeeklyTimerByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchWeeklyTimerByIdResponse(arg) {
  if (!(arg instanceof weekly_timer_pb.FetchWeeklyTimerByIdResponse)) {
    throw new Error('Expected argument of type PekkaService.FetchWeeklyTimerByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchWeeklyTimerByIdResponse(buffer_arg) {
  return weekly_timer_pb.FetchWeeklyTimerByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchWeeklyTimerBySlugRequest(arg) {
  if (!(arg instanceof weekly_timer_pb.FetchWeeklyTimerBySlugRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchWeeklyTimerBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchWeeklyTimerBySlugRequest(buffer_arg) {
  return weekly_timer_pb.FetchWeeklyTimerBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchWeeklyTimerBySlugResponse(arg) {
  if (!(arg instanceof weekly_timer_pb.FetchWeeklyTimerBySlugResponse)) {
    throw new Error('Expected argument of type PekkaService.FetchWeeklyTimerBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchWeeklyTimerBySlugResponse(buffer_arg) {
  return weekly_timer_pb.FetchWeeklyTimerBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_FetchWeeklyTimersRequest(arg) {
  if (!(arg instanceof weekly_timer_pb.FetchWeeklyTimersRequest)) {
    throw new Error('Expected argument of type PekkaService.FetchWeeklyTimersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_FetchWeeklyTimersRequest(buffer_arg) {
  return weekly_timer_pb.FetchWeeklyTimersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_Pentti(arg) {
  if (!(arg instanceof pentti_pb.Pentti)) {
    throw new Error('Expected argument of type PekkaService.Pentti');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_Pentti(buffer_arg) {
  return pentti_pb.Pentti.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PekkaService_WeeklyTimer(arg) {
  if (!(arg instanceof weekly_timer_pb.WeeklyTimer)) {
    throw new Error('Expected argument of type PekkaService.WeeklyTimer');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PekkaService_WeeklyTimer(buffer_arg) {
  return weekly_timer_pb.WeeklyTimer.deserializeBinary(new Uint8Array(buffer_arg));
}


var PekkaService = exports.PekkaService = {
  fetchWeeklyTimers: {
    path: '/PekkaService.Pekka/fetchWeeklyTimers',
    requestStream: false,
    responseStream: true,
    requestType: weekly_timer_pb.FetchWeeklyTimersRequest,
    responseType: weekly_timer_pb.WeeklyTimer,
    requestSerialize: serialize_PekkaService_FetchWeeklyTimersRequest,
    requestDeserialize: deserialize_PekkaService_FetchWeeklyTimersRequest,
    responseSerialize: serialize_PekkaService_WeeklyTimer,
    responseDeserialize: deserialize_PekkaService_WeeklyTimer,
  },
  fetchWeeklyTimerById: {
    path: '/PekkaService.Pekka/fetchWeeklyTimerById',
    requestStream: false,
    responseStream: false,
    requestType: weekly_timer_pb.FetchWeeklyTimerByIdRequest,
    responseType: weekly_timer_pb.FetchWeeklyTimerByIdResponse,
    requestSerialize: serialize_PekkaService_FetchWeeklyTimerByIdRequest,
    requestDeserialize: deserialize_PekkaService_FetchWeeklyTimerByIdRequest,
    responseSerialize: serialize_PekkaService_FetchWeeklyTimerByIdResponse,
    responseDeserialize: deserialize_PekkaService_FetchWeeklyTimerByIdResponse,
  },
  fetchWeeklyTimerBySlug: {
    path: '/PekkaService.Pekka/fetchWeeklyTimerBySlug',
    requestStream: false,
    responseStream: false,
    requestType: weekly_timer_pb.FetchWeeklyTimerBySlugRequest,
    responseType: weekly_timer_pb.FetchWeeklyTimerBySlugResponse,
    requestSerialize: serialize_PekkaService_FetchWeeklyTimerBySlugRequest,
    requestDeserialize: deserialize_PekkaService_FetchWeeklyTimerBySlugRequest,
    responseSerialize: serialize_PekkaService_FetchWeeklyTimerBySlugResponse,
    responseDeserialize: deserialize_PekkaService_FetchWeeklyTimerBySlugResponse,
  },
  createWeeklyTimer: {
    path: '/PekkaService.Pekka/createWeeklyTimer',
    requestStream: false,
    responseStream: false,
    requestType: weekly_timer_pb.CreateWeeklyTimerRequest,
    responseType: weekly_timer_pb.CreateWeeklyTimerResponse,
    requestSerialize: serialize_PekkaService_CreateWeeklyTimerRequest,
    requestDeserialize: deserialize_PekkaService_CreateWeeklyTimerRequest,
    responseSerialize: serialize_PekkaService_CreateWeeklyTimerResponse,
    responseDeserialize: deserialize_PekkaService_CreateWeeklyTimerResponse,
  },
  editWeeklyTimer: {
    path: '/PekkaService.Pekka/editWeeklyTimer',
    requestStream: false,
    responseStream: false,
    requestType: weekly_timer_pb.EditWeeklyTimerRequest,
    responseType: weekly_timer_pb.EditWeeklyTimerResponse,
    requestSerialize: serialize_PekkaService_EditWeeklyTimerRequest,
    requestDeserialize: deserialize_PekkaService_EditWeeklyTimerRequest,
    responseSerialize: serialize_PekkaService_EditWeeklyTimerResponse,
    responseDeserialize: deserialize_PekkaService_EditWeeklyTimerResponse,
  },
  fetchExecutors: {
    path: '/PekkaService.Pekka/fetchExecutors',
    requestStream: false,
    responseStream: true,
    requestType: executor_pb.FetchExecutorsRequest,
    responseType: executor_pb.Executor,
    requestSerialize: serialize_PekkaService_FetchExecutorsRequest,
    requestDeserialize: deserialize_PekkaService_FetchExecutorsRequest,
    responseSerialize: serialize_PekkaService_Executor,
    responseDeserialize: deserialize_PekkaService_Executor,
  },
  fetchExecutorById: {
    path: '/PekkaService.Pekka/fetchExecutorById',
    requestStream: false,
    responseStream: false,
    requestType: executor_pb.FetchExecutorByIdRequest,
    responseType: executor_pb.FetchExecutorByIdResponse,
    requestSerialize: serialize_PekkaService_FetchExecutorByIdRequest,
    requestDeserialize: deserialize_PekkaService_FetchExecutorByIdRequest,
    responseSerialize: serialize_PekkaService_FetchExecutorByIdResponse,
    responseDeserialize: deserialize_PekkaService_FetchExecutorByIdResponse,
  },
  fetchExecutorActionsByExecutorId: {
    path: '/PekkaService.Pekka/fetchExecutorActionsByExecutorId',
    requestStream: false,
    responseStream: true,
    requestType: executor_pb.FetchExecutorActionsByExecutorIdRequest,
    responseType: executor_action_pb.ExecutorAction,
    requestSerialize: serialize_PekkaService_FetchExecutorActionsByExecutorIdRequest,
    requestDeserialize: deserialize_PekkaService_FetchExecutorActionsByExecutorIdRequest,
    responseSerialize: serialize_PekkaService_ExecutorAction,
    responseDeserialize: deserialize_PekkaService_ExecutorAction,
  },
  createExecutor: {
    path: '/PekkaService.Pekka/createExecutor',
    requestStream: false,
    responseStream: false,
    requestType: executor_pb.CreateExecutorRequest,
    responseType: executor_pb.CreateExecutorResponse,
    requestSerialize: serialize_PekkaService_CreateExecutorRequest,
    requestDeserialize: deserialize_PekkaService_CreateExecutorRequest,
    responseSerialize: serialize_PekkaService_CreateExecutorResponse,
    responseDeserialize: deserialize_PekkaService_CreateExecutorResponse,
  },
  addExecutorActionToExecutor: {
    path: '/PekkaService.Pekka/addExecutorActionToExecutor',
    requestStream: false,
    responseStream: false,
    requestType: executor_action_pb.AddExecutorActionToExecutorRequest,
    responseType: executor_action_pb.AddExecutorActionToExecutorResponse,
    requestSerialize: serialize_PekkaService_AddExecutorActionToExecutorRequest,
    requestDeserialize: deserialize_PekkaService_AddExecutorActionToExecutorRequest,
    responseSerialize: serialize_PekkaService_AddExecutorActionToExecutorResponse,
    responseDeserialize: deserialize_PekkaService_AddExecutorActionToExecutorResponse,
  },
  editButton: {
    path: '/PekkaService.Pekka/editButton',
    requestStream: false,
    responseStream: false,
    requestType: button_pb.EditButtonRequest,
    responseType: button_pb.EditButtonResponse,
    requestSerialize: serialize_PekkaService_EditButtonRequest,
    requestDeserialize: deserialize_PekkaService_EditButtonRequest,
    responseSerialize: serialize_PekkaService_EditButtonResponse,
    responseDeserialize: deserialize_PekkaService_EditButtonResponse,
  },
  fetchPenttiDevices: {
    path: '/PekkaService.Pekka/fetchPenttiDevices',
    requestStream: false,
    responseStream: true,
    requestType: pentti_pb.FetchPenttiDevicesRequest,
    responseType: pentti_pb.Pentti,
    requestSerialize: serialize_PekkaService_FetchPenttiDevicesRequest,
    requestDeserialize: deserialize_PekkaService_FetchPenttiDevicesRequest,
    responseSerialize: serialize_PekkaService_Pentti,
    responseDeserialize: deserialize_PekkaService_Pentti,
  },
  fetchPenttiById: {
    path: '/PekkaService.Pekka/fetchPenttiById',
    requestStream: false,
    responseStream: false,
    requestType: pentti_pb.FetchPenttiByIdRequest,
    responseType: pentti_pb.FetchPenttiByIdResponse,
    requestSerialize: serialize_PekkaService_FetchPenttiByIdRequest,
    requestDeserialize: deserialize_PekkaService_FetchPenttiByIdRequest,
    responseSerialize: serialize_PekkaService_FetchPenttiByIdResponse,
    responseDeserialize: deserialize_PekkaService_FetchPenttiByIdResponse,
  },
  fetchButtonsByPenttiId: {
    path: '/PekkaService.Pekka/fetchButtonsByPenttiId',
    requestStream: false,
    responseStream: true,
    requestType: pentti_pb.FetchButtonsByPenttiIdRequest,
    responseType: button_pb.Button,
    requestSerialize: serialize_PekkaService_FetchButtonsByPenttiIdRequest,
    requestDeserialize: deserialize_PekkaService_FetchButtonsByPenttiIdRequest,
    responseSerialize: serialize_PekkaService_Button,
    responseDeserialize: deserialize_PekkaService_Button,
  },
};

exports.PekkaClient = grpc.makeGenericClientConstructor(PekkaService);
