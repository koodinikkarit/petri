
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
	},
	fetchKeijos: {
		"name": "fetchKeijos",
		"type": new GraphQLList(classes.Keijo),
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
			resolve(context.wompatti.fetchKeijos({
				offset,
				limit
			}));
		})
	},
	fetchKeijoById: {
		"name": "fetchKeijoById",
		"type": classes.Keijo,
		"args": {
			keijoId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			keijoId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchKeijoById({
				keijoId
			}));
		})
	},
	fetchCecDevicePowerStatusByKeijoId: {
		"name": "fetchCecDevicePowerStatusByKeijoId",
		"type": GraphQLBoolean,
		"args": {
			keijoId: {
				type: GraphQLInt
			},
			address: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			keijoId,
			address
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchCecDevicePowerStatusByKeijoId({
				keijoId,
				address
			}));
		})
	},
	fetchCecTvDeviceSourceByKeijoId: {
		"name": "fetchCecTvDeviceSourceByKeijoId",
		"type": GraphQLBoolean,
		"args": {
			keijoId: {
				type: GraphQLInt
			},
			address: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			keijoId,
			address
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchCecTvDeviceSourceByKeijoId({
				keijoId,
				address
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
	},
	removeComputer: {
		"name": "removeComputer",
		"type": GraphQLBoolean,
		"args": {
			computerId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			computerId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.removeComputer({
				computerId
			}));
		})
	},
	addKeijo: {
		"name": "addKeijo",
		"type": classes.Keijo,
		"args": {
			name: {
				type: GraphQLString
			},
			ip: {
				type: GraphQLString
			},
			port: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			name,
			ip,
			port
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.addKeijo({
				name,
				ip,
				port
			}));
		})
	},
	editKeijo: {
		"name": "editKeijo",
		"type": classes.Keijo,
		"args": {
			keijoId: {
				type: GraphQLInt
			},
			name: {
				type: GraphQLString
			},
			ip: {
				type: GraphQLString
			},
			port: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			keijoId,
			name,
			ip,
			port
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.editKeijo({
				keijoId,
				name,
				ip,
				port
			}));
		})
	},
	removeKeijo: {
		"name": "removeKeijo",
		"type": GraphQLBoolean,
		"args": {
			keijoId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			keijoId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.removeKeijo({
				keijoId
			}));
		})
	},
	turnOnCecDevice: {
		"name": "turnOnCecDevice",
		"type": GraphQLBoolean,
		"args": {
			keijoId: {
				type: GraphQLInt
			},
			address: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			keijoId,
			address
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.turnOnCecDevice({
				keijoId,
				address
			}));
		})
	},
	changeKeijoSource: {
		"name": "changeKeijoSource",
		"type": GraphQLBoolean,
		"args": {
			keijoId: {
				type: GraphQLInt
			},
			sourceNumber: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			keijoId,
			sourceNumber
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.changeKeijoSource({
				keijoId,
				sourceNumber
			}));
		})
	},
	shutDownCecDevice: {
		"name": "shutDownCecDevice",
		"type": GraphQLBoolean,
		"args": {
			keijoId: {
				type: GraphQLInt
			},
			address: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			keijoId,
			address
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.shutDownCecDevice({
				keijoId,
				address
			}));
		})
	}
}
