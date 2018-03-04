import { introspectSchema, makeRemoteExecutableSchema } from "graphql-tools";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink, createHttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import { seppoIp, seppoPort } from "../config";

export const getSeppoExecutableSchema = async () => {
	const httpLink = createHttpLink({
		uri: `http://${seppoIp}:${seppoPort}/graphql`,
		fetch
	});

	const errorLink = onError(({ graphQLErrors, networkError }) => {});

	const link = ApolloLink.from([httpLink, errorLink]);

	const schema = await introspectSchema(link);

	const executableSchema = makeRemoteExecutableSchema({
		schema,
		link
	});

	return executableSchema;
};
