import {
	DomainEntity,
	IdType,
	IntType,
	StringType,
	ListType
} from "grpc-graphql-router-tools";

export const Log = new DomainEntity({
	name: "Log",
	fields: () => ({
		id: {
			type: IdType
		},
		logType: {
			type:IntType
		},
		message: {
			type: StringType
		},
		messageDate: {
			type: IdType
		}
	})
});

export const LogsConnection = new DomainEntity({
	name: "LogsConnection",
	fields: () => ({
		logs: {
			type: new ListType(Log)
		},
		maxLogs: {
			type: IntType
		}
	})
});