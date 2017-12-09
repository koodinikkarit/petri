import {
	METHOD_TYPES,
	IdType,
	StringType,
	IntType
} from "grpc-graphql-router-tools";

import {
	Author,
	AuthorsConnection,
	CreateAuthorResponse,
	UpdateAuthorResponse,
	RemoveAuthorResponse
} from "./Author";

export default {
	fetchAuthorById: {
		name: "author",
		type: Author,
		returnField: "author",
		methodType: METHOD_TYPES.QUERY,
		dataLoader: {
			name: "authorId",
			serviceTypeName: "authorIds",
			returnField: "authors"
		} 
	},
	searchAuthors: {
		name: "searchAuthors",
		type: AuthorsConnection,
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
	createAuthor: {
		name: "createAuthor",
		type: CreateAuthorResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			name: {
				type: StringType
			}
		}
	},
	updateAuthor: {
		name: "updateAuthor",
		type: UpdateAuthorResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			authorId: {
				type: IdType
			},
			name: {
				type: StringType
			}
		}
	},
	removeAuthor: {
		name: "removeAuthor",
		type: RemoveAuthorResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			authorId: {
				type: IdType
			}
		}
	}
};