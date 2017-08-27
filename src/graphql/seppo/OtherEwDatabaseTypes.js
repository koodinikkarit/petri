import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLID,
	GraphQLInt
} from "graphql";

import EwDatabase from "./EwDatabase";

export const EwDatabasesConnection = new GraphQLObjectType({
	name: "EwDatabasesConnection",
	fields: () => ({
		ewDatabases: {
			type: new GraphQLList(EwDatabase)
		}
	})
});

export const CreateEwDatabaseInput = new GraphQLInputObjectType({
	name: "CreateEwDatabaseInput",
	fields: () => ({
		name: {
			type: GraphQLString
		},
		songDatabaseId: {
			type: GraphQLID
		}
	})
});

export const EditEwDatabaseInput = new GraphQLInputObjectType({
	name: "EditEwDatabaseInput",
	fields: () => ({
		ewDatabaseId: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		}
	})
});

export const SearchEwDatabasesInput = new GraphQLInputObjectType({
	name: "SearchEwDatabasesInput",
	fields: () => ({
		offset: {
			type: GraphQLInt
		},
		limit: {
			type: GraphQLInt
		}
	})
});