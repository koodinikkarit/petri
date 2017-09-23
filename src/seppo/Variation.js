import {
	DomainEntity,
	IdType,
	StringType,
	IntType
} from "grpc-graphql-router-tools";

export default new DomainEntity({
	name: "Variation",
	fields: {
		id: {
			type: IdType
		},
		name: {
			type: StringType
		},
		version: {
			type: IntType
		},
		text: {
			type: StringType,
			inhertedArgs: {
				id: "variationId"
			},
			serviceMethod: "fetchVariationTextByVariationId",
			returnField: "text"
		}
	}
});