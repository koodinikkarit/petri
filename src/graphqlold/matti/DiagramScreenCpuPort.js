
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "DiagramScreenCpuPort",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		diagramScreenId: {
			type: GraphQLInt
		},
		cpuPortId: {
			type: GraphQLInt
		},
		diagramScreen: {
			type: classes.FetchDiagramScreenByIdResponse
		}
	})
})