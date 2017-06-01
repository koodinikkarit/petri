
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "DefaultState",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		slug: {
			type: GraphQLString
		},
		matrixId: {
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
		}
	})
})