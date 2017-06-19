
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "KeyValue",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		deviceInfoId: {
			type: GraphQLInt
		},
		key: {
			type: GraphQLString
		},
		value: {
			type: GraphQLString
		},
		
	})
})