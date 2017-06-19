
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
		"type": classes.FetchComputerByIdResponse,
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
	fetchComputerWolDevice: {
		"name": "fetchComputerWolDevice",
		"type": classes.FetchComputerWolDeviceResponse,
		"args": {
			computerId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			computerId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchComputerWolDevice({
				computerId
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
		"type": classes.FetchKeijoByIdResponse,
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
		"type": classes.FetchCecDevicePowerStatusByKeijoIdResponse,
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
		"type": classes.FetchCecTvDeviceSourceByKeijoIdResponse,
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
	},
	fetchArttuDevices: {
		"name": "fetchArttuDevices",
		"type": new GraphQLList(classes.Arttu),
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
			resolve(context.wompatti.fetchArttuDevices({
				offset,
				limit
			}));
		})
	},
	fetchArttuDeviceById: {
		"name": "fetchArttuDeviceById",
		"type": classes.FetchArttuDeviceByIdResponse,
		"args": {
			arttuId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			arttuId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchArttuDeviceById({
				arttuId
			}));
		})
	},
	fetchArttuEthernetInterfaces: {
		"name": "fetchArttuEthernetInterfaces",
		"type": new GraphQLList(classes.EthernetInterface),
		"args": {
			arttuId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			arttuId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchArttuEthernetInterfaces({
				arttuId
			}));
		})
	},
	fetchArttuEthernetInterfaceById: {
		"name": "fetchArttuEthernetInterfaceById",
		"type": classes.FetchArttuEthernetInterfaceByIdResponse,
		"args": {
			ethernetInterfaceId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			ethernetInterfaceId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchArttuEthernetInterfaceById({
				ethernetInterfaceId
			}));
		})
	}
}

export const WompattiServiceMutations = {
	createComputer: {
		"name": "createComputer",
		"type": classes.CreateComputerResponse,
		"args": {
			
		},
		resolve: (root, {
			
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.createComputer({
				
			}));
		})
	},
	editComputer: {
		"name": "editComputer",
		"type": classes.EditComputerResponse,
		"args": {
			id: {
				type: GraphQLInt
			},
			arttuId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			id,
			arttuId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.editComputer({
				id,
				arttuId
			}));
		})
	},
	removeComputer: {
		"name": "removeComputer",
		"type": classes.RemoveComputerResponse,
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
	wakeup: {
		"name": "wakeup",
		"type": classes.WakeupResponse,
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
	createWolDevice: {
		"name": "createWolDevice",
		"type": classes.CreateWolDeviceResponse,
		"args": {
			computerId: {
				type: GraphQLInt
			},
			ethernetInterface: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			computerId,
			ethernetInterface
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.createWolDevice({
				computerId,
				ethernetInterface
			}));
		})
	},
	turnOnCecDevice: {
		"name": "turnOnCecDevice",
		"type": classes.TurnOnCecDeviceResponse,
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
		"type": classes.ChangeKeijoSourceResponse,
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
		"type": classes.ShutDownCecDeviceResponse,
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
	},
	createDevice: {
		"name": "createDevice",
		"type": classes.CreateDeviceResponse,
		"args": {
			
		},
		resolve: (root, {
			
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.createDevice({
				
			}));
		})
	}
}
