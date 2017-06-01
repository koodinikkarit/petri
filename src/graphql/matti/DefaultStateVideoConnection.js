
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "DefaultStateVideoConnection",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		conPortId: {
			type: GraphQLInt
		},
		cpuPortId: {
			type: GraphQLInt
		},
		defaultStateId: {
			type: GraphQLInt
		},
		conPort: {
			type: classes.ConPort
		},
		cpuPort: {
			type: classes.ConPort
		},
		defaultState: {
			type: classes.DefaultState
		}
	})
})