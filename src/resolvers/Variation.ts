import Context from "../Context";

import { VariationType } from "../seppo/types";
import {
	UpdateVariationMutationArgs,
	SongDatabasesConnectionVariationArgs
} from "../schemadef";

export const Variation = {
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
	},
	songDatabasesConnection: async (
		root: VariationType,
		args: SongDatabasesConnectionVariationArgs,
		context: Context
	) => {
		console.log("root is", root);
		return context.seppo.searchSongDatabases({
			variationId: root.id,
			limit: args.limit,
			offset: args.offset
		});
	}
};

export const VariationsConnection = {};

export const Mutation = {
	createVariation: (root, args, context: Context) =>
		context.seppo.createVariation(args),
	updateVariation: (
		root,
		args: UpdateVariationMutationArgs,
		context: Context
	) =>
		context.seppo.updateVariation({
			variationId: parseInt(args.params.variationId, 10),
			languageId: args.params.languageId
				? parseInt(args.params.languageId, 10)
				: null,
			addSongDatabaseIds: args.params.addSongDatabaseIds
				? args.params.addSongDatabaseIds.map(p => parseInt(p, 10))
				: [],
			removeSongDatabaseIds: args.params.removeSongDatabaseIds
				? args.params.removeSongDatabaseIds.map(p => parseInt(p, 10))
				: [],
			name: args.params.name ? args.params.name : null,
			text: args.params.text ? args.params.text : null
		}),
	removeVariation: (root, args, context: Context) =>
		context.seppo.removeVariation(args.variationId)
};

export const Query = {
	variation: (root, args, context: Context) =>
		context.seppo.fetchVariation(args.variationId),
	searchVariations: (root, args: any, context: Context) =>
		context.seppo.searchVariations(args)
};
