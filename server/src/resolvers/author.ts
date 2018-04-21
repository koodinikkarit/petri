import { Context } from "../context";
import {
	SearchAuthorsQueryArgs,
	CreateAuthorMutationArgs,
	AuthorQueryArgs
} from "../schemadef";
import { getSeppoClient } from "../seppo";
import { logger } from "../logger";

export const Query = {
	author: async (root, args: AuthorQueryArgs, context: Context) => {
		const authorId = parseInt(args.authorId, 10);

		const res = await context.seppo.fetchAuthor(authorId);

		return res;
	},
	authorVariations: async (root, args, context: Context) => {
		const authorId = parseInt(args.authorId, 10);

		const res = await context.seppo.searchVariations({
			authorId
		});

		return {
			totalCount: res.maxVariations,
			variations: res.variations
		};
	},
	searchAuthors: async (
		root,
		args: SearchAuthorsQueryArgs,
		context: Context
	) => {
		const seppoClient = getSeppoClient();
		try {
			const res = await seppoClient.searchAuthors({});
			return {
				authors: res.authors
			};
		} catch (e) {
			logger.error("Query searchAuthors failed", {
				error: {
					name: e.name,
					message: e.message,
					stack: e.stack
				}
			});
			return {
				totalCount: 0,
				authors: []
			};
		}
	}
};

export const Mutation = {
	createAuthor: async (
		root,
		args: CreateAuthorMutationArgs,
		context: Context
	) => {
		const seppoClient = getSeppoClient();
		try {
			const res = await seppoClient.createAuthor({
				name: args.name
			});

			return res;
		} catch (e) {
			logger.error("Mutation createAuthor failed", {
				error: {
					name: e.name,
					message: e.message,
					stack: e.stack
				}
			});

			return {
				author: null
			};
		}
	}
};
