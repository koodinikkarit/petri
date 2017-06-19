
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Button",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		number: {
			type: GraphQLInt
		},
		penttiId: {
			type: GraphQLInt
		},
		onExecutorId: {
			type: GraphQLInt
		},
		offExecutorId: {
			type: GraphQLInt
		},
		pentti: {
			type: classes.FetchPenttiByIdResponse
		}
	})
})