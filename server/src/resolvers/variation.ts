import { Context } from "../context";
import {
	SearchVariationsQueryArgs,
	CreateVariationMutationArgs,
	VariationQueryArgs
} from "../schemadef";
import { getSeppoClient } from "../seppo";
import { Variation as VariationType } from "seppo-client-js";

export const Query = {
	variation: async (root, args: VariationQueryArgs, context: Context) => {
		return context.seppo.fetchVariationWithLoader(
			parseInt(args.variationId, 10)
		);
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
			limit: args.limit
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
	}
};

export const Variation = {
	name: async (root: VariationType, args, context: Context) => {
		const newestVariationVersion = await context.seppo.fetchNewestVariationVersion(
			root.id
		);

		return newestVariationVersion.name;
	},
	text: async (root: VariationType, args, context: Context) => {
		const newestVariationVersion = await context.seppo.fetchNewestVariationVersion(
			root.id
		);

		return newestVariationVersion.text;
	},
	version: async (root: VariationType, args, context: Context) => {
		const newestVariationVersion = await context.seppo.fetchNewestVariationVersion(
			root.id
		);

		return newestVariationVersion.version;
	}
};
