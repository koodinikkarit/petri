import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from "graphql";

import EthernetInterface from "./EthernetInterface";

export default new GraphQLObjectType({
	name: "WolInterface",
	fields: () => ({
		id: {
			type: GraphQLString
		},
		ethernetInterface: {
			type: EthernetInterface
		},
		mac: {
			type: GraphQLString
		}
	})
})