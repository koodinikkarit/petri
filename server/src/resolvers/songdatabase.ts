import { Context } from "../context";
import {
	SongDatabaseQueryArgs,
	SongDatabaseVariationsQueryArgs,
	AddVariationToSongDatabaseMutationArgs,
	RemoveVariationFromSongDatabaseMutationArgs
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
		const res = await context.seppo.searchSongDatabases({});

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
	}
};

export const Mutation = {
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
	}
};
