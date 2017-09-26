import {
	DomainService,
	METHOD_TYPES,
	IntType,
	IdType,
	StringType,
	ListType
} from "grpc-graphql-router-tools";

import services from "./service/seppo_service_grpc_pb";
import messages from "./service/seppo_service_pb";

import {
	Tag,
	TagsConnection,
	CreateTagResponse,
	UpdateTagResponse,
	RemoveTagResponse
} from "./Tag";

import {
	Variation,
	VariationsConnection,
	CreateVariationResponse,
	UpdateVariationResponse,
	RemoveVariationResponse
} from "./Variation";

import {
	VariationText
} from "./VariationText";

import {
	SongDatabase,
	SongDatabasesConnection,
	CreateSongDatabaseResponse,
	UpdateSongDatabaseResponse,
	RemoveSongDatabaseResponse	
} from "./SongDatabase";

import EwDatabase from "./EwDatabase";
import {
	EwDatabasesConnection,
	CreateEwDatabaseResponse,
	UpdateEwDatabaseResponse,
	RemoveEwDatabaseResponse
} from "./OtherEwDatabaseTypes";

import Language from "./Language";

import {
	LanguagesConnection,
	CreateLanguageResponse,
	UpdateLanguageResponse,
	RemoveLanguageResponse
} from "./OtherLanguageTypes";

export default new DomainService({
	name: "seppo",
	messages: messages,
	services: services,
	methods: {
		fetchVariationById: {
			name: "variation",
			returnField: "variation",
			type: Variation,
			methodType: METHOD_TYPES.QUERY,
			requestTypeName: "FetchVariationByIdRequest",
			dataLoader: {
				name: "variationId",
				serviceTypeName: "variationIds",
				returnField: "variations"
			}
		},
		searchVariations: {
			name: "searchVariations",
			type: VariationsConnection,
			methodType: METHOD_TYPES.QUERY,
			requestTypeName: "SearchVariationsRequest",
			args: {
				searchWord: {
					type: StringType
				},
				songDatabaseId: {
					type: IdType
				},
				songDatabaseFilterId: {
					type: IdType
				},
				tagId: {
					type: IdType
				},
				languageId: {
					type: IdType
				},
				offset: {
					type: IntType
				},
				limit: {
					type: IntType
				}
			}
		},
		fetchVariationTextByVariationId: {
			type: VariationText,
			returnField: "variationText",
			requestTypeName: "FetchVariationTextByVariationIdRequest",
			dataLoader: {
				name: "variationId",
				serviceTypeName: "variationIds",
				returnField: "variationTexts"
			}
		},
		fetchSongDatabaseById: {
			name: "songDatabase",
			type: SongDatabase,
			returnField: "songDatabase",
			methodType: METHOD_TYPES.QUERY,
			dataLoader: {
				name: "songDatabaseId",
				serviceTypeName: "songDatabaseIds",
				returnField: "songDatabases"
			}
		},
		fetchSongDatabases: {
			name: "searchSongDatabases",
			type: SongDatabasesConnection,
			methodType: METHOD_TYPES.QUERY,
			args: {
				variationId: {
					type: IdType
				},
				offset: {
					type: IntType
				},
				limit: {
					type: IntType
				}
			}
		},
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
		fetchEwDatabases: {
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
		fetchVariationsBySongDatabaseId: {
			name: "SongDatabaseVariations",
			type: new ListType(Variation),
			methodType: METHOD_TYPES.QUERY,
			dataLoader: {
				name: "songDatabaseId",
				serviceTypeName: "songDatabaseIds",
				returnField: "variations"
			}
		},
		fetchTagById: {
			name: "tag",
			type: Tag,
			returnField: "tag",
			methodType: METHOD_TYPES.QUERY,
			dataLoader: {
				name: "tagId",
				serviceTypeName: "tagIds",
				returnField: "tags"
			}
		},
		searchTags: {
			name: "searchTags",
			type: TagsConnection,
			methodType: METHOD_TYPES.QUERY,
			args: {
				offset: {
					type: IntType
				},
				limit: {
					type: IntType
				},
				variationId: {
					type: IdType
				},
				songDatabaseId: {
					type: IdType
				}
			} 
		},
		fetchLanguageById: {
			name: "language",
			type: Language,
			returnField: "language",
			methodType: METHOD_TYPES.QUERY,
			dataLoader: {
				name: "languageId",
				serviceTypeName: "languageIds",
				returnField: "languages"
			}
		},
		searchLanguages: {
			name: "searchLanguages",
			type: LanguagesConnection,
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
		createVariation: {
			name: "createVariation",
			type: CreateVariationResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				name: {
					type: StringType
				},
				text: {
					type: StringType
				}
			}
		},
		updateVariation: {
			name: "updateVariation",
			type: UpdateVariationResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				variationId: {
					type: IdType
				},
				name: {
					type: StringType
				},
				text: {
					type: StringType
				},
				languageId: {
					type: IdType
				},
				addTagIds: {
					type: new ListType(IdType)
				},
				removeTagIds: {
					type: new ListType(IdType)
				},
				addSongDatabaseIds: {
					type: new ListType(IdType)
				},
				removeSongDatabaseIds: {
					type: new ListType(IdType)
				}
			}
		},
		removeVariation: {
			name: "removeVariation",
			type: RemoveVariationResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				variationId: {
					type: IdType
				}
			}
		},
		createSongDatabase: {
			name: "createSongDatabase",
			type: CreateSongDatabaseResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				name: {
					type: StringType
				}
			}
		},
		updateSongDatabase: {
			name: "updateSongDatabase",
			type: UpdateSongDatabaseResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				songDatabaseId: {
					type: IdType
				},
				name: {
					type: StringType
				},
				addTagIds: {
					type: new ListType(IdType)
				},
				removeTagIds: {
					type: new ListType(IdType)
				}
			}
		},
		removeSongDatabase: {
			name: "removeSongDatabse",
			type: RemoveSongDatabaseResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				songDatabaseId: {
					type: IdType
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
		},
		createTag: {
			name: "createTag",
			type: CreateTagResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				name: {
					type: StringType
				}
			}
		},
		updateTag: {
			name: "updateTag",
			type: UpdateTagResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				tagId: {
					type: IdType
				},
				name: {
					type: StringType
				}
			}
		},
		removeTag: {
			name: "removeTag",
			type: RemoveTagResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				tagId: {
					type: IdType
				}
			}
		},
		createLanguage: {
			name: "createLanguage",
			type: CreateLanguageResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				name: {
					type: StringType
				}
			}
		},
		updateLanguage: {
			name: "updateLanguage",
			type: UpdateLanguageResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				languageId: {
					type: IdType
				},
				name: {
					type: StringType
				}
			}
		},
		removeLanguage: {
			name: "removeLanguage",
			type: RemoveLanguageResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				languageId: {
					type: IdType
				}
			}
		},
		fetchVariationTags: {
			type: new ListType(Tag),
			dataLoader: {
				name: "variationId",
				serviceTypeName: "variationIds",
				returnField: "variationTags"
			}
		}
	}
});