import { ApolloClient } from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
export declare const createPetriClient: (args: {
    graphqlHost: string;
    graphqlPort: number;
    graphqlSubscriptionsHost: string;
    graphqlSubscriptionsPort: number;
}) => ApolloClient<NormalizedCacheObject>;
