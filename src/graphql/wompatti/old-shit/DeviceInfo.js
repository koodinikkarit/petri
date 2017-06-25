import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import {
	Base64
} from "js-base64";
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