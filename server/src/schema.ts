import { makeExecutableSchema } from "graphql-tools";

import { typeDefs } from "./schemadef";

import { resolvers } from "./resolvers";

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});
