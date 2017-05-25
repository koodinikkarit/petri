
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "ConPort",
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
		portNum: {
			type: GraphQLInt
		},
		matrix: {
			type: classes.Matrix
		},
		cpuPorts: {
			type:  new GraphQLList(classes.CpuPort)
		}
	})
})