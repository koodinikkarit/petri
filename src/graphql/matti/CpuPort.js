
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "CpuPort",
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
		conPorts: {
			type:  new GraphQLList(classes.ConPort)
		}
	})
})