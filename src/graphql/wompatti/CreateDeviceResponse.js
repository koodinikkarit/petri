import {
	GraphQLObjectType,
	GraphQLInt
} from "graphql";

import Device from "./Device";

export default new GraphQLObjectType({
	name: "CreateDeviceResponse",
	fields: () => ({
		state: {
			type: GraphQLInt
		},
		device: {
			type: Device
		}
	})
})