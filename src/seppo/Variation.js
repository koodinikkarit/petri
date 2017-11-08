import {
	DomainEntity,
	IdType,
	StringType,
	IntType,
	BooleanType,
	ListType
} from "grpc-graphql-router-tools";

import {
	TagsConnection
} from "./Tag";
import {
	SongDatabasesConnection
} from "./SongDatabase";
import {
	VariationText
} from "./VariationText";

import {
	Language
} from "./Language";

export const Variation = new DomainEntity({
	name: "Variation",
	fields: () => ({
		id: {
			type: IdType
		},
		name: {
			type: StringType,
			inhertedArgs: {
				id: "variationId"
			},
			serviceMethod: "fetchNewestVariationVersionByVariationId",
			returnField: "name"
		},
		version: {
			type: IntType,
			inhertedArgs: {
				id: "variationId"
			},
			serviceMethod: "fetchNewestVariationVersionByVariationId",
			returnField: "version"
		},
		text: {
			type: StringType,
			inhertedArgs: {
				id: "variationId"
			},
			serviceMethod: "fetchNewestVariationVersionByVariationId",
			returnField: "text"
		},
		languageId: {
			type: IdType
		},
		songId: {
			type: IdType
		},
		language: {
			type: Language,
			inhertedArgs: {
				languageId: "languageId"
			},
			serviceMethod: "fetchLanguageById",
			returnField: "language"
		},
		tags: {
			type: TagsConnection,
			inhertedArgs: {
				id: "variationId"
			},
			serviceMethod: "searchTags",
			args: {
				offset: {
					type: IntType
				},
				limit: {
					type: IntType
				}
			}
		},
		songDatabases: {
			type: SongDatabasesConnection,
			inhertedArgs: {
				id: "variationId"
			},
			serviceMethod: "searchSongDatabases",
			args: {
				offset: {
					type: IntType
				},
				limit: {
					type: IntType
				}
			}
		}
	})
});

export const VariationsConnection = new DomainEntity({
	name: "VariationsConnection",
	fields: () => ({
		variations: {
			type: new ListType(Variation)
		},
		maxVariations: {
			type: IntType
		}
	})
});

export const CreateVariationResponse = new DomainEntity({
	name: "CreateVariationResponse",
	fields: () => ({
		variation: {
			type: Variation
		},
		variationText: {
			type: VariationText
		}
	})
});

export const UpdateVariationResponse = new DomainEntity({
	name: "UpdateVariationResponse",
	fields: () => ({
		variation: {
			type: Variation
		},
		success: {
			type: BooleanType
		}
	})
});

export const RemoveVariationResponse = new DomainEntity({
	name: "RemoveVariationResponse",
	fields: () => ({
		success: {
			type: BooleanType
		}
	})
});