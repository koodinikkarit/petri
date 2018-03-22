import {
	CreateAdminAccountMutationArgs,
	LoginMutationArgs
} from "../schemadef";
import { ristoClient } from "../risto";
import { CreateTokenResponseState } from "risto-client-js";
import { Context } from "../context";

export const Query = {
	hasAdminAccount: async (root, args) => {
		const hasAdminAccountRes = await ristoClient.hasAdminAccount();
		return hasAdminAccountRes.hasAdminAccount;
	}
};

export const Mutation = {
	createAdminAccount: async (root, args: CreateAdminAccountMutationArgs) => {
		const res = await ristoClient.createAdminAccount({
			password: args.password
		});
		return res;
	},
	login: async (root, args: LoginMutationArgs, context: Context) => {
		const res = await ristoClient.createToken({
			username: args.userName,
			password: args.password,
			rememberMe: args.rememberMe || false
		});

		let success = false;

		switch (res.state) {
			case CreateTokenResponseState.PASSWORD_WRONG:
				break;
			case CreateTokenResponseState.TOKEN_CREATED:
				console.log("token created", res.token);
				success = true;
				context.setToken(res.token);
				break;
			case CreateTokenResponseState.USER_NOT_FOUND:
				break;
		}

		return {
			success,
			user: res.user,
			token: res.token
		};
	}
};