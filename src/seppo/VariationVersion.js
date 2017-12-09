import {
	DomainEntity,
	IdType,
	StringType,
	IntType
} from "grpc-graphql-router-tools";

import {
	Variation
} from "./Variation";

export const VariationVersion = new DomainEntity({
	name: "VariationVersion",
	fields: () => ({
		id: {
			type: IdType
		},
		name: {
			type: StringType
		},
		text: {
			type: StringType
		},
		version: {
			type: IntType
		},
		createdAt: {
			type: StringType
		},
		disabledAt: {
			type: StringType
		},
		variation: {
			type: Variation,
			inhertedArgs: {
				variationId: "variationId"
			},
			serviceMethod: "fetchVariationById"
		}
	})
});