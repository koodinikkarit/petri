// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var song_database_pb = require('./song_database_pb.js');
var song_database_variation_pb = require('./song_database_variation_pb.js');
var ew_database_pb = require('./ew_database_pb.js');
var ew_song_pb = require('./ew_song_pb.js');
var ew_verse_pb = require('./ew_verse_pb.js');
var variation_pb = require('./variation_pb.js');

function serialize_SeppoService_AddVariationToSongDatabaseRequest(arg) {
  if (!(arg instanceof song_database_variation_pb.AddVariationToSongDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.AddVariationToSongDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_AddVariationToSongDatabaseRequest(buffer_arg) {
  return song_database_variation_pb.AddVariationToSongDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_AddVariationToSongDatabaseResponse(arg) {
  if (!(arg instanceof song_database_variation_pb.AddVariationToSongDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.AddVariationToSongDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_AddVariationToSongDatabaseResponse(buffer_arg) {
  return song_database_variation_pb.AddVariationToSongDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateEwDatabaseRequest(arg) {
  if (!(arg instanceof ew_database_pb.CreateEwDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.CreateEwDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateEwDatabaseRequest(buffer_arg) {
  return ew_database_pb.CreateEwDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateEwDatabaseResponse(arg) {
  if (!(arg instanceof ew_database_pb.CreateEwDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.CreateEwDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateEwDatabaseResponse(buffer_arg) {
  return ew_database_pb.CreateEwDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateSongDatabaseRequest(arg) {
  if (!(arg instanceof song_database_pb.CreateSongDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.CreateSongDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateSongDatabaseRequest(buffer_arg) {
  return song_database_pb.CreateSongDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateSongDatabaseResponse(arg) {
  if (!(arg instanceof song_database_pb.CreateSongDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.CreateSongDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateSongDatabaseResponse(buffer_arg) {
  return song_database_pb.CreateSongDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_SeppoService_EditSongDatabaseRequest(arg) {
  if (!(arg instanceof song_database_pb.EditSongDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.EditSongDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditSongDatabaseRequest(buffer_arg) {
  return song_database_pb.EditSongDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_EditSongDatabaseResponse(arg) {
  if (!(arg instanceof song_database_pb.EditSongDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.EditSongDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditSongDatabaseResponse(buffer_arg) {
  return song_database_pb.EditSongDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_EwDatabasesConnection(arg) {
  if (!(arg instanceof ew_database_pb.EwDatabasesConnection)) {
    throw new Error('Expected argument of type SeppoService.EwDatabasesConnection');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EwDatabasesConnection(buffer_arg) {
  return ew_database_pb.EwDatabasesConnection.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchEwDatabaseByIdRequest(arg) {
  if (!(arg instanceof ew_database_pb.FetchEwDatabaseByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchEwDatabaseByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchEwDatabaseByIdRequest(buffer_arg) {
  return ew_database_pb.FetchEwDatabaseByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchEwDatabaseByIdResponse(arg) {
  if (!(arg instanceof ew_database_pb.FetchEwDatabaseByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchEwDatabaseByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchEwDatabaseByIdResponse(buffer_arg) {
  return ew_database_pb.FetchEwDatabaseByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchEwDatabasesRequest(arg) {
  if (!(arg instanceof ew_database_pb.FetchEwDatabasesRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchEwDatabasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchEwDatabasesRequest(buffer_arg) {
  return ew_database_pb.FetchEwDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchSongDatabaseByIdRequest(arg) {
  if (!(arg instanceof song_database_pb.FetchSongDatabaseByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchSongDatabaseByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchSongDatabaseByIdRequest(buffer_arg) {
  return song_database_pb.FetchSongDatabaseByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchSongDatabaseByIdResponse(arg) {
  if (!(arg instanceof song_database_pb.FetchSongDatabaseByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchSongDatabaseByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchSongDatabaseByIdResponse(buffer_arg) {
  return song_database_pb.FetchSongDatabaseByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchSongDatabasesRequest(arg) {
  if (!(arg instanceof song_database_pb.FetchSongDatabasesRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchSongDatabasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchSongDatabasesRequest(buffer_arg) {
  return song_database_pb.FetchSongDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchVariationsBySongDatabaseIdRequest(arg) {
  if (!(arg instanceof song_database_variation_pb.FetchVariationsBySongDatabaseIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationsBySongDatabaseIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationsBySongDatabaseIdRequest(buffer_arg) {
  return song_database_variation_pb.FetchVariationsBySongDatabaseIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchVariationsBySongDatabaseIdResponse(arg) {
  if (!(arg instanceof song_database_variation_pb.FetchVariationsBySongDatabaseIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationsBySongDatabaseIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationsBySongDatabaseIdResponse(buffer_arg) {
  return song_database_variation_pb.FetchVariationsBySongDatabaseIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_RemoveEwDatabaseRequest(arg) {
  if (!(arg instanceof ew_database_pb.RemoveEwDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveEwDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveEwDatabaseRequest(buffer_arg) {
  return ew_database_pb.RemoveEwDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveEwDatabaseResponse(arg) {
  if (!(arg instanceof ew_database_pb.RemoveEwDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveEwDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveEwDatabaseResponse(buffer_arg) {
  return ew_database_pb.RemoveEwDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveSongDatabaseRequest(arg) {
  if (!(arg instanceof song_database_pb.RemoveSongDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveSongDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveSongDatabaseRequest(buffer_arg) {
  return song_database_pb.RemoveSongDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveSongDatabaseResponse(arg) {
  if (!(arg instanceof song_database_pb.RemoveSongDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveSongDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveSongDatabaseResponse(buffer_arg) {
  return song_database_pb.RemoveSongDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveVariationFromSongDatabaseRequest(arg) {
  if (!(arg instanceof song_database_variation_pb.RemoveVariationFromSongDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveVariationFromSongDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveVariationFromSongDatabaseRequest(buffer_arg) {
  return song_database_variation_pb.RemoveVariationFromSongDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveVariationFromSongDatabaseResponse(arg) {
  if (!(arg instanceof song_database_variation_pb.RemoveVariationFromSongDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveVariationFromSongDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveVariationFromSongDatabaseResponse(buffer_arg) {
  return song_database_variation_pb.RemoveVariationFromSongDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveVariationRequest(arg) {
  if (!(arg instanceof variation_pb.RemoveVariationRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveVariationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveVariationRequest(buffer_arg) {
  return variation_pb.RemoveVariationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveVariationResponse(arg) {
  if (!(arg instanceof variation_pb.RemoveVariationResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveVariationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveVariationResponse(buffer_arg) {
  return variation_pb.RemoveVariationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_SongDatabasesConnection(arg) {
  if (!(arg instanceof song_database_pb.SongDatabasesConnection)) {
    throw new Error('Expected argument of type SeppoService.SongDatabasesConnection');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SongDatabasesConnection(buffer_arg) {
  return song_database_pb.SongDatabasesConnection.deserializeBinary(new Uint8Array(buffer_arg));
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
  fetchSongDatabases: {
    path: '/SeppoService.Seppo/fetchSongDatabases',
    requestStream: false,
    responseStream: false,
    requestType: song_database_pb.FetchSongDatabasesRequest,
    responseType: song_database_pb.SongDatabasesConnection,
    requestSerialize: serialize_SeppoService_FetchSongDatabasesRequest,
    requestDeserialize: deserialize_SeppoService_FetchSongDatabasesRequest,
    responseSerialize: serialize_SeppoService_SongDatabasesConnection,
    responseDeserialize: deserialize_SeppoService_SongDatabasesConnection,
  },
  fetchSongDatabaseById: {
    path: '/SeppoService.Seppo/fetchSongDatabaseById',
    requestStream: false,
    responseStream: false,
    requestType: song_database_pb.FetchSongDatabaseByIdRequest,
    responseType: song_database_pb.FetchSongDatabaseByIdResponse,
    requestSerialize: serialize_SeppoService_FetchSongDatabaseByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchSongDatabaseByIdRequest,
    responseSerialize: serialize_SeppoService_FetchSongDatabaseByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchSongDatabaseByIdResponse,
  },
  fetchEwDatabases: {
    path: '/SeppoService.Seppo/fetchEwDatabases',
    requestStream: false,
    responseStream: false,
    requestType: ew_database_pb.FetchEwDatabasesRequest,
    responseType: ew_database_pb.EwDatabasesConnection,
    requestSerialize: serialize_SeppoService_FetchEwDatabasesRequest,
    requestDeserialize: deserialize_SeppoService_FetchEwDatabasesRequest,
    responseSerialize: serialize_SeppoService_EwDatabasesConnection,
    responseDeserialize: deserialize_SeppoService_EwDatabasesConnection,
  },
  fetchEwDatabaseById: {
    path: '/SeppoService.Seppo/fetchEwDatabaseById',
    requestStream: false,
    responseStream: false,
    requestType: ew_database_pb.FetchEwDatabaseByIdRequest,
    responseType: ew_database_pb.FetchEwDatabaseByIdResponse,
    requestSerialize: serialize_SeppoService_FetchEwDatabaseByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchEwDatabaseByIdRequest,
    responseSerialize: serialize_SeppoService_FetchEwDatabaseByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchEwDatabaseByIdResponse,
  },
  fetchVariationsBySongDatabaseId: {
    path: '/SeppoService.Seppo/fetchVariationsBySongDatabaseId',
    requestStream: false,
    responseStream: false,
    requestType: song_database_variation_pb.FetchVariationsBySongDatabaseIdRequest,
    responseType: song_database_variation_pb.FetchVariationsBySongDatabaseIdResponse,
    requestSerialize: serialize_SeppoService_FetchVariationsBySongDatabaseIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchVariationsBySongDatabaseIdRequest,
    responseSerialize: serialize_SeppoService_FetchVariationsBySongDatabaseIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchVariationsBySongDatabaseIdResponse,
  },
  // Mutations
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
  removeVariation: {
    path: '/SeppoService.Seppo/removeVariation',
    requestStream: false,
    responseStream: false,
    requestType: variation_pb.RemoveVariationRequest,
    responseType: variation_pb.RemoveVariationResponse,
    requestSerialize: serialize_SeppoService_RemoveVariationRequest,
    requestDeserialize: deserialize_SeppoService_RemoveVariationRequest,
    responseSerialize: serialize_SeppoService_RemoveVariationResponse,
    responseDeserialize: deserialize_SeppoService_RemoveVariationResponse,
  },
  createSongDatabase: {
    path: '/SeppoService.Seppo/createSongDatabase',
    requestStream: false,
    responseStream: false,
    requestType: song_database_pb.CreateSongDatabaseRequest,
    responseType: song_database_pb.CreateSongDatabaseResponse,
    requestSerialize: serialize_SeppoService_CreateSongDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_CreateSongDatabaseRequest,
    responseSerialize: serialize_SeppoService_CreateSongDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_CreateSongDatabaseResponse,
  },
  editSongDatabase: {
    path: '/SeppoService.Seppo/editSongDatabase',
    requestStream: false,
    responseStream: false,
    requestType: song_database_pb.EditSongDatabaseRequest,
    responseType: song_database_pb.EditSongDatabaseResponse,
    requestSerialize: serialize_SeppoService_EditSongDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_EditSongDatabaseRequest,
    responseSerialize: serialize_SeppoService_EditSongDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_EditSongDatabaseResponse,
  },
  removeSongDatabase: {
    path: '/SeppoService.Seppo/removeSongDatabase',
    requestStream: false,
    responseStream: false,
    requestType: song_database_pb.RemoveSongDatabaseRequest,
    responseType: song_database_pb.RemoveSongDatabaseResponse,
    requestSerialize: serialize_SeppoService_RemoveSongDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_RemoveSongDatabaseRequest,
    responseSerialize: serialize_SeppoService_RemoveSongDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_RemoveSongDatabaseResponse,
  },
  createEwDatabase: {
    path: '/SeppoService.Seppo/createEwDatabase',
    requestStream: false,
    responseStream: false,
    requestType: ew_database_pb.CreateEwDatabaseRequest,
    responseType: ew_database_pb.CreateEwDatabaseResponse,
    requestSerialize: serialize_SeppoService_CreateEwDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_CreateEwDatabaseRequest,
    responseSerialize: serialize_SeppoService_CreateEwDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_CreateEwDatabaseResponse,
  },
  removeEwDatabase: {
    path: '/SeppoService.Seppo/removeEwDatabase',
    requestStream: false,
    responseStream: false,
    requestType: ew_database_pb.RemoveEwDatabaseRequest,
    responseType: ew_database_pb.RemoveEwDatabaseResponse,
    requestSerialize: serialize_SeppoService_RemoveEwDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_RemoveEwDatabaseRequest,
    responseSerialize: serialize_SeppoService_RemoveEwDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_RemoveEwDatabaseResponse,
  },
  addVariationToSongDatabase: {
    path: '/SeppoService.Seppo/addVariationToSongDatabase',
    requestStream: false,
    responseStream: false,
    requestType: song_database_variation_pb.AddVariationToSongDatabaseRequest,
    responseType: song_database_variation_pb.AddVariationToSongDatabaseResponse,
    requestSerialize: serialize_SeppoService_AddVariationToSongDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_AddVariationToSongDatabaseRequest,
    responseSerialize: serialize_SeppoService_AddVariationToSongDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_AddVariationToSongDatabaseResponse,
  },
  removeVariationFromSongDatabase: {
    path: '/SeppoService.Seppo/removeVariationFromSongDatabase',
    requestStream: false,
    responseStream: false,
    requestType: song_database_variation_pb.RemoveVariationFromSongDatabaseRequest,
    responseType: song_database_variation_pb.RemoveVariationFromSongDatabaseResponse,
    requestSerialize: serialize_SeppoService_RemoveVariationFromSongDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_RemoveVariationFromSongDatabaseRequest,
    responseSerialize: serialize_SeppoService_RemoveVariationFromSongDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_RemoveVariationFromSongDatabaseResponse,
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
