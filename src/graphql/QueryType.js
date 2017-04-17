import {
    GraphQLObjectType
} from "graphql";

import {
	queries as mattiQueries
} from "./matti";

import {
	queries as wompattiQueries
} from "./wompatti/";

export default new GraphQLObjectType({
	name: "QueryType",
	fields: () => Object.assign(
		mattiQueries,
		wompattiQueries
	)
});