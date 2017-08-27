
import {
	GraphQLObjectType,
	GraphQLSchema,
} from "graphql";

import {
	queries as seppoQueries,
	mutations as seppoMutations	
} from "./seppo";



const rootQueryType = new GraphQLObjectType({
	name: "QueryType",
	fields: () => ({
		...seppoQueries	
	})
});

const rootMutationType = new GraphQLObjectType({
	name: "MutationType",
	fields: () => ({
		...seppoMutations
	})
});

export default new GraphQLSchema({
	query: rootQueryType,
	mutation: rootMutationType
});