import {
    GraphQLSchema,
	GraphQLObjectType
} from "graphql";

import {
	WompattiQueries,
	WompattiMutations
} from "./wompatti";

export default new GraphQLSchema({
	query: new GraphQLObjectType({
		"name": "QueryType",
		fields: () => Object.assign(
			WompattiQueries
		)
	}),
	mutation: new GraphQLObjectType({
		"name": "MutationType",
		fields: () => Object.assign(
			WompattiMutations
		)
	})
});
