import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./typeDef";
import resolvers from "./resolvers";

export default makeExecutableSchema({
	typeDefs,
	resolvers
});
