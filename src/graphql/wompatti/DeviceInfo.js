import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

var Base64 = require('js-base64').Base64;

import FetchKeyValuesByDeviceInfoIdResponse from "./FetchKeyValuesByDeviceInfoIdResponse";

export default new GraphQLObjectType({
	name: "DeviceInfo",
	fields: () => ({
		id: {
			type: GraphQLString,
			resolve: (that, args) => {
				return Base64.encode("devi_" + that.id);
			}
		},
		keyValues: {
			type: FetchKeyValuesByDeviceInfoIdResponse
		}
	})
})