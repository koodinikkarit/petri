import { Context } from "../context";
import {
	SongDatabaseQueryArgs,
	SongDatabaseVariationsQueryArgs,
	AddVariationToSongDatabaseMutationArgs,
	RemoveVariationFromSongDatabaseMutationArgs,
	CreateSongDatabaseMutationArgs,
	SongDatabaseTagsQueryArgs,
	AddTagToSongDatabaseMutationArgs
} from "../schemadef";

export const Query = {
	songDatabase: async (
		root,
		args: SongDatabaseQueryArgs,
		context: Context
	) => {
		const songDatabaseId = parseInt(args.songDatabaseId, 10);

		const res = await context.seppo.fetchSongDatabase(songDatabaseId);

		return res;
	},
	searchSongDatabases: async (root, args, context: Context) => {
		const res = await context.seppo.searchSongDatabases({
			limit: 100
		});

		return {
			totalCount: res.maxSongDatabases,
			songDatabases: res.songDatabases
		};
	},
	songDatabaseVariations: async (
		root,
		args: SongDatabaseVariationsQueryArgs,
		context: Context
	) => {
		const songDatabaseId = parseInt(args.songDatabaseId, 10);

		const res = await context.seppo.searchVariations({
			songDatabaseId,
			limit: 50
		});

		return {
			totalCount: res.maxVariations,
			variations: res.variations
		};
	},
	songDatabaseTags: async (
		root,
		args: SongDatabaseTagsQueryArgs,
		context: Context
	) => {
		const songDatabaseId = parseInt(args.songDatabaseId, 10);

		const res = await context.seppo.searchTags({
			songDatabaseId: songDatabaseId
		});

		return {
			totalCount: res.maxTags,
			tags: res.tags
		};
	}
};

export const Mutation = {
	createSongDatabase: async (
		root,
		args: CreateSongDatabaseMutationArgs,
		context: Context
	) => {
		const res = await context.seppo.createSongDatabase({
			name: args.name
		});

		return res.songDatabase;
	},
	addVariationToSongDatabase: async (
		root,
		args: AddVariationToSongDatabaseMutationArgs,
		context: Context
	) => {
		const songDatabaseId = parseInt(args.songDatabaseId, 10);
		const variationId = parseInt(args.variationId, 10);

		const res = await context.seppo.updateVariation({
			variationId: variationId,
			addSongDatabaseIds: [songDatabaseId]
		});

		return res.success;
	},
	removeVariationFromSongDatabase: async (
		root,
		args: RemoveVariationFromSongDatabaseMutationArgs,
		context: Context
	) => {
		const songDatabaseId = parseInt(args.songDatabaseId, 10);
		const variationId = parseInt(args.variationId, 10);

		const res = await context.seppo.updateVariation({
			variationId: variationId,
			removeSongDatabaseIds: [songDatabaseId]
		});

		return res.success;
	},
	addTagToSongDatabase: async (
		root,
		args: AddTagToSongDatabaseMutationArgs,
		context: Context
	) => {
		const songDatabaseId = parseInt(args.songDatabaseId);
		const tagId = parseInt(args.tagId, 10);

		const res = await context.seppo.updateSongDatabase({
			songDatabaseId: songDatabaseId,
			addTagIds: [tagId]
		});

		return res.success;
	},
	removeTagFromSongDatabase: async (root, args, context: Context) => {
		const songDatabaseId = parseInt(args.songDatabaseId);
		const tagId = parseInt(args.tagId, 10);

		const res = await context.seppo.updateSongDatabase({
			songDatabaseId: songDatabaseId,
			removeTagIds: [tagId]
		});

		return res.success;
	}
};
