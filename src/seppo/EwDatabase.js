import {
	DomainEntity,
	IdType,
	StringType
} from "grpc-graphql-router-tools";

import {
	SongDatabase
} from "./SongDatabase";

export default new DomainEntity({
	name: "EwDatabase",
	fields: () => ({
		id: {
			type: IdType
		},
		name: {
			type: StringType
		},
		key: {
			type: StringType
		},
		songDatabaseId: {
			type: IdType
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