import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} from "graphql";

import DeviceInfo from "./DeviceInfo";
import KeyValue from "./KeyValue";

export default new GraphQLObjectType({
	name: "FetchKeyValuesByDeviceInfoId",
	fields: () => ({
		deviceInfo: {
			type: DeviceInfo
		},
		keyValues: {
			type: new GraphQLList(KeyValue)
		}
	})
})