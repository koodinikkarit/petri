import {
    GraphQLObjectType,
    GraphQLInt
} from "graphql";

import Computer from "./Computer"
import DeviceInfo from "./DeviceInfo";

export default new GraphQLObjectType({
	name: "CreateComputerResponse",
	fields: () => ({
		computer: {
			type: Computer
		},
		deviceInfo: {
			type: DeviceInfo
		}
	})
})