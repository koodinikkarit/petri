
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Token",
	fields: () => ({
		token: {
			type: GraphQLString
		},
		
	})
})