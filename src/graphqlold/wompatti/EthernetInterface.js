
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "EthernetInterface",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		name: {
			type: GraphQLString
		},
		mac: {
			type: GraphQLString
		},
		index: {
			type: GraphQLInt
		},
		mtu: {
			type: GraphQLInt
		},
		flags: {
			type: GraphQLInt
		},
		
	})
})