import {
	CreateAdminAccountMutationArgs,
	LoginMutationArgs
} from "../schemadef";
import { getRistoClient } from "../risto";
import { CreateTokenResponseState } from "risto-client-js";
import { Context } from "../context";

export const Query = {
	hasAdminAccount: async (root, args) => {
		const ristoClient = getRistoClient();
		const hasAdminAccountRes = await ristoClient.hasAdminAccount();
		return hasAdminAccountRes.hasAdminAccount;
	}
};

export const Mutation = {
	createAdminAccount: async (root, args: CreateAdminAccountMutationArgs) => {
		const ristoClient = getRistoClient();
		const res = await ristoClient.createAdminAccount({
			password: args.password
		});
		return res;
	},
	login: async (root, args: LoginMutationArgs, context: Context) => {
		const ristoClient = getRistoClient();
		const res = await ristoClient.createToken({
			username: args.username,
			password: args.password,
			rememberMe: args.rememberMe || false
		});

		let success = false;

		switch (res.state) {
			case CreateTokenResponseState.PASSWORD_WRONG:
				break;
			case CreateTokenResponseState.TOKEN_CREATED:
				console.log("token created");
				success = true;
				context.setToken(res.token);
				context.setUser(res.user);
				break;
			case CreateTokenResponseState.USER_NOT_FOUND:
				break;
		}

		return {
			success,
			user: res.user,
			token: res.token,
			viewer: {}
		};
	},
	logout: async (root, args, context: Context) => {
		if (context.getUser()) {
			context.clearToken();
			context.clearUser();
			return {
				success: true,
				viewer: {}
			};
		}
		return {
			success: false
		};
	}
};
