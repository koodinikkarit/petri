import {
	DomainEntity,
	IdType,
	StringType,
	ListType,
	IntType,
	BooleanType
} from "grpc-graphql-router-tools";

import {
	Variation
} from "./Variation";
import {
	Tag
} from "./Tag";

export const SongDatabase = new DomainEntity({
	name: "SongDatabase",
	fields: () => ({
		id: {
			type: IdType
		},
		name: {
			type: StringType
		},
		variations: {
			type: new ListType(Variation),
			inhertedArgs: {
				id: "songDatabaseId"
			},
			serviceMethod: "searchVariations",
			returnField: "variations"
		},
		tags: {
			type: new ListType(Tag),
			inhertedArgs: {
				id: "songDatabaseId"
			},
			serviceMethod: "searchTags",
			returnField: "tags"
		}
	})
});
export const SongDatabasesConnection = new DomainEntity({
	name: "SongDatabasesConnection",
	fields: () => ({
		maxSongDatabases: {
			type: IntType
		},
		songDatabases: {
			type: new ListType(SongDatabase)
		}
	})
});

export const CreateSongDatabaseResponse = new DomainEntity({
	name: "CreateSongDatabaseResponse",
	fields: () => ({
		songDatabase: {
			type: SongDatabase
		}
	})
});

export const UpdateSongDatabaseResponse = new DomainEntity({
	name: "UpdateSongDatabaseResponse",
	fields: () => ({
		success: {
			type: BooleanType
		},
		songDatabase: {
			type: SongDatabase
		}
	})
});

export const RemoveSongDatabaseResponse = new DomainEntity({
	name: "RemoveSongDatabaseResponse",
	fields: () => ({
		success: {
			type: BooleanType
		}
	})
});