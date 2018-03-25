"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_client_1 = require("apollo-client");
var apollo_link_1 = require("apollo-link");
var apollo_link_ws_1 = require("apollo-link-ws");
var apollo_utilities_1 = require("apollo-utilities");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_link_http_1 = require("apollo-link-http");
exports.createPetriClient = function (args) {
    var protocol = window.location.protocol;
    var isHttps = protocol.includes("https:");
    var wsProtocol = isHttps ? "wss" : "ws";
    var graphqlAddress = protocol + "//" + args.graphqlHost + ":" + args.graphqlPort + "/graphql";
    var subscriptionsAddress = wsProtocol + "//" + args.graphqlSubscriptionsHost + ":" + args.graphqlSubscriptionsPort + "/subscriptions";
    var cache = new apollo_cache_inmemory_1.InMemoryCache();
    var httpLink = apollo_link_http_1.createHttpLink({
        uri: graphqlAddress,
        credentials: "include"
    });
    var wsLink = new apollo_link_ws_1.WebSocketLink({
        uri: subscriptionsAddress,
        options: {
            reconnect: true,
            lazy: true
        }
    });
    var link = apollo_link_1.split(function (_a) {
        var query = _a.query;
        var definition = apollo_utilities_1.getMainDefinition(query);
        return (definition.kind === "OperationDefinition" &&
            definition.operation === "subscription");
    }, wsLink, apollo_link_1.ApolloLink.from([httpLink]));
    return new apollo_client_1.ApolloClient({
        link: link,
        cache: cache
    });
};
