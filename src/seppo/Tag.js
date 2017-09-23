import {
	DomainEntity,
	IdType,
	StringType
} from "grpc-graphql-router-tools";

export default new DomainEntity({
	name: "Tagadfasga",
	fields: {
		id: {
			type: IdType
		},
		name: {
			type: StringType
		}
	}
});
