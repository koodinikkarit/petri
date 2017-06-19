
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Computer",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		arttuId: {
			type: GraphQLInt
		},
		deviceInfoId: {
			type: GraphQLInt
		},
		computerWolDevice: {
			type: classes.FetchComputerWolDeviceResponse
		},
		arttuDevice: {
			type: classes.FetchArttuDeviceByIdResponse
		},
		arttuEthernetInterfaces: {
			type:  new GraphQLList(classes.EthernetInterface)
		}
	})
})