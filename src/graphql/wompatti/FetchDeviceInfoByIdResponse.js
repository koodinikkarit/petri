import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

import DeviceInfo from "./DeviceInfo";

export default new GraphQLObjectType({
	name: "FetchDeviceInfoByIdResponse",
	fields: () => ({
		state: {
			type: GraphQLString
		},
		deviceInfo: {
			type: DeviceInfo
		}
	})
})