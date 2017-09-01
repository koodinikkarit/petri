import {
	GraphQLInt,
	GraphQLID,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLList
} from "graphql";

import Variation from "./Variation";

export const CreateVariationInput = new GraphQLInputObjectType({
	name: "CreateVariationInput",
	fields: () => ({
		name: {
			type: GraphQLString
		},
		text: {
			type: GraphQLString
		}
	})
});

export const EditVariationInput = new GraphQLInputObjectType({
	name: "EditVariationInput",
	fields: () => ({
		variationId: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		text: {
			type: GraphQLString
		},
		songId: {
			type: GraphQLID
		},
		languageId: {
			type: GraphQLID
		}
	})
});

export const SearchVariationsInput = new GraphQLInputObjectType({
	name: "SearchVariationsInput",
	fields: () => ({
		searchWord: {
			type: GraphQLString
		},
		songDatabaseId: {
			type: GraphQLID
		},
		songDatabaseFilterId: {
			type: GraphQLID
		}
	})
});

export const SearchVariationsOutput = new GraphQLObjectType({
	name: "SearchVariationsOutput",
	fields: () => ({
		variations: {
			type: new GraphQLList(Variation)
		},
		maxVariations: {
			type: GraphQLInt
		}
	})
});