import {
	METHOD_TYPES
} from "grpc-graphql-router-tools";

import {
	VariationVersion
} from "./VariationVersion";

export default {
	fetchVariationVersionById: {
		name: "variationVersion",
		returnField: "variationVersions",
		type: VariationVersion,
		methodType: METHOD_TYPES.QUERY,
		dataLoader: {
			name: "variationVersionId",
			serviceTypeName: "variationVersionIds",
			returnField: "variationVersions"
		}
	}
};