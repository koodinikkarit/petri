import {
    GraphQLObjectType,
    GraphQLInt,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: "EthernetInterface",
	fields: () => ({
		id: {
			type: GraphQLString
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
			type: GraphQLString
		},
		flags: {
			type: GraphQLInt
		}
	})
})