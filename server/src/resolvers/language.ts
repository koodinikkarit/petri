import { Context } from "../context";
import {
	SearchLanguagesQueryArgs,
	CreateLanguageMutationArgs,
	LanguageQueryArgs
} from "../schemadef";
import { getSeppoClient } from "../seppo";
import { logger } from "../logger";

export const Query = {
	language: async (root, args: LanguageQueryArgs, context: Context) => {
		const langaugeId = parseInt(args.languageId, 10);
		const language = await context.seppo.fetchLanguage(langaugeId);

		return language;
	},
	languageVariations: async (root, args, context: Context) => {
		const langaugeId = parseInt(args.languageId, 10);

		const res = await context.seppo.searchVariations({
			languageId: langaugeId
		});

		return {
			variations: res.variations,
			totalCount: res.maxVariations
		};
	},
	searchLanguages: async (
		root,
		args: SearchLanguagesQueryArgs,
		context: Context
	) => {
		try {
			const seppoClient = getSeppoClient();
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
			const seppoClient = getSeppoClient();
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
