
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "CreateTokenResponse",
	fields: () => ({
		token: {
			type: undefined
		},
		state: {
			type: undefined
		},
		
	})
})