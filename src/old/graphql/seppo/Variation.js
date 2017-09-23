import {
	GraphQLInt,
	GraphQLID,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} from "graphql";

import Tag from "./Tag";
import SongDatabase from "./SongDatabase";
import Language from "./Language";

export default new GraphQLObjectType({
	name: "Variation",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		text: {
			type: GraphQLString
		},
		version: {
			type: GraphQLInt
		},
		languageId: {
			type: GraphQLID
		},
		language: {
			type: Language
		},
		tags: {
			type: new GraphQLList(Tag)
		},
		songDatabases: {
			type: new GraphQLList(SongDatabase)
		}
	})
});