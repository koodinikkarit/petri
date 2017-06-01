
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "ExecutorAction",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		name: {
			type: GraphQLString
		},
		executorId: {
			type: GraphQLInt
		},
		actionType: {
			type: GraphQLString
		},
		parameters: {
			type: GraphQLString
		},
		executor: {
			type: classes.Executor
		}
	})
})