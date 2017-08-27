import {
	merge
} from "lodash";

import { default as Queries } from "./Queries";

console.log("ristoQueries", Queries);

export {
	Queries
}

import QueryResolvers from "./QueryResolvers";

export const resolvers = {
	Query: QueryResolvers
}