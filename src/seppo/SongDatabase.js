import {
	DomainEntity,
	IdType,
	StringType,
	ListType
} from "grpc-graphql-router-tools";

import Variation from "./Variation";

export default new DomainEntity({
	name: "SongDatabase",
	fields: {
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
			serviceMethod: "fetchVariationsBySongDatabaseId"
		}
	}
});