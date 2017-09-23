import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} from "graphql";

import EwDatabase from "./EwDatabase";

export default new GraphQLObjectType({
	name: "EwDatabase",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		key: {
			type: GraphQLString
		},
		songDatabase: {
			type: EwDatabase
		}
	})
});