
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Keijo",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		name: {
			type: GraphQLString
		},
		ip: {
			type: GraphQLString
		},
		port: {
			type: GraphQLString
		},
		
	})
})