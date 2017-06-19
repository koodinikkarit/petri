
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "RemoveCpuFromDiagramScreenResponse",
	fields: () => ({
		success: {
			type: GraphQLBoolean
		},
		state: {
			type: undefined
		},
		
	})
})