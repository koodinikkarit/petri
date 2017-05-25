
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean
} from "graphql";

import * as classes from "./";

export const WompattiServiceQueries = {
	fetchComputers: {
		"name": "fetchComputers",
		"type": new GraphQLList(classes.Computer),
		"args": {
			offset: {
				type: GraphQLInt
			},
			limit: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			offset,
			limit
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchComputers({
				offset,
				limit
			}));
		})
	},
	fetchComputerById: {
		"name": "fetchComputerById",
		"type": classes.Computer,
		"args": {
			id: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			id
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchComputerById({
				id
			}));
		})
	}
}

export const WompattiServiceMutations = {
	addComputer: {
		"name": "addComputer",
		"type": classes.Computer,
		"args": {
			name: {
				type: GraphQLString
			},
			mac: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			name,
			mac
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.addComputer({
				name,
				mac
			}));
		})
	},
	wakeup: {
		"name": "wakeup",
		"type": GraphQLBoolean,
		"args": {
			computerId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			computerId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.wakeup({
				computerId
			}));
		})
	},
	editComputer: {
		"name": "editComputer",
		"type": classes.Computer,
		"args": {
			id: {
				type: GraphQLInt
			},
			name: {
				type: GraphQLString
			},
			mac: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			id,
			name,
			mac
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.editComputer({
				id,
				name,
				mac
			}));
		})
	}
}
