
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "CreateComputerResponse",
	fields: () => ({
		computer: {
			type: undefined
		},
		deviceInfo: {
			type: undefined
		},
		
	})
})