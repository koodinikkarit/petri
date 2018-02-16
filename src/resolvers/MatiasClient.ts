import Context from "../Context";

import { MatiasClientType, EwDatabaseType } from "../seppo/types";

export const MatiasClient = {
	ewDatabases: async (
		root: MatiasClientType,
		args,
		context: Context
	): Promise<EwDatabaseType[]> => {
		return context.seppo.fetchMatiasClientEwDatabases(root.id);
	}
};

export const MatiasClientsConnection = {};

export const Mutation = {
	updateMatiasClient: (root, args, context: Context) =>
		context.seppo.updateMatiasClient(args),
	createEwDatabase: (root, args, context: Context) =>
		context.seppo.createEwDatabase(args)
};

export const Query = {
	matiasClient: (root, args, context: Context) =>
		context.seppo.fetchMatiasClient(args.matiasClientId),
	searchMatiasClients: (root, args, context: Context) =>
		context.seppo.searchMatiasClients(),
	searchEwDatabases: (root, args, context: Context) =>
		context.seppo.searchEwDatabases(args)
};
