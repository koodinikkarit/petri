import {
	DomainEntity,
	IdType,
	StringType
} from "grpc-graphql-router-tools";

import {
	Variation
} from "./Variation";

export const VariationText = new DomainEntity({
	name: "VariationText",
	fields: () => ({
		id: {
			type: IdType
		},
		variation: {
			type: Variation
		},
		text: {
			type: StringType
		}
	})
});