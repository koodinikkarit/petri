import {
	DomainEntity,
	ListType,
	IntType,
	BooleanType
} from "grpc-graphql-router-tools";

import EwDatabase from "./EwDatabase";

export const EwDatabasesConnection = new DomainEntity({
	name: "EwDatabaseConnection",
	fields: () => ({
		maxEwDatabases: {
			type: IntType
		},
		ewDatabases: {
			type: new ListType(EwDatabase)
		}
	})
});

export const CreateEwDatabaseResponse = new DomainEntity({
	name: "CreateEwDatabaseResponse",
	fields: () => ({
		ewDatabase: {
			type: EwDatabase
		}
	})
});

export const UpdateEwDatabaseResponse = new DomainEntity({
	name: "UpdateEwDatabaseresponse",
	fields: () => ({
		success: {
			type: BooleanType
		},
		ewDatabase: {
			type: EwDatabase
		}
	})
});

export const RemoveEwDatabaseResponse = new DomainEntity({
	name: "RemoveEwDatabaseResponse",
	fields: () => ({
		success: {
			type: BooleanType
		}
	})
});