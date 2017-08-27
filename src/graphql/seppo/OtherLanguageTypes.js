import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLInt
} from "graphql";

import Language from "./Language";

export const LanguagesConnection = new GraphQLObjectType({
	name: "languagesConnection",
	fields: () => ({
		languages: {
			type: new GraphQLList(Language)
		},
		maxLanguages: {
			type: GraphQLInt
		}
	})
});

export const SearchLanguagesInput = new GraphQLInputObjectType({
	name: "SearchLanguagesInput",
	fields: () => ({
		id: {
			type: GraphQLID
		}
	})
});

export const CreateLanguageInput = new GraphQLInputObjectType({
	name: "CreateLanguageInput",
	fields: () => ({
		name: {
			type: GraphQLString
		}
	})
});

export const EditLanguageInput = new GraphQLInputObjectType({
	name: "EditLanguageInput",
	fields: () => ({
		languageId: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		}
	})
});
