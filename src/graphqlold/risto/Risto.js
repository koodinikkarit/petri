
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean
} from "graphql";

import * as classes from "./";

export const RistoServiceQueries = {
	fetchUserByToken: {
		"name": "fetchUserByToken",
		"type": classes.CreateTokenResponse,
		"args": {
			username: {
				type: GraphQLString
			},
			password: {
				type: GraphQLString
			},
			maxAge: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			username,
			password,
			maxAge
		}, context) => new Promise((resolve, reject) => {
			resolve(context.risto.fetchUserByToken({
				username,
				password,
				maxAge
			}));
		})
	}
}

export const RistoServiceMutations = {
	createToken: {
		"name": "createToken",
		"type": classes.CreateTokenResponse,
		"args": {
			username: {
				type: GraphQLString
			},
			password: {
				type: GraphQLString
			},
			maxAge: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			username,
			password,
			maxAge
		}, context) => new Promise((resolve, reject) => {
			resolve(context.risto.createToken({
				username,
				password,
				maxAge
			}));
		})
	},
	createUser: {
		"name": "createUser",
		"type": classes.CreateUserResponse,
		"args": {
			username: {
				type: GraphQLString
			},
			password: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			username,
			password
		}, context) => new Promise((resolve, reject) => {
			resolve(context.risto.createUser({
				username,
				password
			}));
		})
	}
}
