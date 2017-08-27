import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLList
} from "graphql";

import SongDatabase from "./SongDatabase";

export default new GraphQLObjectType({
	name: "SongDatabase",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		variations: {
			type: new GraphQLList(SongDatabase)
		}
	})
});