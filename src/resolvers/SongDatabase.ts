import Context from "../Context";
import { CreateSongDatabaseMutationArgs } from "../schemadef";

export const SongDatabase = {};

export const SongDatabasesConnection = {};

export const Mutation = {
	createSongDatabase: (
		root,
		args: CreateSongDatabaseMutationArgs,
		context: Context
	) => context.seppo.createSongDatabase(args),
	updateSongDatabase: (root, args, context: Context) =>
		context.seppo.updateSongDatabase(args),
	removeSongDatabase: (root, args, context: Context) =>
		context.seppo.removeSongDatabase(args.songDatabaseId)
};

export const Query = {
	songDatabase: (root, args, context: Context) =>
		context.seppo.fetchSongDatabase(args.songDatabaseId),
	searchSongDatabases: (
		root,
		args: {
			offset: number;
			limit: number;
			searchWord: string;
			variationId: number;
		},
		context: Context
	) => context.seppo.searchSongDatabases(args)
};
