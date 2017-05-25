
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Computer",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		name: {
			type: GraphQLString
		},
		mac: {
			type: GraphQLString
		},
		
	})
})