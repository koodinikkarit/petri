import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

import Device from "./Device";

export default new GraphQLObjectType({
	name: "FetchDeviceByIdResponse",
	fields: () => ({
		state: {
			type: GraphQLString
		},
		device: {
			type: Device
		}
	})
})