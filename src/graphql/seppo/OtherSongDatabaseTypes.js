import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLID,
	GraphQLInt
} from "graphql";

import SongDatabase from "./SongDatabase";

export const SongDatabasesConnection = new GraphQLObjectType({
	name: "SongDatabasesConnection",
	fields: () => ({
		songDatabases: {
			type: new GraphQLList(SongDatabase)
		}
	})
});

export const CreateSongDatabaseInput = new GraphQLInputObjectType({
	name: "CreateSongDatabaseInput",
	fields: () => ({
		name: {
			type: GraphQLString
		}
	})
});

export const EditSongDatabaseInput = new GraphQLInputObjectType({
	name: "EditSongDatabaseInput",
	fields: () => ({
		songDatabaseId: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		addTagIds: {
			type: new GraphQLList(GraphQLID)
		},
		removeTagIds: {
			type: new GraphQLList(GraphQLID)
		}
	})
});

export const SearchSongDatabasesInput = new GraphQLInputObjectType({
	name: "SearchSongDatabases",
	fields: () => ({
		offset: {
			type: GraphQLInt
		},
		limit: {
			type: GraphQLInt
		},
		searchWord: {
			type: GraphQLString
		}
	})
});