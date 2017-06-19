
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		username: {
			type: GraphQLString
		},
		
	})
})