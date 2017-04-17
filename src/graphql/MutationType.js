import {
    GraphQLObjectType,
} from "graphql";

import {
	mutations as mattiMutations
} from "./matti";

import {
	mutations as wompattiMutations
} from "./wompatti";

export default new GraphQLObjectType({
	name: "MutationType",
	fields: () => Object.assign(
		mattiMutations,
		wompattiMutations
	)
});