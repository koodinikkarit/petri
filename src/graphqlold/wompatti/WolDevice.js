
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "WolDevice",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		computerId: {
			type: GraphQLInt
		},
		ethernetInterface: {
			type: GraphQLInt
		},
		
	})
})