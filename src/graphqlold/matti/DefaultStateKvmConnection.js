
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "DefaultStateKvmConnection",
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
			type: classes.FetchConPortByIdResponse
		},
		cpuPort: {
			type: classes.FetchConPortByIdResponse
		},
		defaultState: {
			type: classes.FetchDefaultStateByIdResponse
		}
	})
})