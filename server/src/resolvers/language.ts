import { Context } from "../context";
import {
	SearchLanguagesQueryArgs,
	CreateLanguageMutationArgs
} from "../schemadef";
import { seppoClient } from "../seppo";
import { logger } from "../logger";

export const Query = {
	searchLanguages: async (
		root,
		args: SearchLanguagesQueryArgs,
		context: Context
	) => {
		try {
			const res = await seppoClient.searchLanguages({
				searchWord: args.searchWord
			});

			return res;
		} catch (e) {
			logger.error("Query searchLanguages failed", {
				error: {
					name: e.name,
					message: e.message,
					stack: e.stack
				}
			});
			return {
				success: false,
				languages: []
			};
		}
	}
};

export const Mutation = {
	createLanguage: async (
		root,
		args: CreateLanguageMutationArgs,
		context: Context
	) => {
		try {
			const res = await seppoClient.createLanguage({
				name: args.name
			});

			return res;
		} catch (e) {
			logger.error("Mutation createLanguage failed", {
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
