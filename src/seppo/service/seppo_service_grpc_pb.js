// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var song_database_pb = require('./song_database_pb.js');
var ew_database_pb = require('./ew_database_pb.js');
var ew_song_pb = require('./ew_song_pb.js');
var tag_pb = require('./tag_pb.js');
var language_pb = require('./language_pb.js');
var schedule_pb = require('./schedule_pb.js');
var variation_version_pb = require('./variation_version_pb.js');
var log_pb = require('./log_pb.js');
var variation_pb = require('./variation_pb.js');
var author_pb = require('./author_pb.js');
var copyright_pb = require('./copyright_pb.js');

function serialize_SeppoService_CreateAuthorRequest(arg) {
  if (!(arg instanceof author_pb.CreateAuthorRequest)) {
    throw new Error('Expected argument of type SeppoService.CreateAuthorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateAuthorRequest(buffer_arg) {
  return author_pb.CreateAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateAuthorResponse(arg) {
  if (!(arg instanceof author_pb.CreateAuthorResponse)) {
    throw new Error('Expected argument of type SeppoService.CreateAuthorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateAuthorResponse(buffer_arg) {
  return author_pb.CreateAuthorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateCopyrightRequest(arg) {
  if (!(arg instanceof copyright_pb.CreateCopyrightRequest)) {
    throw new Error('Expected argument of type SeppoService.CreateCopyrightRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateCopyrightRequest(buffer_arg) {
  return copyright_pb.CreateCopyrightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateCopyrightResponse(arg) {
  if (!(arg instanceof copyright_pb.CreateCopyrightResponse)) {
    throw new Error('Expected argument of type SeppoService.CreateCopyrightResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateCopyrightResponse(buffer_arg) {
  return copyright_pb.CreateCopyrightResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_CreateScheduleRequest(arg) {
  if (!(arg instanceof schedule_pb.CreateScheduleRequest)) {
    throw new Error('Expected argument of type SeppoService.CreateScheduleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateScheduleRequest(buffer_arg) {
  return schedule_pb.CreateScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_CreateScheduleResponse(arg) {
  if (!(arg instanceof schedule_pb.CreateScheduleResponse)) {
    throw new Error('Expected argument of type SeppoService.CreateScheduleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_CreateScheduleResponse(buffer_arg) {
  return schedule_pb.CreateScheduleResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchAuthorByIdRequest(arg) {
  if (!(arg instanceof author_pb.FetchAuthorByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchAuthorByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchAuthorByIdRequest(buffer_arg) {
  return author_pb.FetchAuthorByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchAuthorByIdResponse(arg) {
  if (!(arg instanceof author_pb.FetchAuthorByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchAuthorByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchAuthorByIdResponse(buffer_arg) {
  return author_pb.FetchAuthorByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchCopyrightByIdRequest(arg) {
  if (!(arg instanceof copyright_pb.FetchCopyrightByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchCopyrightByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchCopyrightByIdRequest(buffer_arg) {
  return copyright_pb.FetchCopyrightByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchCopyrightByIdResponse(arg) {
  if (!(arg instanceof copyright_pb.FetchCopyrightByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchCopyrightByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchCopyrightByIdResponse(buffer_arg) {
  return copyright_pb.FetchCopyrightByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchNewestVariationVersionByVariationIdRequest(arg) {
  if (!(arg instanceof variation_version_pb.FetchNewestVariationVersionByVariationIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchNewestVariationVersionByVariationIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchNewestVariationVersionByVariationIdRequest(buffer_arg) {
  return variation_version_pb.FetchNewestVariationVersionByVariationIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchNewestVariationVersionByVariationIdResponse(arg) {
  if (!(arg instanceof variation_version_pb.FetchNewestVariationVersionByVariationIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchNewestVariationVersionByVariationIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchNewestVariationVersionByVariationIdResponse(buffer_arg) {
  return variation_version_pb.FetchNewestVariationVersionByVariationIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchScheduleByIdRequest(arg) {
  if (!(arg instanceof schedule_pb.FetchScheduleByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchScheduleByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchScheduleByIdRequest(buffer_arg) {
  return schedule_pb.FetchScheduleByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchScheduleByIdResponse(arg) {
  if (!(arg instanceof schedule_pb.FetchScheduleByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchScheduleByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchScheduleByIdResponse(buffer_arg) {
  return schedule_pb.FetchScheduleByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_FetchVariationVersionByIdRequest(arg) {
  if (!(arg instanceof variation_version_pb.FetchVariationVersionByIdRequest)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationVersionByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationVersionByIdRequest(buffer_arg) {
  return variation_version_pb.FetchVariationVersionByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_FetchVariationVersionByIdResponse(arg) {
  if (!(arg instanceof variation_version_pb.FetchVariationVersionByIdResponse)) {
    throw new Error('Expected argument of type SeppoService.FetchVariationVersionByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_FetchVariationVersionByIdResponse(buffer_arg) {
  return variation_version_pb.FetchVariationVersionByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveAuthorRequest(arg) {
  if (!(arg instanceof author_pb.RemoveAuthorRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveAuthorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveAuthorRequest(buffer_arg) {
  return author_pb.RemoveAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveAuthorResponse(arg) {
  if (!(arg instanceof author_pb.RemoveAuthorResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveAuthorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveAuthorResponse(buffer_arg) {
  return author_pb.RemoveAuthorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveCopyrightRequest(arg) {
  if (!(arg instanceof copyright_pb.RemoveCopyrightRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveCopyrightRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveCopyrightRequest(buffer_arg) {
  return copyright_pb.RemoveCopyrightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveCopyrightResponse(arg) {
  if (!(arg instanceof copyright_pb.RemoveCopyrightResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveCopyrightResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveCopyrightResponse(buffer_arg) {
  return copyright_pb.RemoveCopyrightResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_RemoveScheduleRequest(arg) {
  if (!(arg instanceof schedule_pb.RemoveScheduleRequest)) {
    throw new Error('Expected argument of type SeppoService.RemoveScheduleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveScheduleRequest(buffer_arg) {
  return schedule_pb.RemoveScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_RemoveScheduleResponse(arg) {
  if (!(arg instanceof schedule_pb.RemoveScheduleResponse)) {
    throw new Error('Expected argument of type SeppoService.RemoveScheduleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_RemoveScheduleResponse(buffer_arg) {
  return schedule_pb.RemoveScheduleResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_SearchAuthorsRequest(arg) {
  if (!(arg instanceof author_pb.SearchAuthorsRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchAuthorsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchAuthorsRequest(buffer_arg) {
  return author_pb.SearchAuthorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchAuthorsResponse(arg) {
  if (!(arg instanceof author_pb.SearchAuthorsResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchAuthorsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchAuthorsResponse(buffer_arg) {
  return author_pb.SearchAuthorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchCopyrightsRequest(arg) {
  if (!(arg instanceof copyright_pb.SearchCopyrightsRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchCopyrightsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchCopyrightsRequest(buffer_arg) {
  return copyright_pb.SearchCopyrightsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchCopyrightsResponse(arg) {
  if (!(arg instanceof copyright_pb.SearchCopyrightsResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchCopyrightsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchCopyrightsResponse(buffer_arg) {
  return copyright_pb.SearchCopyrightsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchEwDatabasesRequest(arg) {
  if (!(arg instanceof ew_database_pb.SearchEwDatabasesRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchEwDatabasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchEwDatabasesRequest(buffer_arg) {
  return ew_database_pb.SearchEwDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchEwDatabasesResponse(arg) {
  if (!(arg instanceof ew_database_pb.SearchEwDatabasesResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchEwDatabasesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchEwDatabasesResponse(buffer_arg) {
  return ew_database_pb.SearchEwDatabasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_SearchLanguagesResponse(arg) {
  if (!(arg instanceof language_pb.SearchLanguagesResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchLanguagesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchLanguagesResponse(buffer_arg) {
  return language_pb.SearchLanguagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchLogsRequest(arg) {
  if (!(arg instanceof log_pb.SearchLogsRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchLogsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchLogsRequest(buffer_arg) {
  return log_pb.SearchLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchLogsResponse(arg) {
  if (!(arg instanceof log_pb.SearchLogsResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchLogsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchLogsResponse(buffer_arg) {
  return log_pb.SearchLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchSchedulesRequest(arg) {
  if (!(arg instanceof schedule_pb.SearchSchedulesRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchSchedulesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchSchedulesRequest(buffer_arg) {
  return schedule_pb.SearchSchedulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchSchedulesResponse(arg) {
  if (!(arg instanceof schedule_pb.SearchSchedulesResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchSchedulesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchSchedulesResponse(buffer_arg) {
  return schedule_pb.SearchSchedulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchSongDatabasesRequest(arg) {
  if (!(arg instanceof song_database_pb.SearchSongDatabasesRequest)) {
    throw new Error('Expected argument of type SeppoService.SearchSongDatabasesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchSongDatabasesRequest(buffer_arg) {
  return song_database_pb.SearchSongDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_SearchSongDatabasesResponse(arg) {
  if (!(arg instanceof song_database_pb.SearchSongDatabasesResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchSongDatabasesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchSongDatabasesResponse(buffer_arg) {
  return song_database_pb.SearchSongDatabasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_SearchTagsResponse(arg) {
  if (!(arg instanceof tag_pb.SearchTagsResponse)) {
    throw new Error('Expected argument of type SeppoService.SearchTagsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_SearchTagsResponse(buffer_arg) {
  return tag_pb.SearchTagsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SeppoService_UpdateAuthorRequest(arg) {
  if (!(arg instanceof author_pb.UpdateAuthorRequest)) {
    throw new Error('Expected argument of type SeppoService.UpdateAuthorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateAuthorRequest(buffer_arg) {
  return author_pb.UpdateAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateAuthorResponse(arg) {
  if (!(arg instanceof author_pb.UpdateAuthorResponse)) {
    throw new Error('Expected argument of type SeppoService.UpdateAuthorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateAuthorResponse(buffer_arg) {
  return author_pb.UpdateAuthorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateCopyrightRequest(arg) {
  if (!(arg instanceof copyright_pb.UpdateCopyrightRequest)) {
    throw new Error('Expected argument of type SeppoService.UpdateCopyrightRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateCopyrightRequest(buffer_arg) {
  return copyright_pb.UpdateCopyrightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateCopyrightResponse(arg) {
  if (!(arg instanceof copyright_pb.UpdateCopyrightResponse)) {
    throw new Error('Expected argument of type SeppoService.UpdateCopyrightResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateCopyrightResponse(buffer_arg) {
  return copyright_pb.UpdateCopyrightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateEwDatabaseRequest(arg) {
  if (!(arg instanceof ew_database_pb.UpdateEwDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.UpdateEwDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateEwDatabaseRequest(buffer_arg) {
  return ew_database_pb.UpdateEwDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateEwDatabaseResponse(arg) {
  if (!(arg instanceof ew_database_pb.UpdateEwDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.UpdateEwDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateEwDatabaseResponse(buffer_arg) {
  return ew_database_pb.UpdateEwDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateLanguageRequest(arg) {
  if (!(arg instanceof language_pb.UpdateLanguageRequest)) {
    throw new Error('Expected argument of type SeppoService.UpdateLanguageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateLanguageRequest(buffer_arg) {
  return language_pb.UpdateLanguageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateLanguageResponse(arg) {
  if (!(arg instanceof language_pb.UpdateLanguageResponse)) {
    throw new Error('Expected argument of type SeppoService.UpdateLanguageResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateLanguageResponse(buffer_arg) {
  return language_pb.UpdateLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateScheduleRequest(arg) {
  if (!(arg instanceof schedule_pb.UpdateScheduleRequest)) {
    throw new Error('Expected argument of type SeppoService.UpdateScheduleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateScheduleRequest(buffer_arg) {
  return schedule_pb.UpdateScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateScheduleResponse(arg) {
  if (!(arg instanceof schedule_pb.UpdateScheduleResponse)) {
    throw new Error('Expected argument of type SeppoService.UpdateScheduleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateScheduleResponse(buffer_arg) {
  return schedule_pb.UpdateScheduleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateSongDatabaseRequest(arg) {
  if (!(arg instanceof song_database_pb.UpdateSongDatabaseRequest)) {
    throw new Error('Expected argument of type SeppoService.UpdateSongDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateSongDatabaseRequest(buffer_arg) {
  return song_database_pb.UpdateSongDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateSongDatabaseResponse(arg) {
  if (!(arg instanceof song_database_pb.UpdateSongDatabaseResponse)) {
    throw new Error('Expected argument of type SeppoService.UpdateSongDatabaseResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateSongDatabaseResponse(buffer_arg) {
  return song_database_pb.UpdateSongDatabaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateTagRequest(arg) {
  if (!(arg instanceof tag_pb.UpdateTagRequest)) {
    throw new Error('Expected argument of type SeppoService.UpdateTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateTagRequest(buffer_arg) {
  return tag_pb.UpdateTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateTagResponse(arg) {
  if (!(arg instanceof tag_pb.UpdateTagResponse)) {
    throw new Error('Expected argument of type SeppoService.UpdateTagResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateTagResponse(buffer_arg) {
  return tag_pb.UpdateTagResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateVariationRequest(arg) {
  if (!(arg instanceof variation_pb.UpdateVariationRequest)) {
    throw new Error('Expected argument of type SeppoService.UpdateVariationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateVariationRequest(buffer_arg) {
  return variation_pb.UpdateVariationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SeppoService_UpdateVariationResponse(arg) {
  if (!(arg instanceof variation_pb.UpdateVariationResponse)) {
    throw new Error('Expected argument of type SeppoService.UpdateVariationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SeppoService_UpdateVariationResponse(buffer_arg) {
  return variation_pb.UpdateVariationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  fetchNewestVariationVersionByVariationId: {
    path: '/SeppoService.Seppo/fetchNewestVariationVersionByVariationId',
    requestStream: false,
    responseStream: false,
    requestType: variation_version_pb.FetchNewestVariationVersionByVariationIdRequest,
    responseType: variation_version_pb.FetchNewestVariationVersionByVariationIdResponse,
    requestSerialize: serialize_SeppoService_FetchNewestVariationVersionByVariationIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchNewestVariationVersionByVariationIdRequest,
    responseSerialize: serialize_SeppoService_FetchNewestVariationVersionByVariationIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchNewestVariationVersionByVariationIdResponse,
  },
  fetchVariationVersionById: {
    path: '/SeppoService.Seppo/fetchVariationVersionById',
    requestStream: false,
    responseStream: false,
    requestType: variation_version_pb.FetchVariationVersionByIdRequest,
    responseType: variation_version_pb.FetchVariationVersionByIdResponse,
    requestSerialize: serialize_SeppoService_FetchVariationVersionByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchVariationVersionByIdRequest,
    responseSerialize: serialize_SeppoService_FetchVariationVersionByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchVariationVersionByIdResponse,
  },
  searchSongDatabases: {
    path: '/SeppoService.Seppo/searchSongDatabases',
    requestStream: false,
    responseStream: false,
    requestType: song_database_pb.SearchSongDatabasesRequest,
    responseType: song_database_pb.SearchSongDatabasesResponse,
    requestSerialize: serialize_SeppoService_SearchSongDatabasesRequest,
    requestDeserialize: deserialize_SeppoService_SearchSongDatabasesRequest,
    responseSerialize: serialize_SeppoService_SearchSongDatabasesResponse,
    responseDeserialize: deserialize_SeppoService_SearchSongDatabasesResponse,
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
  searchEwDatabases: {
    path: '/SeppoService.Seppo/searchEwDatabases',
    requestStream: false,
    responseStream: false,
    requestType: ew_database_pb.SearchEwDatabasesRequest,
    responseType: ew_database_pb.SearchEwDatabasesResponse,
    requestSerialize: serialize_SeppoService_SearchEwDatabasesRequest,
    requestDeserialize: deserialize_SeppoService_SearchEwDatabasesRequest,
    responseSerialize: serialize_SeppoService_SearchEwDatabasesResponse,
    responseDeserialize: deserialize_SeppoService_SearchEwDatabasesResponse,
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
  searchTags: {
    path: '/SeppoService.Seppo/searchTags',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.SearchTagsRequest,
    responseType: tag_pb.SearchTagsResponse,
    requestSerialize: serialize_SeppoService_SearchTagsRequest,
    requestDeserialize: deserialize_SeppoService_SearchTagsRequest,
    responseSerialize: serialize_SeppoService_SearchTagsResponse,
    responseDeserialize: deserialize_SeppoService_SearchTagsResponse,
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
    responseType: language_pb.SearchLanguagesResponse,
    requestSerialize: serialize_SeppoService_SearchLanguagesRequest,
    requestDeserialize: deserialize_SeppoService_SearchLanguagesRequest,
    responseSerialize: serialize_SeppoService_SearchLanguagesResponse,
    responseDeserialize: deserialize_SeppoService_SearchLanguagesResponse,
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
  searchSchedules: {
    path: '/SeppoService.Seppo/searchSchedules',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.SearchSchedulesRequest,
    responseType: schedule_pb.SearchSchedulesResponse,
    requestSerialize: serialize_SeppoService_SearchSchedulesRequest,
    requestDeserialize: deserialize_SeppoService_SearchSchedulesRequest,
    responseSerialize: serialize_SeppoService_SearchSchedulesResponse,
    responseDeserialize: deserialize_SeppoService_SearchSchedulesResponse,
  },
  fetchScheduleById: {
    path: '/SeppoService.Seppo/fetchScheduleById',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.FetchScheduleByIdRequest,
    responseType: schedule_pb.FetchScheduleByIdResponse,
    requestSerialize: serialize_SeppoService_FetchScheduleByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchScheduleByIdRequest,
    responseSerialize: serialize_SeppoService_FetchScheduleByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchScheduleByIdResponse,
  },
  searchAuthors: {
    path: '/SeppoService.Seppo/searchAuthors',
    requestStream: false,
    responseStream: false,
    requestType: author_pb.SearchAuthorsRequest,
    responseType: author_pb.SearchAuthorsResponse,
    requestSerialize: serialize_SeppoService_SearchAuthorsRequest,
    requestDeserialize: deserialize_SeppoService_SearchAuthorsRequest,
    responseSerialize: serialize_SeppoService_SearchAuthorsResponse,
    responseDeserialize: deserialize_SeppoService_SearchAuthorsResponse,
  },
  fetchAuthorById: {
    path: '/SeppoService.Seppo/fetchAuthorById',
    requestStream: false,
    responseStream: false,
    requestType: author_pb.FetchAuthorByIdRequest,
    responseType: author_pb.FetchAuthorByIdResponse,
    requestSerialize: serialize_SeppoService_FetchAuthorByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchAuthorByIdRequest,
    responseSerialize: serialize_SeppoService_FetchAuthorByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchAuthorByIdResponse,
  },
  searchCopyrights: {
    path: '/SeppoService.Seppo/searchCopyrights',
    requestStream: false,
    responseStream: false,
    requestType: copyright_pb.SearchCopyrightsRequest,
    responseType: copyright_pb.SearchCopyrightsResponse,
    requestSerialize: serialize_SeppoService_SearchCopyrightsRequest,
    requestDeserialize: deserialize_SeppoService_SearchCopyrightsRequest,
    responseSerialize: serialize_SeppoService_SearchCopyrightsResponse,
    responseDeserialize: deserialize_SeppoService_SearchCopyrightsResponse,
  },
  fetchCopyrightById: {
    path: '/SeppoService.Seppo/fetchCopyrightById',
    requestStream: false,
    responseStream: false,
    requestType: copyright_pb.FetchCopyrightByIdRequest,
    responseType: copyright_pb.FetchCopyrightByIdResponse,
    requestSerialize: serialize_SeppoService_FetchCopyrightByIdRequest,
    requestDeserialize: deserialize_SeppoService_FetchCopyrightByIdRequest,
    responseSerialize: serialize_SeppoService_FetchCopyrightByIdResponse,
    responseDeserialize: deserialize_SeppoService_FetchCopyrightByIdResponse,
  },
  searchLogs: {
    path: '/SeppoService.Seppo/searchLogs',
    requestStream: false,
    responseStream: false,
    requestType: log_pb.SearchLogsRequest,
    responseType: log_pb.SearchLogsResponse,
    requestSerialize: serialize_SeppoService_SearchLogsRequest,
    requestDeserialize: deserialize_SeppoService_SearchLogsRequest,
    responseSerialize: serialize_SeppoService_SearchLogsResponse,
    responseDeserialize: deserialize_SeppoService_SearchLogsResponse,
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
  updateVariation: {
    path: '/SeppoService.Seppo/updateVariation',
    requestStream: false,
    responseStream: false,
    requestType: variation_pb.UpdateVariationRequest,
    responseType: variation_pb.UpdateVariationResponse,
    requestSerialize: serialize_SeppoService_UpdateVariationRequest,
    requestDeserialize: deserialize_SeppoService_UpdateVariationRequest,
    responseSerialize: serialize_SeppoService_UpdateVariationResponse,
    responseDeserialize: deserialize_SeppoService_UpdateVariationResponse,
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
  updateSongDatabase: {
    path: '/SeppoService.Seppo/updateSongDatabase',
    requestStream: false,
    responseStream: false,
    requestType: song_database_pb.UpdateSongDatabaseRequest,
    responseType: song_database_pb.UpdateSongDatabaseResponse,
    requestSerialize: serialize_SeppoService_UpdateSongDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_UpdateSongDatabaseRequest,
    responseSerialize: serialize_SeppoService_UpdateSongDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_UpdateSongDatabaseResponse,
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
  updateEwDatabase: {
    path: '/SeppoService.Seppo/updateEwDatabase',
    requestStream: false,
    responseStream: false,
    requestType: ew_database_pb.UpdateEwDatabaseRequest,
    responseType: ew_database_pb.UpdateEwDatabaseResponse,
    requestSerialize: serialize_SeppoService_UpdateEwDatabaseRequest,
    requestDeserialize: deserialize_SeppoService_UpdateEwDatabaseRequest,
    responseSerialize: serialize_SeppoService_UpdateEwDatabaseResponse,
    responseDeserialize: deserialize_SeppoService_UpdateEwDatabaseResponse,
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
  updateTag: {
    path: '/SeppoService.Seppo/updateTag',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.UpdateTagRequest,
    responseType: tag_pb.UpdateTagResponse,
    requestSerialize: serialize_SeppoService_UpdateTagRequest,
    requestDeserialize: deserialize_SeppoService_UpdateTagRequest,
    responseSerialize: serialize_SeppoService_UpdateTagResponse,
    responseDeserialize: deserialize_SeppoService_UpdateTagResponse,
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
  updateLanguage: {
    path: '/SeppoService.Seppo/updateLanguage',
    requestStream: false,
    responseStream: false,
    requestType: language_pb.UpdateLanguageRequest,
    responseType: language_pb.UpdateLanguageResponse,
    requestSerialize: serialize_SeppoService_UpdateLanguageRequest,
    requestDeserialize: deserialize_SeppoService_UpdateLanguageRequest,
    responseSerialize: serialize_SeppoService_UpdateLanguageResponse,
    responseDeserialize: deserialize_SeppoService_UpdateLanguageResponse,
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
  createSchedule: {
    path: '/SeppoService.Seppo/createSchedule',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.CreateScheduleRequest,
    responseType: schedule_pb.CreateScheduleResponse,
    requestSerialize: serialize_SeppoService_CreateScheduleRequest,
    requestDeserialize: deserialize_SeppoService_CreateScheduleRequest,
    responseSerialize: serialize_SeppoService_CreateScheduleResponse,
    responseDeserialize: deserialize_SeppoService_CreateScheduleResponse,
  },
  updateSchedule: {
    path: '/SeppoService.Seppo/updateSchedule',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.UpdateScheduleRequest,
    responseType: schedule_pb.UpdateScheduleResponse,
    requestSerialize: serialize_SeppoService_UpdateScheduleRequest,
    requestDeserialize: deserialize_SeppoService_UpdateScheduleRequest,
    responseSerialize: serialize_SeppoService_UpdateScheduleResponse,
    responseDeserialize: deserialize_SeppoService_UpdateScheduleResponse,
  },
  removeSchedule: {
    path: '/SeppoService.Seppo/removeSchedule',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.RemoveScheduleRequest,
    responseType: schedule_pb.RemoveScheduleResponse,
    requestSerialize: serialize_SeppoService_RemoveScheduleRequest,
    requestDeserialize: deserialize_SeppoService_RemoveScheduleRequest,
    responseSerialize: serialize_SeppoService_RemoveScheduleResponse,
    responseDeserialize: deserialize_SeppoService_RemoveScheduleResponse,
  },
  createAuthor: {
    path: '/SeppoService.Seppo/createAuthor',
    requestStream: false,
    responseStream: false,
    requestType: author_pb.CreateAuthorRequest,
    responseType: author_pb.CreateAuthorResponse,
    requestSerialize: serialize_SeppoService_CreateAuthorRequest,
    requestDeserialize: deserialize_SeppoService_CreateAuthorRequest,
    responseSerialize: serialize_SeppoService_CreateAuthorResponse,
    responseDeserialize: deserialize_SeppoService_CreateAuthorResponse,
  },
  updateAuthor: {
    path: '/SeppoService.Seppo/updateAuthor',
    requestStream: false,
    responseStream: false,
    requestType: author_pb.UpdateAuthorRequest,
    responseType: author_pb.UpdateAuthorResponse,
    requestSerialize: serialize_SeppoService_UpdateAuthorRequest,
    requestDeserialize: deserialize_SeppoService_UpdateAuthorRequest,
    responseSerialize: serialize_SeppoService_UpdateAuthorResponse,
    responseDeserialize: deserialize_SeppoService_UpdateAuthorResponse,
  },
  removeAuthor: {
    path: '/SeppoService.Seppo/removeAuthor',
    requestStream: false,
    responseStream: false,
    requestType: author_pb.RemoveAuthorRequest,
    responseType: author_pb.RemoveAuthorResponse,
    requestSerialize: serialize_SeppoService_RemoveAuthorRequest,
    requestDeserialize: deserialize_SeppoService_RemoveAuthorRequest,
    responseSerialize: serialize_SeppoService_RemoveAuthorResponse,
    responseDeserialize: deserialize_SeppoService_RemoveAuthorResponse,
  },
  createCopyright: {
    path: '/SeppoService.Seppo/createCopyright',
    requestStream: false,
    responseStream: false,
    requestType: copyright_pb.CreateCopyrightRequest,
    responseType: copyright_pb.CreateCopyrightResponse,
    requestSerialize: serialize_SeppoService_CreateCopyrightRequest,
    requestDeserialize: deserialize_SeppoService_CreateCopyrightRequest,
    responseSerialize: serialize_SeppoService_CreateCopyrightResponse,
    responseDeserialize: deserialize_SeppoService_CreateCopyrightResponse,
  },
  updateCopyright: {
    path: '/SeppoService.Seppo/updateCopyright',
    requestStream: false,
    responseStream: false,
    requestType: copyright_pb.UpdateCopyrightRequest,
    responseType: copyright_pb.UpdateCopyrightResponse,
    requestSerialize: serialize_SeppoService_UpdateCopyrightRequest,
    requestDeserialize: deserialize_SeppoService_UpdateCopyrightRequest,
    responseSerialize: serialize_SeppoService_UpdateCopyrightResponse,
    responseDeserialize: deserialize_SeppoService_UpdateCopyrightResponse,
  },
  removeCopyright: {
    path: '/SeppoService.Seppo/removeCopyright',
    requestStream: false,
    responseStream: false,
    requestType: copyright_pb.RemoveCopyrightRequest,
    responseType: copyright_pb.RemoveCopyrightResponse,
    requestSerialize: serialize_SeppoService_RemoveCopyrightRequest,
    requestDeserialize: deserialize_SeppoService_RemoveCopyrightRequest,
    responseSerialize: serialize_SeppoService_RemoveCopyrightResponse,
    responseDeserialize: deserialize_SeppoService_RemoveCopyrightResponse,
  },
};

exports.SeppoClient = grpc.makeGenericClientConstructor(SeppoService);
// Queries
