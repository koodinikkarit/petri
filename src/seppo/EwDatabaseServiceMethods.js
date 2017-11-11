
import {
	METHOD_TYPES,
	IdType,
	StringType,
	BooleanType,
	IntType
} from "grpc-graphql-router-tools";

import {
	EwDatabase,
	EwDatabasesConnection,
	CreateEwDatabaseResponse,
	UpdateEwDatabaseResponse,
	RemoveEwDatabaseResponse
} from "./EwDatabase";

export default {
	fetchEwDatabaseById: {
		name: "ewDatabase",
		type: EwDatabase,
		returnField: "ewDatabase",
		methodType: METHOD_TYPES.QUERY,
		dataLoader: {
			name: "ewDatabaseId",
			serviceTypeName: "ewDatabaseIds",
			returnField: "ewDatabases"
		}
	},
	searchEwDatabases: {
		name: "searchEwDatabases",
		type: EwDatabasesConnection,
		methodType: METHOD_TYPES.QUERY,
		args: {
			offset: {
				type: IntType
			},
			limit: {
				type: IntType
			}
		}
	},
	createEwDatabase: {
		name: "createEwDatabase",
		type: CreateEwDatabaseResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			name: {
				type: StringType
			},
			songDatabaseId: {
				type: IdType
			}
		}
	},
	updateEwDatabase: {
		name: "updateEwDatabase",
		type: UpdateEwDatabaseResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			ewDatabaseId: {
				type: IdType
			},
			name: {
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
			}
		}
	},
	removeEwDatabase: {
		name: "removeEwDatabase",
		type: RemoveEwDatabaseResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			ewDatabaseId: {
				type: IdType
			}
		}
	}	
};