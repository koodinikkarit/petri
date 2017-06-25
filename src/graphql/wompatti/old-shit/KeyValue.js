import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

var Base64 = require('js-base64').Base64;

import FetchDeviceInfoByIdResponse from "./FetchDeviceInfoByIdResponse";

export default new GraphQLObjectType({
	name: "KeyValue",
	fields: () => ({
		id: {
			type: GraphQLString,
			resolve: (that, args) => {
				return Base64.encode("kev_" + that.id);
			}
		},
		deviceInfo: {
			type: FetchDeviceInfoByIdResponse
		},
		key: {
			type: GraphQLString
		},
		value: {
			type: GraphQLString
		}
	})
})