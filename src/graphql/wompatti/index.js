import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean,
	GraphQLNonNull
} from "graphql";

import Arttu from "./Arttu";
import Computer from "./Computer";
import CreateComputerResponse from "./CreateComputerResponse";
import EditComputerResponse from "./EditComputerResponse";
import RemoveComputerResponse from "./RemoveComputerResponse";
import FetchComputerByIdResponse from "./FetchComputerByIdResponse";
import FetchDeviceInfoByIdResponse from "./FetchDeviceInfoByIdResponse";
import FetchKeyValuesByDeviceInfoIdResponse from "./FetchKeyValuesByDeviceInfoIdResponse";
import CreateKeyValueResponse from "./CreateKeyValueResponse";
import EditKeyValueResponse from "./EditKeyValueResponse";
import RemoveKeyValueResponse from "./RemoveKeyValueResponse";
import CreateDeviceResponse from "./CreateDeviceResponse";
import RemoveDeviceResponse from "./RemoveDeviceResponse";
import Device from "./Device";
import FetchDeviceByIdResponse from "./FetchDeviceByIdResponse";
import EthernetInterface from "./EthernetInterface";
import CreateWolInterfaceResponse from "./CreateWolInterfaceResponse";

import getId from "../getId";

export const WompattiQueries = {
	fetchComputers: {
		name: "FetchComputers",
		type: new GraphQLList(Computer),
		args: {
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
		name: "FetchComputerById",
		type: FetchComputerByIdResponse,
		args: {
			computerId: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			computerId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchComputerById(getId(computerId)));	
		})
	},
	fetchDeviceInfoById: {
		name: "FetchDeviceInfoById",
		type: FetchDeviceInfoByIdResponse,
		args: {
			deviceInfoId: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			deviceInfoId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchDeviceInfoById(getId(deviceInfoId)));
		})
	},
	fetchKeyValuesByDeviceInfoId: {
		name: "FetchKeyValuesByDeviceInfoId",
		type: FetchKeyValuesByDeviceInfoIdResponse,
		args: {
			deviceInfoId: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			deviceInfoId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchKeyValuesByDeviceInfoId(getId(deviceInfoId)));
		})
	},
	fetchEthernetInterfaces: {
		name: "FetchEthernetInterfaces",
		type: new GraphQLList(EthernetInterface),
		args: {

		},
		resolve: (root, {

		}, context) => new Promise((resolve, reject) => {
			var iit = context.wompatti.fetchEthernetInterfaces();
			iit.then(ab => {
				console.log("iit", ab[0].name);
				resolve(ab);
			})
		})
	}
}

export const WompattiMutations = {
	createComputer: {
		name: "createComputer",
		type: CreateComputerResponse,
		args: {
			name: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			name
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.createComputer({
				name
			}));
		})
	},
	editComputer: {
		name: "Editcomputer",
		type: EditComputerResponse,
		args: {
			computerId: {
				type: new GraphQLNonNull(GraphQLString)
			},
			name: {
				type: GraphQLString
			},
			arttuId: {
				type: GraphQLString
			},
			deviceInfoId: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			computerId,
			name,
			arttuId,
			deviceInfoId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.editComputer({
				computerId: getId(computerId),
				name,
				arttuId: getId(arttuId),
				deviceInfoId: getId(deviceInfoId)
			}));
		})
	},
	removeComputer: {
		name: "RemoveComputer",
		type: RemoveComputerResponse,
		args: {
			computerId: {
				type: new GraphQLNonNull(GraphQLString)
			}
		},
		resolve: (root, {
			computerId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.removeComputer(getId(computerId)));
		})
	},
	createKeyValue: {
		name: "CreateKeyValue",
		type: CreateKeyValueResponse,
		args: {
			deviceInfoId: {
				type: new GraphQLNonNull(GraphQLString)
			},
			key: {
				type: GraphQLString
			},
			value: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			deviceInfoId,
			key,
			value
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.createKeyValue({
				deviceInfoId: getId(deviceInfoId),
				key,
				value
			}));
		})
	},
	editKeyValue: {
		name: "EditKeyValue",
		type: EditKeyValueResponse,
		args: {
			keyValueId: {
				type: new GraphQLNonNull(GraphQLString)
			},
			key: {
				type: GraphQLString
			},
			value: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			keyValueId,
			key,
			value
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.editKeyValue({
				keyValueId: getId(keyValueId),
				key,
				value
			}));
		})
	},
	removeKeyValue: {
		name: "RemoveKeyValue",
		type: RemoveKeyValueResponse,
		args: {
			keyValueId: {
				type: new GraphQLNonNull(GraphQLString)
			}
		},
		resolve: (root, {
			keyValueId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.removeKeyValue(getId(keyValueId)));
		})
	},
	createDevice: {
		name: "CreateDevice",
		type: CreateDeviceResponse,
		args: {
			name: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			name
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.createDevice(name));
		})
	},
	removeDevice: {
		name: "RemoveDevice",
		type: RemoveDeviceResponse,
		args: {
			deviceId: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			deviceId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.removeDevice(getId(deviceId)));
		})
	},
	fetchDevices: {
		name: "FetchDevices",
		type: Device,
		args: {
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
			resolve(context.wompatti.fetchDevices({
				offset,
				limit
			}));
		})
	},
	fetchDeviceById: {
		name: "FetchDeviceById",
		type: FetchDeviceByIdResponse,
		args: {
			deviceId: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			deviceId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.fetchDeviceById(deviceId));
		})
	},
	createWolInterface: {
		name: "CreateWolInterface",
		type: CreateWolInterfaceResponse,
		args: {
			computerId: {
				type: GraphQLString
			},
			ethernetInterfaceId: {
				type: GraphQLString
			},
			mac: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			computerId,
			ethernetInterfaceId,
			mac
		}, context) => new Promise((resolve, reject) => {
			resolve(context.wompatti.createWolInterface({

			}));
		})
	}
}