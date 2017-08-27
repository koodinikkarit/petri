import { merge } from 'lodash';

import { makeExecutableSchema } from 'graphql-tools';

import {
	Queries as wompattiQueries,
	Mutations as wompattiMutations,
	resolvers as wompattiResolvers
} from "./wompatti";

import {
	Queries as seppoQueries,
	Mutations as seppoMutations,
	resolvers as seppoResolvers
} from "./seppo";

import {
	Queries as ristoQueries,
	resolvers as ristoResolvers
} from "./risto";

console.log("Queries", ristoQueries(), ristoQueries);

export default makeExecutableSchema({
	typeDefs: [
		wompattiQueries,
		wompattiMutations,
		seppoQueries,
		seppoMutations,
		ristoQueries,
		`
		schema {
			query: Query
			mutation: Mutation
		}
		`
	],
	resolvers: merge(
		wompattiResolvers,
		seppoResolvers,
		ristoResolvers
	)
});