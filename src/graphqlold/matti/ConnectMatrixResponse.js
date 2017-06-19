
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "ConnectMatrixResponse",
	fields: () => ({
		matrix: {
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