import { Context } from "../context";
import { CreateEwDatabaseRequest } from "seppo-client-js";
import { EwDatabaseQueryArgs } from "../schemadef";

export const Query = {
	ewDatabase: async (root, args: EwDatabaseQueryArgs, context: Context) => {
		const ewDatabaseId = parseInt(args.ewDatabaseId, 10);

		const res = await context.seppo.fetchEwDatabase(ewDatabaseId);

		console.log("res", res);

		return res;
	},
	searchEwDatabases: async (root, args, context: Context) => {
		const res = await context.seppo.searchEwDatabases({});

		return {
			totalCount: res.maxEwDatabases,
			ewDatabases: res.ewDatabases
		};
	}
};

export const Mutation = {
	createEwDatabase: async (
		root,
		args: CreateEwDatabaseRequest,
		context: Context
	) => {
		const res = await context.seppo.createEwDatabase({
			name: args.name
		});

		return res.ewDatabase;
	}
};
