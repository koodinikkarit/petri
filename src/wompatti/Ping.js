import {
	DomainEntity,
	BooleanType,
	StringType
} from "grpc-graphql-router-tools";

export const PingResponse = new DomainEntity({
	name: "PingResponse",
	fields: () => ({
		rtt: {
			type: StringType
		},
		addr: {
			type: StringType
		},
		success: {
			type: BooleanType
		}
	})
});