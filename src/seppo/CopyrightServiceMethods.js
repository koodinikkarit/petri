import {
	METHOD_TYPES,
	IdType,
	StringType,
	IntType
} from "grpc-graphql-router-tools";

import {
	Copyright,
	CopyrightsConnection,
	CreateCopyrightResponse,
	UpdateCopyrightResponse,
	RemoveCopyrightResponse
} from "./Copyright";

export default {
	fetchCopyrightById: {
		name: "copyright",
		type: Copyright,
		returnField: "copyright",
		methodType: METHOD_TYPES.QUERY,
		dataLoader: {
			name: "copyrightId",
			serviceTypeName: "copyrightIds",
			returnField: "copyrights"
		} 
	},
	searchCopyrights: {
		name: "searchCopyrights",
		type: CopyrightsConnection,
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
	createCopyright: {
		name: "createCopyright",
		type: CreateCopyrightResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			name: {
				type: StringType
			}
		}
	},
	updateCopyright: {
		name: "updateCopyright",
		type: UpdateCopyrightResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			copyrightId: {
				type: IdType
			},
			name: {
				type: StringType
			}
		}
	},
	removeCopyright: {
		name: "removeCopyright",
		type: RemoveCopyrightResponse,
		methodType: METHOD_TYPES.MUTATION,
		args: {
			copyrightId: {
				type: IdType
			}
		}
	}
};