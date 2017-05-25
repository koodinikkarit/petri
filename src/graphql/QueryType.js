import {
    GraphQLObjectType
} from "graphql";

import {
	MattiServiceQueries
} from "./matti";

import {
	WompattiServiceQueries
} from "./wompatti";

import {
	RistoServiceQueries
} from "./risto";

export default new GraphQLObjectType({
	name: "QueryType",
	fields: () => Object.assign(
		MattiServiceQueries,
		WompattiServiceQueries,
		RistoServiceQueries
	)
});