
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "DiagramScreen",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		slug: {
			type: GraphQLString
		},
		diagramId: {
			type: GraphQLInt
		},
		matrixId: {
			type: GraphQLInt
		},
		conPortId: {
			type: GraphQLInt
		},
		matrix: {
			type: classes.Matrix
		},
		conPorts: {
			type:  new GraphQLList(classes.ConPort)
		},
		cpuPorts: {
			type:  new GraphQLList(classes.CpuPort)
		},
		conPort: {
			type: classes.ConPort
		},
		cpuPort: {
			type: classes.ConPort
		},
		diagram: {
			type: classes.Diagram
		}
	})
})