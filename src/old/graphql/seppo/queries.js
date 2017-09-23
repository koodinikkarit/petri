
import {
	GraphQLID,
	GraphQLList
} from "graphql";

import Variation from "./Variation";
import SongDatabase from "./SongDatabase";
import EwDatabase from "./EwDatabase";
import Tag from "./Tag";
import Language from "./Language";

import {
	SearchVariationsInput,
	SearchVariationsOutput
} from "./OtherVariationTypes";

import {
	SongDatabasesConnection,
	SearchSongDatabasesInput
} from "./OtherSongDatabaseTypes";

import {
	SearchEwDatabasesInput,
	EwDatabasesConnection
} from "./OtherEwDatabaseTypes";

import {
	TagsConnection,
	SearchTagsInput
} from "./OtherTagTypes";

import {
	LanguagesConnection,
	SearchLanguagesInput
} from "./OtherLanguageTypes";

import SongDatabaseVariation from "./SongDatabaseVariation";

export default {
	variation: {
		name: "Variation",
		type: Variation,
		args: {
			variationId: {
				type: GraphQLID
			}
		},
		resolve: (obj, {
			variationId
		}, 
		context
		) => context.seppo.fetchVariationById(variationId)
	},
	searchVariations: {
		name: "SearchVariations",
		type: SearchVariationsOutput,
		args: {
			params: {
				type: SearchVariationsInput
			}
		},
		resolve: (obj, {
			params
		},
		context
		) => context.seppo.searchVariations(params || {})
	},
	songDatabase : {
		name: "SongDatabase",
		type: SongDatabase,
		args: {
			songDatabaseId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				songDatabaseId
			},
			context
		) => context.seppo.fetchSongDatabaseById(songDatabaseId)
	},
	searchSongDatabases: {
		name: "SearchSongDatabases",
		type: SongDatabasesConnection,
		args: {
			params: {
				type: SearchSongDatabasesInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.fetchSongDatabases(params || {})
	},
	ewDatabase: {
		name: "EwDatabase",
		type: EwDatabase,
		args: {
			ewDatabaseId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				ewDatabaseId
			},
			context
		) => context.seppo.fetchEwDatabaseById(ewDatabaseId)
	},
	searchEwDatabases: {
		name: "SearchEwDatabases",
		type: EwDatabasesConnection,
		args: {
			params: {
				type: SearchEwDatabasesInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.fetchEwDatabases(params || {})
	},
	songDatabaseVariations: {
		name: "SongDatabaseVariations",
		type: new GraphQLList(SongDatabaseVariation),
		args: {
			songDatabaseId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				songDatabaseId
			},
			context
		) => context.seppo.fetchVariationsBySongDatabaseId(songDatabaseId)
	},
	tag: {
		name: "Tag",
		type: Tag,
		args: {
			tagId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				tagId
			},
			context
		) => context.seppo.fetchTagById(tagId)
	},
	searchTags: {
		name: "SearchTags",
		type: TagsConnection,
		args: {
			params: {
				type: SearchTagsInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.searchTags(params || {})
	},
	language: {
		name: "Language",
		type: Language,
		args: {
			languageId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				languageId
			},
			context
		) => context.seppo.fetchLanguageById(languageId)
	},
	searchLanguages: {
		name: "SearchLanguages",
		type: LanguagesConnection,
		args: {
			params: {
				type: SearchLanguagesInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.searchLanguages(params || {})
	}
};