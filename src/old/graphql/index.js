
import {
	GraphQLObjectType,
	GraphQLSchema,
} from "graphql";

import {
	queries as seppoQueries,
	mutations as seppoMutations	
} from "./seppo";

import {
	queries as wompattiQueries,
	mutations as wompattiMutations
} from "./wompatti";

const rootQueryType = new GraphQLObjectType({
	name: "QueryType",
	fields: () => ({
		...seppoQueries,
		...wompattiQueries
	})
});

const rootMutationType = new GraphQLObjectType({
	name: "MutationType",
	fields: () => ({
		...seppoMutations,
		...wompattiMutations
	})
});

export default new GraphQLSchema({
	query: rootQueryType,
	mutation: rootMutationType
});