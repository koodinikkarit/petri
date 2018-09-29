import { Context } from "../context";
import { getRistoClient } from "../risto";

export const Query = {
	viewer: (root, args, context: Context) => {
		return {};
	}
};

export const Viewer = {
	token: (root, args, context: Context) => {
		return context.getToken();
	},
	hasAdminUser: async (root, args, context: Context) => {
		const ristoClient = getRistoClient();
		console.log("hasAdminUser");
		const res = await ristoClient.hasAdminAccount({});
		return res.hasAdminAccount;
	},
	user: async (root, args, context: Context) => {
		return context.getUser();
	}
};
