
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "CreateDeviceResponse",
	fields: () => ({
		device: {
			type: undefined
		},
		deviceInfo: {
			type: undefined
		},
		
	})
})