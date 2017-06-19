
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Arttu",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		computerId: {
			type: GraphQLInt
		},
		computerWolDevice: {
			type: classes.FetchComputerWolDeviceResponse
		},
		arttuEthernetInterfaces: {
			type:  new GraphQLList(classes.EthernetInterface)
		}
	})
})