import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} from "graphql";

import EthernetInterface from "./EthernetInterface";

export default new GraphQLObjectType({
	name: "WolInterface",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		ethernetInterface: {
			type: EthernetInterface
		},
		mac: {
			type: GraphQLString
		}
	})
});