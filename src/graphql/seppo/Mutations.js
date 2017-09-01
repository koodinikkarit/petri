import {
	GraphQLBoolean,
	GraphQLID
} from "graphql";

import Variation from "./Variation";
import SongDatabase from "./SongDatabase";
import EwDatabase from "./EwDatabase";
import Tag from "./Tag";
import Language from "./Language";
import SongDatabaseVariation from "./SongDatabaseVariation";

import {
	CreateVariationInput,
	EditVariationInput,
} from "./OtherVariationTypes";

import {
	CreateSongDatabaseInput,
	EditSongDatabaseInput
} from "./OtherSongDatabaseTypes";

import {
	CreateEwDatabaseInput,
	EditEwDatabaseInput
} from "./OtherEwDatabaseTypes";

import {
	CreateTagInput,
	EditTagInput
} from "./OtherTagTypes";

import {
	CreateLanguageInput,
	EditLanguageInput
} from "./OtherLanguageTypes";

import TagVariation from "./TagVariation";

export default {
	createVariation: {
		name: "CreateVariation",
		type: Variation,
		args: {
			params: {
				type: CreateVariationInput
			}
		},
		resolve: (
			obj, 
			{
				params
			},
			context
		) => context.seppo.createVariation(params)
	},
	editVariation: {
		name: "EditVariation",
		type: Variation,
		args: {
			params: {
				type: EditVariationInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.editVariation(params || {})
	},
	removeVariation: {
		name: "RemoveVariation",
		type: GraphQLBoolean,
		args: {
			variationId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				variationId
			},
			context
		) => context.seppo.removeVariation(variationId)
	},
	createSongDatabase: {
		name: "CreateSongDatabase",
		type: SongDatabase,
		args: {
			params: {
				type: CreateSongDatabaseInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.createSongDatabase(params || {})
	},
	editSongDatabase: {
		name: "EditSongDatabase",
		type: SongDatabase,
		args: {
			params: {
				type: EditSongDatabaseInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.editSongDatabase(params || {})
	},
	removeSongDatabase: {
		name: "RemoveSongDatabase",
		type: GraphQLBoolean,
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
		) => context.seppo.removeSongDatabase(songDatabaseId)
	},
	createEwDatabase: {
		name: "CreateEwDatabase",
		type: EwDatabase,
		args: {
			params: {
				type: CreateEwDatabaseInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.createEwDatabase(params || {})
	},
	editEwDatabase: {
		name: "EditEwDatabase",
		type: EwDatabase,
		args: {
			params: {
				type: EditEwDatabaseInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.editEwDatabase(params || {})
	},
	removeEwDatabase: {
		name: "RemoveEwDatabase",
		type: GraphQLBoolean,
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
		) => context.seppo.removeEwDatabase(ewDatabaseId)
	},
	addVariationToSongDatabase: {
		name: "AddVariationToSongDatabase",
		type: SongDatabaseVariation,
		args: {
			songDatabaseId: {
				type: GraphQLID
			},
			variationId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				songDatabaseId,
				variationId
			},
			context
		) => context.seppo.addVariationToSongDatabase(songDatabaseId, variationId)
	},
	removeVariationFromSongDatabase: {
		name: "RemoveVariationFromSongDatabase",
		type: GraphQLBoolean,
		args: {
			songDatabaseId: {
				type: GraphQLID
			},
			variationId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				songDatabaseId,
				variationId
			},
			context
		) => context.seppo.removeVariationFromSongDatabase(songDatabaseId, variationId)		
	},
	createTag: {
		name: "CreateTag",
		type: Tag,
		args: {
			params: {
				type: CreateTagInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.createTag(params || {})
	},
	editTag: {
		name: "EditTag",
		type: Tag,
		args: {
			params: {
				type: EditTagInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.editTag(params || {})
	},
	removeTag: {
		name: "RemoveTag",
		type: GraphQLBoolean,
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
		) => context.seppo.removeTag(tagId)
	},
	createLanguage: {
		name: "CreateLanguage",
		type: Language,
		args: {
			params: {
				type: CreateLanguageInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.createLanguage(params)
	},
	editLanguage: {
		name: "EditLanguage",
		type: Language,
		args: {
			params: {
				type: EditLanguageInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.seppo.editLanguage(params)
	},
	removeLanguage: {
		name: "RemoveLanguage",
		type: GraphQLBoolean,
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
		) => context.seppo.removeLanguage(languageId)
	},
	addTagToVariation: {
		name: "AddTagToVariation",
		type: TagVariation,
		args: {
			tagId: {
				type: GraphQLID
			},
			variationId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				tagId,
				variationId
			},
			context
		) => context.seppo.addTagToVariation(tagId, variationId)
	},
	removeTagFromVariation: {
		name: "RemoveTagFromVariation",
		type: GraphQLBoolean,
		args: {
			tagId: {
				type: GraphQLID
			},
			variationId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				tagId,
				variationId
			},
			context
		) => context.seppo.removeTagFromVariation(
			tagId, 
			variationId
		)
	}
};