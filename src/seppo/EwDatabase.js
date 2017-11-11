import {
	DomainEntity,
	IdType,
	StringType,
	BooleanType,
	IntType,
	ListType
} from "grpc-graphql-router-tools";

import {
	SongDatabase
} from "./SongDatabase";

export const EwDatabase = new DomainEntity({
	name: "EwDatabase",
	fields: () => ({
		id: {
			type: IdType
		},
		name: {
			type: StringType
		},
		databaseKey: {
			type: StringType
		},
		songDatabaseId: {
			type: IdType
		},
		removeSongsFromExternalDatabase: {
			type: BooleanType
		},
		removeSongsFromSongDatabase: {
			type: BooleanType
		},
		variationVersionConflictAction: {
			type: IntType
		},
		songDatabase: {
			type: SongDatabase,
			intertedArgs: {
				songDatabaseId: "songDatabaseId"
			},
			serviceMethod: "fetchSongDatabaseById",
			returnField: "songDatabase"
		}
	})
});

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