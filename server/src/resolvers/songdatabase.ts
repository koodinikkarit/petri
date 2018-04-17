import { Context } from "../context";
import { SongDatabaseQueryArgs } from "../schemadef";

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
	}
};
