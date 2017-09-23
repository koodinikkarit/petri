import {
	DomainEntity,
	ListType,
	IntType,
	BooleanType
} from "grpc-graphql-router-tools";

import SongDatabase from "./SongDatabase";

export const SongDatabasesConnection = new DomainEntity({
	name: "SongDatabasesConnection",
	fields: {
		maxSongDatabase: {
			type: IntType
		},
		songDatabases: {
			type: new ListType(SongDatabase)
		}
	}
});

export const CreateSongDatabaseResponse = new DomainEntity({
	name: "CreateSongDatabaseResponse",
	fields: {
		songDatabase: {
			type: SongDatabase
		}
	}
});

export const UpdateSongDatabaseResponse = new DomainEntity({
	name: "UpdateSongDatabaseResponse",
	fields: {
		success: {
			type: BooleanType
		},
		songDatabase: {
			type: SongDatabase
		}
	}
});

export const RemoveSongDatabaseResponse = new DomainEntity({
	name: "RemoveSongDatabaseResponse",
	fields: {
		success: {
			type: BooleanType
		}
	}
});