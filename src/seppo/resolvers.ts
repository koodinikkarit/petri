import { VariationType, EwDatabaseType, MatiasClientType } from "./types";
import Context from "../Context";

export default {
	Query: {
		async searchVariations(
			root,
			{
				searchWord,
				songDatabaseId,
				tagId,
				languageId,
				offset,
				limit
			}: {
				searchWord: string;
				songDatabaseId: number;
				tagId: number;
				languageId: number;
				offset: number;
				limit: number;
			},
			context: Context
		) {
			const variations = await context.seppo.searchVariations({
				searchWord,
				songDatabaseId,
				tagId,
				languageId,
				offset,
				limit
			});
			return variations;
		},
		async songDatabase(root, { songDatabaseId }, context: Context) {},
		async searchSongDatabases(root, {}, context: Context) {
			return context.seppo.searchSongDatabases();
		},
		async matiasClient(root, args, context: Context) {
			console.log("args is ", args);
			return context.seppo.fetchMatiasClient(args.matiasClientId);
		},
		async searchMatiasClients(root, {}, context: Context) {
			return context.seppo.searchMatiasClients();
		},
		async ewDatabase(root, { ewDatabaseId }, context: Context) {
			return {};
		},
		async searchEwDatabases(
			root,
			args: {
				offset: number;
				limit: number;
				songDatabaseId: number;
				matiasClientId: number;
			},
			context: Context
		): Promise<{
			maxEwDatabases: number;
			ewDatabases: EwDatabaseType[];
		}> {
			return context.seppo.searchEwDatabases({
				limit: args.limit,
				offset: args.offset,
				songDatabaseId: args.songDatabaseId,
				matiasClientId: args.matiasClientId
			});
		}
	},
	Mutation: {
		async createVariation(root, { name, text }, context: Context) {
			const variation = await context.seppo.createVariation({
				name,
				text
			});
			return {
				variation
			};
		},
		async updateVariation(
			root,
			{ variationId, name, text, languageId },
			context: Context
		) {
			const res = await context.seppo.updateVariation({
				variationId,
				name,
				text,
				languageId
			});

			return res;
		},
		async removeVariation(root, { variationId }, context: Context) {
			const res = await context.seppo.removeVariation(variationId);
			return res;
		},
		async createSongDatabase(root, { name }, context: Context) {
			return context.seppo.createSongDatabase({
				name
			});
		},
		async updateSongDatabase(
			root,
			{ songDatabaseId, name }: { songDatabaseId: number; name: string },
			context: Context
		) {
			return context.seppo.updateSongDatabase({
				songDatabaseId,
				name
			});
		},
		async removeSongDatabase(
			root,
			{ songDatabaseId }: { songDatabaseId: number },
			context: Context
		) {
			return context.seppo.removeSongDatabase(songDatabaseId);
		},
		async updateMatiasClient(
			root,
			{ matiasClientId, name, accepted },
			context: Context
		) {
			return context.seppo.updateMatiasClient({
				matiasClientId,
				name,
				accepted
			});
		},
		async createEwDatabase(
			root,
			args: {
				name: string;
				filesystemPath: string;
				songDatabaseId: number;
				matiasClientId: number;
			},
			context: Context
		) {
			return context.seppo.createEwDatabase({
				name: args.name,
				filesystemPath: args.filesystemPath,
				songDatabaseId: args.songDatabaseId,
				matiasClientId: args.matiasClientId
			});
		}
	},
	Variation: {
		name: async (
			root: VariationType,
			args,
			context: Context
		): Promise<String> => {
			const variationVersion = await context.seppo.fetchNewestVariationVersion(
				root.id
			);
			return variationVersion.name;
		},
		text: async (
			root: VariationType,
			args,
			context: Context
		): Promise<String> => {
			const variationVersion = await context.seppo.fetchNewestVariationVersion(
				root.id
			);
			return variationVersion.text;
		}
	},
	MatiasClient: {
		ewDatabases: async (
			root: MatiasClientType,
			args,
			context: Context
		): Promise<EwDatabaseType[]> => {
			return context.seppo.fetchMatiasClientEwDatabases(root.id);
		}
	}
};
