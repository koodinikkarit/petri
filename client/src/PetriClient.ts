import { BatchHttpLink } from "apollo-link-batch-http";
import { ApolloClient } from "apollo-client";
import { ApolloLink, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { createApolloFetch } from "apollo-fetch";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

export const createPetriClient = (args: {
	graphqlHost: string;
	graphqlPort: number;
	graphqlSubscriptionsHost: string;
	graphqlSubscriptionsPort: number;
}) => {
	const protocol = window.location.protocol;
	const isHttps = protocol.includes("https:");
	const wsProtocol = isHttps ? "wss" : "ws";

	const graphqlAddress = `${protocol}//${args.graphqlHost}${
		args.graphqlPort && !isNaN(args.graphqlPort)
			? `:${args.graphqlPort}`
			: ""
	}/graphql`;

	const subscriptionsAddress = `${wsProtocol}//${
		args.graphqlSubscriptionsHost
	}${
		args.graphqlPort && !isNaN(args.graphqlPort)
			? `:${args.graphqlSubscriptionsPort}`
			: ""
	}/subscriptions`;

	const cache = new InMemoryCache();

	const httpLink = createHttpLink({
		uri: graphqlAddress,
		credentials: "include"
	});

	const wsLink = new WebSocketLink({
		uri: subscriptionsAddress,
		options: {
			reconnect: true,
			lazy: true
		}
	});

	const link = split(
		({ query }) => {
			const definition = getMainDefinition(query);
			return (
				definition.kind === "OperationDefinition" &&
				definition.operation === "subscription"
			);
		},
		wsLink,
		ApolloLink.from([httpLink])
	);

	return new ApolloClient({
		link,
		cache
	});
};
