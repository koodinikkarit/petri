import {
	makeExecutableSchema,
	makeRemoteExecutableSchema,
	mergeSchemas
} from "graphql-tools";
import { HttpLink } from "apollo-link-http";
import { BatchHttpLink } from "apollo-link-batch-http";

import { typeDefs } from "./schemadef";
import { getSeppoExecutableSchema } from "./seppo";

export const getSchema = async () => {
	try {
		return mergeSchemas({
			schemas: [await getSeppoExecutableSchema()]
		});
	} catch (e) {
		console.log("getSchema failed", e);
	}
};
