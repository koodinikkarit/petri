// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var song_database_pb = require('./song_database_pb.js');
var song_database_variation_pb = require('./song_database_variation_pb.js');
var ew_database_pb = require('./ew_database_pb.js');
var ew_song_pb = require('./ew_song_pb.js');
var ew_verse_pb = require('./ew_verse_pb.js');
var tag_pb = require('./tag_pb.js');
var language_pb = require('./language_pb.js');
var variation_pb = require('./variation_pb.js');
var variation_text_pb = require('./variation_text_pb.js');
var tag_variation_pb = require('./tag_variation_pb.js');
var song_database_tag_pb = require('./song_database_tag_pb.js');
var language_variations_pb = require('./language_variations_pb.js');

function serialize_SeppoService_AddTagToSongDatabaseRequest(arg) {
  if (!(arg instanceof song_database_tag_pb.AddTagToSongDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.AddTagToSongDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_AddTagToSongDatabaseRequest(buffer_arg) {
  return song_database_tag_pb.AddTagToSongDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_AddTagToSongDatabaseResponse(arg) {
  if (!(arg instanceof song_database_tag_pb.AddTagToSongDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.AddTagToSongDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_AddTagToSongDatabaseResponse(buffer_arg) {
  return song_database_tag_pb.AddTagToSongDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_AddTagToVariationRequest(arg) {
  if (!(arg instanceof tag_variation_pb.AddTagToVariationRequest)) {
    throw new Error('Expected argument of type SeppoService.AddTagToVariationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_AddTagToVariationRequest(buffer_arg) {
  return tag_variation_pb.AddTagToVariationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_AddTagToVariationResponse(arg) {
  if (!(arg instanceof tag_variation_pb.AddTagToVariationResponse)) {
    throw new Error('Expected argument of type SeppoService.AddTagToVariationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_AddTagToVariationResponse(buffer_arg) {
  return tag_variation_pb.AddTagToVariationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_SeppoService_ChangeEwSongIdsRequest(arg) {
  if (!(arg instanceof ew_song_pb.ChangeEwSongIdsRequest)) {
    throw new Error('Expected argument of type SeppoService.ChangeEwSongIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_ChangeEwSongIdsRequest(buffer_arg) {
  return ew_song_pb.ChangeEwSongIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_ChangeEwSongIdsResponse(arg) {
  if (!(arg instanceof ew_song_pb.ChangeEwSongIdsResponse)) {
    throw new Error('Expected argument of type SeppoService.ChangeEwSongIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_ChangeEwSongIdsResponse(buffer_arg) {
  return ew_song_pb.ChangeEwSongIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_CreateLanguageRequest(arg) {
  if (!(arg instanceof language_pb.CreateLanguageRequest)) {
    throw new Error('Expected argument of type SeppoService.CreateLanguageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateLanguageRequest(buffer_arg) {
  return language_pb.CreateLanguageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateLanguageResponse(arg) {
  if (!(arg instanceof language_pb.CreateLanguageResponse)) {
    throw new Error('Expected argument of type SeppoService.CreateLanguageResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateLanguageResponse(buffer_arg) {
  return language_pb.CreateLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_CreateTagRequest(arg) {
  if (!(arg instanceof tag_pb.CreateTagRequest)) {
    throw new Error('Expected argument of type SeppoService.CreateTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateTagRequest(buffer_arg) {
  return tag_pb.CreateTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateTagResponse(arg) {
  if (!(arg instanceof tag_pb.CreateTagResponse)) {
    throw new Error('Expected argument of type SeppoService.CreateTagResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateTagResponse(buffer_arg) {
  return tag_pb.CreateTagResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_EditEwDatabaseRequest(arg) {
  if (!(arg instanceof ew_database_pb.EditEwDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.EditEwDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditEwDatabaseRequest(buffer_arg) {
  return ew_database_pb.EditEwDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_EditEwDatabaseResponse(arg) {
  if (!(arg instanceof ew_database_pb.EditEwDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.EditEwDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditEwDatabaseResponse(buffer_arg) {
  return ew_database_pb.EditEwDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_EditLanguageRequest(arg) {
  if (!(arg instanceof language_pb.EditLanguageRequest)) {
    throw new Error('Expected argument of type SeppoService.EditLanguageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditLanguageRequest(buffer_arg) {
  return language_pb.EditLanguageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_EditLanguageResponse(arg) {
  if (!(arg instanceof language_pb.EditLanguageResponse)) {
    throw new Error('Expected argument of type SeppoService.EditLanguageResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditLanguageResponse(buffer_arg) {
  return language_pb.EditLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_EditTagRequest(arg) {
  if (!(arg instanceof tag_pb.EditTagRequest)) {
    throw new Error('Expected argument of type SeppoService.EditTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditTagRequest(buffer_arg) {
  return tag_pb.EditTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_EditTagResponse(arg) {
  if (!(arg instanceof tag_pb.EditTagResponse)) {
    throw new Error('Expected argument of type SeppoService.EditTagResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_EditTagResponse(buffer_arg) {
  return tag_pb.EditTagResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchLanguageByIdRequest(arg) {
  if (!(arg instanceof language_pb.FetchLanguageByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchLanguageByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchLanguageByIdRequest(buffer_arg) {
  return language_pb.FetchLanguageByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchLanguageByIdResponse(arg) {
  if (!(arg instanceof language_pb.FetchLanguageByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchLanguageByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchLanguageByIdResponse(buffer_arg) {
  return language_pb.FetchLanguageByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchLanguageVariationsRequest(arg) {
  if (!(arg instanceof language_variations_pb.FetchLanguageVariationsRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchLanguageVariationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchLanguageVariationsRequest(buffer_arg) {
  return language_variations_pb.FetchLanguageVariationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchLanguageVariationsResponse(arg) {
  if (!(arg instanceof language_variations_pb.FetchLanguageVariationsResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchLanguageVariationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchLanguageVariationsResponse(buffer_arg) {
  return language_variations_pb.FetchLanguageVariationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchSongDatabaseTagsRequest(arg) {
  if (!(arg instanceof song_database_tag_pb.FetchSongDatabaseTagsRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchSongDatabaseTagsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchSongDatabaseTagsRequest(buffer_arg) {
  return song_database_tag_pb.FetchSongDatabaseTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchSongDatabaseTagsResponse(arg) {
  if (!(arg instanceof song_database_tag_pb.FetchSongDatabaseTagsResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchSongDatabaseTagsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchSongDatabaseTagsResponse(buffer_arg) {
  return song_database_tag_pb.FetchSongDatabaseTagsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchTagByIdRequest(arg) {
  if (!(arg instanceof tag_pb.FetchTagByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchTagByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchTagByIdRequest(buffer_arg) {
  return tag_pb.FetchTagByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchTagByIdResponse(arg) {
  if (!(arg instanceof tag_pb.FetchTagByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchTagByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchTagByIdResponse(buffer_arg) {
  return tag_pb.FetchTagByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchTagSongDatabasesRequest(arg) {
  if (!(arg instanceof song_database_tag_pb.FetchTagSongDatabasesRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchTagSongDatabasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchTagSongDatabasesRequest(buffer_arg) {
  return song_database_tag_pb.FetchTagSongDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchTagSongDatabasesResponse(arg) {
  if (!(arg instanceof song_database_tag_pb.FetchTagSongDatabasesResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchTagSongDatabasesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchTagSongDatabasesResponse(buffer_arg) {
  return song_database_tag_pb.FetchTagSongDatabasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchTagVariationsRequest(arg) {
  if (!(arg instanceof tag_variation_pb.FetchTagVariationsRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchTagVariationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchTagVariationsRequest(buffer_arg) {
  return tag_variation_pb.FetchTagVariationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchTagVariationsResponse(arg) {
  if (!(arg instanceof tag_variation_pb.FetchTagVariationsResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchTagVariationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchTagVariationsResponse(buffer_arg) {
  return tag_variation_pb.FetchTagVariationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchVariationTagsRequest(arg) {
  if (!(arg instanceof tag_variation_pb.FetchVariationTagsRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationTagsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationTagsRequest(buffer_arg) {
  return tag_variation_pb.FetchVariationTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchVariationTagsResponse(arg) {
  if (!(arg instanceof tag_variation_pb.FetchVariationTagsResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationTagsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationTagsResponse(buffer_arg) {
  return tag_variation_pb.FetchVariationTagsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchVariationTextByVariationIdRequest(arg) {
  if (!(arg instanceof variation_text_pb.FetchVariationTextByVariationIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationTextByVariationIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationTextByVariationIdRequest(buffer_arg) {
  return variation_text_pb.FetchVariationTextByVariationIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchVariationTextByVariationIdResponse(arg) {
  if (!(arg instanceof variation_text_pb.FetchVariationTextByVariationIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationTextByVariationIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationTextByVariationIdResponse(buffer_arg) {
  return variation_text_pb.FetchVariationTextByVariationIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_InsertEwSongIdsRequest(arg) {
  if (!(arg instanceof ew_song_pb.InsertEwSongIdsRequest)) {
    throw new Error('Expected argument of type SeppoService.InsertEwSongIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_InsertEwSongIdsRequest(buffer_arg) {
  return ew_song_pb.InsertEwSongIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_InsertEwSongIdsResponse(arg) {
  if (!(arg instanceof ew_song_pb.InsertEwSongIdsResponse)) {
    throw new Error('Expected argument of type SeppoService.InsertEwSongIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_InsertEwSongIdsResponse(buffer_arg) {
  return ew_song_pb.InsertEwSongIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_LanguagesConnection(arg) {
  if (!(arg instanceof language_pb.LanguagesConnection)) {
    throw new Error('Expected argument of type SeppoService.LanguagesConnection');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_LanguagesConnection(buffer_arg) {
  return language_pb.LanguagesConnection.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_RemoveLanguageRequest(arg) {
  if (!(arg instanceof language_pb.RemoveLanguageRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveLanguageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveLanguageRequest(buffer_arg) {
  return language_pb.RemoveLanguageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveLanguageResponse(arg) {
  if (!(arg instanceof language_pb.RemoveLanguageResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveLanguageResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveLanguageResponse(buffer_arg) {
  return language_pb.RemoveLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_RemoveTagFromSongDatabaseRequest(arg) {
  if (!(arg instanceof song_database_tag_pb.RemoveTagFromSongDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveTagFromSongDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveTagFromSongDatabaseRequest(buffer_arg) {
  return song_database_tag_pb.RemoveTagFromSongDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveTagFromSongDatabaseResponse(arg) {
  if (!(arg instanceof song_database_tag_pb.RemoveTagFromSongDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveTagFromSongDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveTagFromSongDatabaseResponse(buffer_arg) {
  return song_database_tag_pb.RemoveTagFromSongDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveTagFromVariationRequest(arg) {
  if (!(arg instanceof tag_variation_pb.RemoveTagFromVariationRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveTagFromVariationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveTagFromVariationRequest(buffer_arg) {
  return tag_variation_pb.RemoveTagFromVariationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveTagFromVariationResponse(arg) {
  if (!(arg instanceof tag_variation_pb.RemoveTagFromVariationResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveTagFromVariationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveTagFromVariationResponse(buffer_arg) {
  return tag_variation_pb.RemoveTagFromVariationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveTagRequest(arg) {
  if (!(arg instanceof tag_pb.RemoveTagRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveTagRequest(buffer_arg) {
  return tag_pb.RemoveTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveTagResponse(arg) {
  if (!(arg instanceof tag_pb.RemoveTagResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveTagResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveTagResponse(buffer_arg) {
  return tag_pb.RemoveTagResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_SearchLanguagesRequest(arg) {
  if (!(arg instanceof language_pb.SearchLanguagesRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchLanguagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchLanguagesRequest(buffer_arg) {
  return language_pb.SearchLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchTagsRequest(arg) {
  if (!(arg instanceof tag_pb.SearchTagsRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchTagsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchTagsRequest(buffer_arg) {
  return tag_pb.SearchTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_TagsConnection(arg) {
  if (!(arg instanceof tag_pb.TagsConnection)) {
    throw new Error('Expected argument of type SeppoService.TagsConnection');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_TagsConnection(buffer_arg) {
  return tag_pb.TagsConnection.deserializeBinary(new Uint8Array(buffer_arg));
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
  fetchVariationTextByVariationId: {
    path: '/SeppoService.Seppo/fetchVariationTextByVariationId',
    requestStream: false,
    responseStream: false,
    requestType: variation_text_pb.FetchVariationTextByVariationIdRequest,
    responseType: variation_text_pb.FetchVariationTextByVariationIdResponse,
    requestSerialize: serialize_SeppoService_FetchVariationTextByVariationIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchVariationTextByVariationIdRequest,
    responseSerialize: serialize_SeppoService_FetchVariationTextByVariationIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchVariationTextByVariationIdResponse,
  },
  searchTags: {
    path: '/SeppoService.Seppo/searchTags',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.SearchTagsRequest,
    responseType: tag_pb.TagsConnection,
    requestSerialize: serialize_SeppoService_SearchTagsRequest,
    requestDeserialize: deserialize_SeppoService_SearchTagsRequest,
    responseSerialize: serialize_SeppoService_TagsConnection,
    responseDeserialize: deserialize_SeppoService_TagsConnection,
  },
  fetchTagById: {
    path: '/SeppoService.Seppo/fetchTagById',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.FetchTagByIdRequest,
    responseType: tag_pb.FetchTagByIdResponse,
    requestSerialize: serialize_SeppoService_FetchTagByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchTagByIdRequest,
    responseSerialize: serialize_SeppoService_FetchTagByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchTagByIdResponse,
  },
  searchLanguages: {
    path: '/SeppoService.Seppo/searchLanguages',
    requestStream: false,
    responseStream: false,
    requestType: language_pb.SearchLanguagesRequest,
    responseType: language_pb.LanguagesConnection,
    requestSerialize: serialize_SeppoService_SearchLanguagesRequest,
    requestDeserialize: deserialize_SeppoService_SearchLanguagesRequest,
    responseSerialize: serialize_SeppoService_LanguagesConnection,
    responseDeserialize: deserialize_SeppoService_LanguagesConnection,
  },
  fetchLanguageById: {
    path: '/SeppoService.Seppo/fetchLanguageById',
    requestStream: false,
    responseStream: false,
    requestType: language_pb.FetchLanguageByIdRequest,
    responseType: language_pb.FetchLanguageByIdResponse,
    requestSerialize: serialize_SeppoService_FetchLanguageByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchLanguageByIdRequest,
    responseSerialize: serialize_SeppoService_FetchLanguageByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchLanguageByIdResponse,
  },
  fetchVariationTags: {
    path: '/SeppoService.Seppo/fetchVariationTags',
    requestStream: false,
    responseStream: false,
    requestType: tag_variation_pb.FetchVariationTagsRequest,
    responseType: tag_variation_pb.FetchVariationTagsResponse,
    requestSerialize: serialize_SeppoService_FetchVariationTagsRequest,
    requestDeserialize: deserialize_SeppoService_FetchVariationTagsRequest,
    responseSerialize: serialize_SeppoService_FetchVariationTagsResponse,
    responseDeserialize: deserialize_SeppoService_FetchVariationTagsResponse,
  },
  fetchTagVariations: {
    path: '/SeppoService.Seppo/fetchTagVariations',
    requestStream: false,
    responseStream: false,
    requestType: tag_variation_pb.FetchTagVariationsRequest,
    responseType: tag_variation_pb.FetchTagVariationsResponse,
    requestSerialize: serialize_SeppoService_FetchTagVariationsRequest,
    requestDeserialize: deserialize_SeppoService_FetchTagVariationsRequest,
    responseSerialize: serialize_SeppoService_FetchTagVariationsResponse,
    responseDeserialize: deserialize_SeppoService_FetchTagVariationsResponse,
  },
  fetchTagSongDatabases: {
    path: '/SeppoService.Seppo/fetchTagSongDatabases',
    requestStream: false,
    responseStream: false,
    requestType: song_database_tag_pb.FetchTagSongDatabasesRequest,
    responseType: song_database_tag_pb.FetchTagSongDatabasesResponse,
    requestSerialize: serialize_SeppoService_FetchTagSongDatabasesRequest,
    requestDeserialize: deserialize_SeppoService_FetchTagSongDatabasesRequest,
    responseSerialize: serialize_SeppoService_FetchTagSongDatabasesResponse,
    responseDeserialize: deserialize_SeppoService_FetchTagSongDatabasesResponse,
  },
  fetchSongDatabaseTags: {
    path: '/SeppoService.Seppo/fetchSongDatabaseTags',
    requestStream: false,
    responseStream: false,
    requestType: song_database_tag_pb.FetchSongDatabaseTagsRequest,
    responseType: song_database_tag_pb.FetchSongDatabaseTagsResponse,
    requestSerialize: serialize_SeppoService_FetchSongDatabaseTagsRequest,
    requestDeserialize: deserialize_SeppoService_FetchSongDatabaseTagsRequest,
    responseSerialize: serialize_SeppoService_FetchSongDatabaseTagsResponse,
    responseDeserialize: deserialize_SeppoService_FetchSongDatabaseTagsResponse,
  },
  fetchLanguageVariations: {
    path: '/SeppoService.Seppo/fetchLanguageVariations',
    requestStream: false,
    responseStream: false,
    requestType: language_variations_pb.FetchLanguageVariationsRequest,
    responseType: language_variations_pb.FetchLanguageVariationsResponse,
    requestSerialize: serialize_SeppoService_FetchLanguageVariationsRequest,
    requestDeserialize: deserialize_SeppoService_FetchLanguageVariationsRequest,
    responseSerialize: serialize_SeppoService_FetchLanguageVariationsResponse,
    responseDeserialize: deserialize_SeppoService_FetchLanguageVariationsResponse,
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
  editEwDatabase: {
    path: '/SeppoService.Seppo/editEwDatabase',
    requestStream: false,
    responseStream: false,
    requestType: ew_database_pb.EditEwDatabaseRequest,
    responseType: ew_database_pb.EditEwDatabaseResponse,
    requestSerialize: serialize_SeppoService_EditEwDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_EditEwDatabaseRequest,
    responseSerialize: serialize_SeppoService_EditEwDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_EditEwDatabaseResponse,
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
  insertEwSongIds: {
    path: '/SeppoService.Seppo/insertEwSongIds',
    requestStream: false,
    responseStream: false,
    requestType: ew_song_pb.InsertEwSongIdsRequest,
    responseType: ew_song_pb.InsertEwSongIdsResponse,
    requestSerialize: serialize_SeppoService_InsertEwSongIdsRequest,
    requestDeserialize: deserialize_SeppoService_InsertEwSongIdsRequest,
    responseSerialize: serialize_SeppoService_InsertEwSongIdsResponse,
    responseDeserialize: deserialize_SeppoService_InsertEwSongIdsResponse,
  },
  changeEwSongIds: {
    path: '/SeppoService.Seppo/changeEwSongIds',
    requestStream: false,
    responseStream: false,
    requestType: ew_song_pb.ChangeEwSongIdsRequest,
    responseType: ew_song_pb.ChangeEwSongIdsResponse,
    requestSerialize: serialize_SeppoService_ChangeEwSongIdsRequest,
    requestDeserialize: deserialize_SeppoService_ChangeEwSongIdsRequest,
    responseSerialize: serialize_SeppoService_ChangeEwSongIdsResponse,
    responseDeserialize: deserialize_SeppoService_ChangeEwSongIdsResponse,
  },
  createTag: {
    path: '/SeppoService.Seppo/createTag',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.CreateTagRequest,
    responseType: tag_pb.CreateTagResponse,
    requestSerialize: serialize_SeppoService_CreateTagRequest,
    requestDeserialize: deserialize_SeppoService_CreateTagRequest,
    responseSerialize: serialize_SeppoService_CreateTagResponse,
    responseDeserialize: deserialize_SeppoService_CreateTagResponse,
  },
  editTag: {
    path: '/SeppoService.Seppo/editTag',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.EditTagRequest,
    responseType: tag_pb.EditTagResponse,
    requestSerialize: serialize_SeppoService_EditTagRequest,
    requestDeserialize: deserialize_SeppoService_EditTagRequest,
    responseSerialize: serialize_SeppoService_EditTagResponse,
    responseDeserialize: deserialize_SeppoService_EditTagResponse,
  },
  removeTag: {
    path: '/SeppoService.Seppo/removeTag',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.RemoveTagRequest,
    responseType: tag_pb.RemoveTagResponse,
    requestSerialize: serialize_SeppoService_RemoveTagRequest,
    requestDeserialize: deserialize_SeppoService_RemoveTagRequest,
    responseSerialize: serialize_SeppoService_RemoveTagResponse,
    responseDeserialize: deserialize_SeppoService_RemoveTagResponse,
  },
  createLanguage: {
    path: '/SeppoService.Seppo/createLanguage',
    requestStream: false,
    responseStream: false,
    requestType: language_pb.CreateLanguageRequest,
    responseType: language_pb.CreateLanguageResponse,
    requestSerialize: serialize_SeppoService_CreateLanguageRequest,
    requestDeserialize: deserialize_SeppoService_CreateLanguageRequest,
    responseSerialize: serialize_SeppoService_CreateLanguageResponse,
    responseDeserialize: deserialize_SeppoService_CreateLanguageResponse,
  },
  editLanguage: {
    path: '/SeppoService.Seppo/editLanguage',
    requestStream: false,
    responseStream: false,
    requestType: language_pb.EditLanguageRequest,
    responseType: language_pb.EditLanguageResponse,
    requestSerialize: serialize_SeppoService_EditLanguageRequest,
    requestDeserialize: deserialize_SeppoService_EditLanguageRequest,
    responseSerialize: serialize_SeppoService_EditLanguageResponse,
    responseDeserialize: deserialize_SeppoService_EditLanguageResponse,
  },
  removeLanguage: {
    path: '/SeppoService.Seppo/removeLanguage',
    requestStream: false,
    responseStream: false,
    requestType: language_pb.RemoveLanguageRequest,
    responseType: language_pb.RemoveLanguageResponse,
    requestSerialize: serialize_SeppoService_RemoveLanguageRequest,
    requestDeserialize: deserialize_SeppoService_RemoveLanguageRequest,
    responseSerialize: serialize_SeppoService_RemoveLanguageResponse,
    responseDeserialize: deserialize_SeppoService_RemoveLanguageResponse,
  },
  addTagToVariation: {
    path: '/SeppoService.Seppo/addTagToVariation',
    requestStream: false,
    responseStream: false,
    requestType: tag_variation_pb.AddTagToVariationRequest,
    responseType: tag_variation_pb.AddTagToVariationResponse,
    requestSerialize: serialize_SeppoService_AddTagToVariationRequest,
    requestDeserialize: deserialize_SeppoService_AddTagToVariationRequest,
    responseSerialize: serialize_SeppoService_AddTagToVariationResponse,
    responseDeserialize: deserialize_SeppoService_AddTagToVariationResponse,
  },
  removeTagFromVariation: {
    path: '/SeppoService.Seppo/removeTagFromVariation',
    requestStream: false,
    responseStream: false,
    requestType: tag_variation_pb.RemoveTagFromVariationRequest,
    responseType: tag_variation_pb.RemoveTagFromVariationResponse,
    requestSerialize: serialize_SeppoService_RemoveTagFromVariationRequest,
    requestDeserialize: deserialize_SeppoService_RemoveTagFromVariationRequest,
    responseSerialize: serialize_SeppoService_RemoveTagFromVariationResponse,
    responseDeserialize: deserialize_SeppoService_RemoveTagFromVariationResponse,
  },
  addTagToSongDatabase: {
    path: '/SeppoService.Seppo/addTagToSongDatabase',
    requestStream: false,
    responseStream: false,
    requestType: song_database_tag_pb.AddTagToSongDatabaseRequest,
    responseType: song_database_tag_pb.AddTagToSongDatabaseResponse,
    requestSerialize: serialize_SeppoService_AddTagToSongDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_AddTagToSongDatabaseRequest,
    responseSerialize: serialize_SeppoService_AddTagToSongDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_AddTagToSongDatabaseResponse,
  },
  removeTagFromSongDatabase: {
    path: '/SeppoService.Seppo/removeTagFromSongDatabase',
    requestStream: false,
    responseStream: false,
    requestType: song_database_tag_pb.RemoveTagFromSongDatabaseRequest,
    responseType: song_database_tag_pb.RemoveTagFromSongDatabaseResponse,
    requestSerialize: serialize_SeppoService_RemoveTagFromSongDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_RemoveTagFromSongDatabaseRequest,
    responseSerialize: serialize_SeppoService_RemoveTagFromSongDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_RemoveTagFromSongDatabaseResponse,
  },
};

exports.SeppoClient = grpc.makeGenericClientConstructor(SeppoService);
// Queries
