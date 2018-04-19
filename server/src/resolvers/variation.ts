import { Context } from "../context";
import {
	SearchVariationsQueryArgs,
	CreateVariationMutationArgs,
	VariationQueryArgs,
	AddTagToVariationMutationArgs,
	RemoveTagFromVariationMutationArgs,
	UpdateVariationInputType,
	UpdateVariationMutationArgs,
	VariationsNotInSongDatabaseQueryArgs
} from "../schemadef";
import { getSeppoClient } from "../seppo";
import { Variation as VariationType } from "seppo-client-js";
import { ParseOptions } from "graphql";

export const Query = {
	variation: async (root, args: VariationQueryArgs, context: Context) => {
		return context.seppo.fetchVariation(parseInt(args.variationId, 10));
	},
	searchVariations: async (
		root,
		args: SearchVariationsQueryArgs,
		context: Context
	) => {
		const seppoClient = getSeppoClient();

		const res = await seppoClient.searchVariations({
			searchWord: args.searchWord,
			songDatabaseId: parseInt(args.songDatabaseId, 10),
			tagId: parseInt(args.tagId, 10),
			languageId: parseInt(args.languageId, 10),
			offset: args.offset,
			limit: args.limit || 100
		});

		return {
			totalCount: res.maxVariations,
			variations: res.variations
		};
	},
	variationsNotInSongDatabase: async (
		root,
		args: VariationsNotInSongDatabaseQueryArgs,
		context: Context
	) => {
		const songDatabaseId = parseInt(args.songDatabaseId, 10);

		const res = await context.seppo.searchVariations({
			songDatabaseFilterId: 1
		});

		return {
			totalCount: res.maxVariations,
			variations: res.variations
		};
	}
};

export const Mutation = {
	createVariation: async (
		root,
		args: CreateVariationMutationArgs,
		context: Context
	) => {
		const seppoClient = getSeppoClient();

		const res = await seppoClient.createVariation({
			name: args.name,
			text: args.text
		});

		console.log("createVariation res", res);

		return res.variation;
	},
	updateVariation: async (
		root,
		args: UpdateVariationMutationArgs,
		context: Context
	) => {
		const variationId = parseInt(args.params.variationId, 10);

		const res = await context.seppo.updateVariation({
			variationId,
			name: args.params.name,
			text: args.params.text
		});

		return {
			success: res.success,
			variation: res.variation
		};
	},
	addTagToVariation: async (
		root,
		args: AddTagToVariationMutationArgs,
		context: Context
	) => {
		const variationId = parseInt(args.variationId, 10);
		const tagId = parseInt(args.tagId, 10);

		const res = await context.seppo.updateVariation({
			variationId: variationId,
			addTagIds: [tagId]
		});

		if (res.success) {
			return true;
		}
		return false;
	},
	removeTagFromVariation: async (
		root,
		args: RemoveTagFromVariationMutationArgs,
		context: Context
	) => {
		const variationId = parseInt(args.variationId, 10);
		const tagId = parseInt(args.tagId, 10);

		const res = await context.seppo.updateVariation({
			variationId: variationId,
			removeTagIds: [tagId]
		});

		if (res.success) {
			return true;
		}
		return false;
	}
};

export const Variation = {
	name: async (root: VariationType, args, context: Context) => {
		const newestVariationVersion = await context.seppo.fetchNewestVariationVersion(
			root.id
		);

		if (newestVariationVersion) {
			return newestVariationVersion.name;
		}
	},
	text: async (root: VariationType, args, context: Context) => {
		const newestVariationVersion = await context.seppo.fetchNewestVariationVersion(
			root.id
		);
		if (newestVariationVersion) {
			return newestVariationVersion.text;
		}
	},
	version: async (root: VariationType, args, context: Context) => {
		const newestVariationVersion = await context.seppo.fetchNewestVariationVersion(
			root.id
		);
		if (newestVariationVersion) {
			return newestVariationVersion.version;
		}
	},
	author: async (root: VariationType, args, context: Context) => {
		const author = await context.seppo.fetchAuthor(root.authorId);

		return author;
	}
};
