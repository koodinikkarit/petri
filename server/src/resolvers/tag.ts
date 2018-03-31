import { CreateTagMutationArgs, SearchTagsQueryArgs } from "../schemadef";
import { Context } from "../context";
import { getSeppoClient } from "../seppo";
import { logger } from "../logger";

export const Query = {
	searchTags: async (root, args: SearchTagsQueryArgs, context: Context) => {
		try {
			const seppoClient = getSeppoClient();
			const res = await seppoClient.searchTags({
				searchWord: args.searchWord
			});

			return res;
		} catch (e) {
			logger.error("Query searchTags failed", {
				error: {
					name: e.name,
					message: e.message,
					stack: e.stack
				}
			});
			return {
				totalCount: 0,
				tags: []
			};
		}
	}
};

export const Mutation = {
	createTag: async (root, args: CreateTagMutationArgs, context: Context) => {
		try {
			const seppoClient = getSeppoClient();
			const res = await seppoClient.createTag({
				name: args.name
			});

			return res;
		} catch (e) {
			logger.error("Mutation createTag failed", {
				error: {
					name: e.name,
					message: e.message,
					stack: e.stack
				}
			});
			return {
				success: false
			};
		}
	}
};
