
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Matrix",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		ip: {
			type: GraphQLString
		},
		port: {
			type: GraphQLInt
		},
		slug: {
			type: GraphQLString
		},
		numberOfConPorts: {
			type: GraphQLInt
		},
		numberOfCpuPorts: {
			type: GraphQLInt
		},
		conPorts: {
			type:  new GraphQLList(classes.ConPort)
		},
		cpuPorts: {
			type:  new GraphQLList(classes.CpuPort)
		}
	})
})