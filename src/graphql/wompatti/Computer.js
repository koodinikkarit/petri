import {
    GraphQLObjectType,
    GraphQLInt,
	GraphQLString
} from "graphql";

var Base64 = require('js-base64').Base64;

import Arttu from "./Arttu";
import DeviceInfo from "./DeviceInfo";
import FetchDeviceInfoByIdResponse from "./FetchDeviceInfoByIdResponse";

export default new GraphQLObjectType({
	name: "Computer",
	fields: () => ({
		id: {
			type: GraphQLString,
			resolve: (that, args) => {
				return Base64.encode("com_" + that.id);
			}
		},
		arttu: {
			type: Arttu
		},
		deviceInfo: {
			type: FetchDeviceInfoByIdResponse
		},
		name: {
			type: GraphQLString
		}
	})
})