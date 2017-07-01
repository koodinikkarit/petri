import { merge } from 'lodash';

import { makeExecutableSchema } from 'graphql-tools';

import {
	Queries as wompattiQueries,
	Mutations as wompattiMutations,
	resolvers as wompattiResolvers
} from "./wompatti";

export default makeExecutableSchema({
	typeDefs: [
		wompattiQueries,
		wompattiMutations,
		`
		schema {
			query: Query
			mutation: Mutation
		}
		`
	],
	resolvers: merge(
		wompattiResolvers
	)
});