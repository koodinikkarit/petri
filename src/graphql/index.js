import { merge } from 'lodash';

import { makeExecutableSchema } from 'graphql-tools';

import {
	Queries as wompattiQueries,
	Mutations as wompattiMutations,
	resolvers as wompattiResolvers
} from "./wompatti";

import { default as Queries } from "./wompatti/Queries";

//console.log("QUERIES2", Queries, Queries());
console.log("QUERIES2", wompattiMutations);

var schema = `
	schema {
		query: Query
	}
`

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
	]
});


// ,
// 	resolvers: merge(
// 		wompattiResolvers
// 	)



// import {
//     GraphQLSchema,
// 	GraphQLObjectType
// } from "graphql";

// import {
// 	WompattiQueries,
// 	WompattiMutations
// } from "./wompatti";

// export default new GraphQLSchema({
// 	query: new GraphQLObjectType({
// 		"name": "QueryType",
// 		fields: () => Object.assign(
// 			WompattiQueries
// 		)
// 	}),
// 	mutation: new GraphQLObjectType({
// 		"name": "MutationType",
// 		fields: () => Object.assign(
// 			WompattiMutations
// 		)
// 	})
// });
