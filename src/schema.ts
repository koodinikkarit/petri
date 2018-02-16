import { makeExecutableSchema } from "graphql-tools";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

import { resolvers } from "./resolvers";

import { typeDefs } from "./schemadef";

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});
