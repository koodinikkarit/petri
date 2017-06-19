import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} from "graphql";

import DeviceInfo from "./DeviceInfo";

export default new GraphQLObjectType({
	name: "Device",
	fields: () => ({
		id: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		deviceInfo: {
			type: DeviceInfo
		}
	})
})
