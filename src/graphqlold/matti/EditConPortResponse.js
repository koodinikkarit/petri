
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "EditConPortResponse",
	fields: () => ({
		conPort: {
			type: undefined
		},
		success: {
			type: GraphQLBoolean
		},
		state: {
			type: undefined
		},
		
	})
})