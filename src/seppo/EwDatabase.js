import {
	DomainEntity,
	IdType,
	StringType
} from "grpc-graphql-router-tools";

export default new DomainEntity({
	name: "EwDatabase",
	fields: {
		id: {
			type: IdType
		},
		name: {
			type: StringType
		}
	}
});