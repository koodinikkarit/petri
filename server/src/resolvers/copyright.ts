import { Context } from "../context";
import {
	SearchCopyrightsQueryArgs,
	CreateCopyrightMutationArgs
} from "../schemadef";
import { getSeppoClient } from "../seppo";
import { logger } from "../logger";

export const Query = {
	searchCopyrights: async (
		root,
		args: SearchCopyrightsQueryArgs,
		context: Context
	) => {
		const seppoClient = getSeppoClient();

		try {
			const copyrightsConnection = await seppoClient.searchCopyrights({});

			return {
				copyrights: copyrightsConnection.copyrights
			};
		} catch (e) {
			logger.error("Query searchCopyrights failed", {
				error: {
					name: e.name,
					message: e.message,
					stack: e.stack
				}
			});
			return {
				totalCount: 0,
				copyrights: []
			};
		}
	}
};

export const Mutation = {
	createCopyright: async (
		root,
		args: CreateCopyrightMutationArgs,
		context: Context
	) => {
		const seppoClient = getSeppoClient();
		try {
			const res = await seppoClient.createCopyright({
				name: args.name
			});

			return {
				success: true,
				copyright: res.copyright
			};
		} catch (e) {
			logger.error("Mutation createCopyright failed", {
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
