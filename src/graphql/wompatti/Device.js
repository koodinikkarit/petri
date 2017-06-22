import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} from "graphql";

import {
	Base64
} from "js-base64";

import DeviceInfo from "./DeviceInfo";

export default new GraphQLObjectType({
	name: "Device",
	fields: () => ({
		id: {
			type: GraphQLString,
			resolve: (that, args) => {
				return Base64.encode("dece_" + that.id)
			}
		},
		name: {
			type: GraphQLString
		},
		deviceInfo: {
			type: DeviceInfo
		}
	})
})
