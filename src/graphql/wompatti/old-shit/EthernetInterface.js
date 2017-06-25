import {
    GraphQLObjectType,
    GraphQLInt,
	GraphQLString
} from "graphql";

import {
	Base64
} from "js-base64";

export default new GraphQLObjectType({
	name: "EthernetInterface",
	fields: () => ({
		id: {
			type: GraphQLString,
			resolve: (that, args) => {
				return Base64.encode("etin_" + that.id)
			}
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