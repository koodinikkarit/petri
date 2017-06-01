import {
    GraphQLObjectType,
} from "graphql";

import {
	MattiServiceMutations
} from "./matti";

import {
	WompattiServiceMutations
} from "./wompatti";

import {
	RistoServiceMutations
} from "./risto";

import {
	PekkaServiceMutations
} from "./pekka";

export default new GraphQLObjectType({
	name: "MutationType",
	fields: () => Object.assign(
		MattiServiceMutations,
		WompattiServiceMutations,
		RistoServiceMutations,
		PekkaServiceMutations
	)
});