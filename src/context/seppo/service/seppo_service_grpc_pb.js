// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var song_database_pb = require('./song_database_pb.js');
var ew_database_pb = require('./ew_database_pb.js');
var ew_song_pb = require('./ew_song_pb.js');
var ew_verse_pb = require('./ew_verse_pb.js');
var variation_pb = require('./variation_pb.js');

function serialize_SeppoService_CreateVariationRequest(arg) {
  if (!(arg instanceof variation_pb.CreateVariationRequest)) {
    throw new Error('Expected argument of type SeppoService.CreateVariationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateVariationRequest(buffer_arg) {
  return variation_pb.CreateVariationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateVariationResponse(arg) {
  if (!(arg instanceof variation_pb.CreateVariationResponse)) {
    throw new Error('Expected argument of type SeppoService.CreateVariationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateVariationResponse(buffer_arg) {
  return variation_pb.CreateVariationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_EditVariationRequest(arg) {
  if (!(arg instanceof variation_pb.EditVariationRequest)) {
    throw new Error('Expected argument of type SeppoService.EditVariationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditVariationRequest(buffer_arg) {
  return variation_pb.EditVariationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_EditVariationResponse(arg) {
  if (!(arg instanceof variation_pb.EditVariationResponse)) {
    throw new Error('Expected argument of type SeppoService.EditVariationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditVariationResponse(buffer_arg) {
  return variation_pb.EditVariationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_EwSong(arg) {
  if (!(arg instanceof ew_song_pb.EwSong)) {
    throw new Error('Expected argument of type SeppoService.EwSong');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EwSong(buffer_arg) {
  return ew_song_pb.EwSong.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchVariationByIdRequest(arg) {
  if (!(arg instanceof variation_pb.FetchVariationByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationByIdRequest(buffer_arg) {
  return variation_pb.FetchVariationByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchVariationByIdResponse(arg) {
  if (!(arg instanceof variation_pb.FetchVariationByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationByIdResponse(buffer_arg) {
  return variation_pb.FetchVariationByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_ListenForChangedEwSongRequest(arg) {
  if (!(arg instanceof ew_database_pb.ListenForChangedEwSongRequest)) {
    throw new Error('Expected argument of type SeppoService.ListenForChangedEwSongRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_ListenForChangedEwSongRequest(buffer_arg) {
  return ew_database_pb.ListenForChangedEwSongRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchVariationsRequest(arg) {
  if (!(arg instanceof variation_pb.SearchVariationsRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchVariationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchVariationsRequest(buffer_arg) {
  return variation_pb.SearchVariationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchVariationsResponse(arg) {
  if (!(arg instanceof variation_pb.SearchVariationsResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchVariationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchVariationsResponse(buffer_arg) {
  return variation_pb.SearchVariationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SyncEwDatabaseRequest(arg) {
  if (!(arg instanceof ew_database_pb.SyncEwDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.SyncEwDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SyncEwDatabaseRequest(buffer_arg) {
  return ew_database_pb.SyncEwDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SyncEwDatabaseResponse(arg) {
  if (!(arg instanceof ew_database_pb.SyncEwDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.SyncEwDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SyncEwDatabaseResponse(buffer_arg) {
  return ew_database_pb.SyncEwDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SeppoService = exports.SeppoService = {
  // rpc fetchSongDatabases(FetchSongDatabasesRequest) returns (SongDatabasesConnection) {}
  // rpc fetchSongDatabaseById(FetchSongDatabaseByIdRequest) returns(FetchSongDatabaseByIdResponse) {}
  //
  fetchVariationById: {
    path: '/SeppoService.Seppo/fetchVariationById',
    requestStream: false,
    responseStream: false,
    requestType: variation_pb.FetchVariationByIdRequest,
    responseType: variation_pb.FetchVariationByIdResponse,
    requestSerialize: serialize_SeppoService_FetchVariationByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchVariationByIdRequest,
    responseSerialize: serialize_SeppoService_FetchVariationByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchVariationByIdResponse,
  },
  searchVariations: {
    path: '/SeppoService.Seppo/searchVariations',
    requestStream: false,
    responseStream: false,
    requestType: variation_pb.SearchVariationsRequest,
    responseType: variation_pb.SearchVariationsResponse,
    requestSerialize: serialize_SeppoService_SearchVariationsRequest,
    requestDeserialize: deserialize_SeppoService_SearchVariationsRequest,
    responseSerialize: serialize_SeppoService_SearchVariationsResponse,
    responseDeserialize: deserialize_SeppoService_SearchVariationsResponse,
  },
  listenForChangedEwSong: {
    path: '/SeppoService.Seppo/listenForChangedEwSong',
    requestStream: false,
    responseStream: true,
    requestType: ew_database_pb.ListenForChangedEwSongRequest,
    responseType: ew_song_pb.EwSong,
    requestSerialize: serialize_SeppoService_ListenForChangedEwSongRequest,
    requestDeserialize: deserialize_SeppoService_ListenForChangedEwSongRequest,
    responseSerialize: serialize_SeppoService_EwSong,
    responseDeserialize: deserialize_SeppoService_EwSong,
  },
  // Mutations
  //
  // rpc createSongDatabase(CreateSongDatabaseRequest) returns(CreateSongDatabaseResponse) {}
  // rpc editSongDatabase(EditSongDatabaseRequest) returns(EditSongDatabaseResponse) {}
  // rpc removeSongDatabase(RemoveSongDatabaseRequest) returns( RemoveSongDatabaseResponse) {}
  //
  createVariation: {
    path: '/SeppoService.Seppo/createVariation',
    requestStream: false,
    responseStream: false,
    requestType: variation_pb.CreateVariationRequest,
    responseType: variation_pb.CreateVariationResponse,
    requestSerialize: serialize_SeppoService_CreateVariationRequest,
    requestDeserialize: deserialize_SeppoService_CreateVariationRequest,
    responseSerialize: serialize_SeppoService_CreateVariationResponse,
    responseDeserialize: deserialize_SeppoService_CreateVariationResponse,
  },
  editVariation: {
    path: '/SeppoService.Seppo/editVariation',
    requestStream: false,
    responseStream: false,
    requestType: variation_pb.EditVariationRequest,
    responseType: variation_pb.EditVariationResponse,
    requestSerialize: serialize_SeppoService_EditVariationRequest,
    requestDeserialize: deserialize_SeppoService_EditVariationRequest,
    responseSerialize: serialize_SeppoService_EditVariationResponse,
    responseDeserialize: deserialize_SeppoService_EditVariationResponse,
  },
  syncEwDatabase: {
    path: '/SeppoService.Seppo/syncEwDatabase',
    requestStream: false,
    responseStream: false,
    requestType: ew_database_pb.SyncEwDatabaseRequest,
    responseType: ew_database_pb.SyncEwDatabaseResponse,
    requestSerialize: serialize_SeppoService_SyncEwDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_SyncEwDatabaseRequest,
    responseSerialize: serialize_SeppoService_SyncEwDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_SyncEwDatabaseResponse,
  },
};

exports.SeppoClient = grpc.makeGenericClientConstructor(SeppoService);
// Queries
