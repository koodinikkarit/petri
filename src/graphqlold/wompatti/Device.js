
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Device",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		deviceInfoId: {
			type: GraphQLInt
		},
		
	})
})