
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean
} from "graphql";

import * as classes from "./";

export const MattiServiceQueries = {
	fetchMatrixs: {
		"name": "fetchMatrixs",
		"type": new GraphQLList(classes.Matrix),
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
			resolve(context.matti.fetchMatrixs({
				offset,
				limit
			}));
		})
	},
	fetchMatrixById: {
		"name": "fetchMatrixById",
		"type": classes.Matrix,
		"args": {
			matrixId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			matrixId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchMatrixById({
				matrixId
			}));
		})
	},
	fetchMatrixBySlug: {
		"name": "fetchMatrixBySlug",
		"type": classes.Matrix,
		"args": {
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchMatrixBySlug({
				slug
			}));
		})
	},
	fetchConPortsByMatrixId: {
		"name": "fetchConPortsByMatrixId",
		"type": new GraphQLList(classes.ConPort),
		"args": {
			matrixId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			matrixId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchConPortsByMatrixId({
				matrixId
			}));
		})
	},
	fetchCpuPortsByMatrixId: {
		"name": "fetchCpuPortsByMatrixId",
		"type": new GraphQLList(classes.CpuPort),
		"args": {
			matrixId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			matrixId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchCpuPortsByMatrixId({
				matrixId
			}));
		})
	},
	fetchConPortById: {
		"name": "fetchConPortById",
		"type": classes.ConPort,
		"args": {
			conPortId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			conPortId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchConPortById({
				conPortId
			}));
		})
	},
	fetchCpuPortById: {
		"name": "fetchCpuPortById",
		"type": classes.ConPort,
		"args": {
			conPortId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			conPortId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchCpuPortById({
				conPortId
			}));
		})
	},
	fetchDefaultStates: {
		"name": "fetchDefaultStates",
		"type": new GraphQLList(classes.DefaultState),
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
			resolve(context.matti.fetchDefaultStates({
				offset,
				limit
			}));
		})
	},
	fetchDefaultStateById: {
		"name": "fetchDefaultStateById",
		"type": classes.DefaultState,
		"args": {
			defaultStateId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			defaultStateId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchDefaultStateById({
				defaultStateId
			}));
		})
	},
	fetchDefaultStateBySlug: {
		"name": "fetchDefaultStateBySlug",
		"type": classes.DefaultState,
		"args": {
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchDefaultStateBySlug({
				slug
			}));
		})
	},
	fetchDiagrams: {
		"name": "fetchDiagrams",
		"type": new GraphQLList(classes.Diagram),
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
			resolve(context.matti.fetchDiagrams({
				offset,
				limit
			}));
		})
	},
	fetchDiagramById: {
		"name": "fetchDiagramById",
		"type": classes.Diagram,
		"args": {
			diagramId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			diagramId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchDiagramById({
				diagramId
			}));
		})
	},
	fetchDiagramBySlug: {
		"name": "fetchDiagramBySlug",
		"type": classes.Diagram,
		"args": {
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchDiagramBySlug({
				slug
			}));
		})
	},
	fetchDiagramScreensByDiagramId: {
		"name": "fetchDiagramScreensByDiagramId",
		"type": new GraphQLList(classes.DiagramScreen),
		"args": {
			diagramId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			diagramId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchDiagramScreensByDiagramId({
				diagramId
			}));
		})
	},
	fetchDiagramScreens: {
		"name": "fetchDiagramScreens",
		"type": new GraphQLList(classes.DiagramScreen),
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
			resolve(context.matti.fetchDiagramScreens({
				offset,
				limit
			}));
		})
	},
	fetchDiagramScreenById: {
		"name": "fetchDiagramScreenById",
		"type": classes.DiagramScreen,
		"args": {
			diagramScreenId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			diagramScreenId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchDiagramScreenById({
				diagramScreenId
			}));
		})
	},
	fetchDiagramScreenBySlug: {
		"name": "fetchDiagramScreenBySlug",
		"type": classes.DiagramScreen,
		"args": {
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.fetchDiagramScreenBySlug({
				slug
			}));
		})
	}
}

export const MattiServiceMutations = {
	connectMatrix: {
		"name": "connectMatrix",
		"type": classes.Matrix,
		"args": {
			slug: {
				type: GraphQLString
			},
			ip: {
				type: GraphQLString
			},
			port: {
				type: GraphQLInt
			},
			numberOfConPorts: {
				type: GraphQLInt
			},
			numberOfCpuPorts: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			slug,
			ip,
			port,
			numberOfConPorts,
			numberOfCpuPorts
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.connectMatrix({
				slug,
				ip,
				port,
				numberOfConPorts,
				numberOfCpuPorts
			}));
		})
	},
	editMatrix: {
		"name": "editMatrix",
		"type": classes.Matrix,
		"args": {
			id: {
				type: GraphQLInt
			},
			slug: {
				type: GraphQLString
			},
			ip: {
				type: GraphQLString
			},
			port: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			id,
			slug,
			ip,
			port
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.editMatrix({
				id,
				slug,
				ip,
				port
			}));
		})
	},
	removeMatrix: {
		"name": "removeMatrix",
		"type": GraphQLBoolean,
		"args": {
			matrixId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			matrixId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.removeMatrix({
				matrixId
			}));
		})
	},
	editConPort: {
		"name": "editConPort",
		"type": classes.ConPort,
		"args": {
			id: {
				type: GraphQLInt
			},
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			id,
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.editConPort({
				id,
				slug
			}));
		})
	},
	editCpuPort: {
		"name": "editCpuPort",
		"type": classes.CpuPort,
		"args": {
			id: {
				type: GraphQLInt
			},
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			id,
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.editCpuPort({
				id,
				slug
			}));
		})
	},
	createDefaultState: {
		"name": "createDefaultState",
		"type": classes.DefaultState,
		"args": {
			slug: {
				type: GraphQLString
			},
			matrixId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			slug,
			matrixId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.createDefaultState({
				slug,
				matrixId
			}));
		})
	},
	editDefaultState: {
		"name": "editDefaultState",
		"type": GraphQLBoolean,
		"args": {
			defaultStateId: {
				type: GraphQLInt
			},
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			defaultStateId,
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.editDefaultState({
				defaultStateId,
				slug
			}));
		})
	},
	removeDefaultState: {
		"name": "removeDefaultState",
		"type": GraphQLBoolean,
		"args": {
			defaultStateId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			defaultStateId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.removeDefaultState({
				defaultStateId
			}));
		})
	},
	insertVideoConnectionToDefaultState: {
		"name": "insertVideoConnectionToDefaultState",
		"type": classes.DefaultStateVideoConnection,
		"args": {
			defaultStateId: {
				type: GraphQLInt
			},
			conPortId: {
				type: GraphQLInt
			},
			cpuPortId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			defaultStateId,
			conPortId,
			cpuPortId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.insertVideoConnectionToDefaultState({
				defaultStateId,
				conPortId,
				cpuPortId
			}));
		})
	},
	insertKvmConnectionToDefaultState: {
		"name": "insertKvmConnectionToDefaultState",
		"type": classes.DefaultStateKvmConnection,
		"args": {
			defaultStateId: {
				type: GraphQLInt
			},
			conPortId: {
				type: GraphQLInt
			},
			cpuPortId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			defaultStateId,
			conPortId,
			cpuPortId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.insertKvmConnectionToDefaultState({
				defaultStateId,
				conPortId,
				cpuPortId
			}));
		})
	},
	removeVideoConnectionFromDefaultState: {
		"name": "removeVideoConnectionFromDefaultState",
		"type": GraphQLBoolean,
		"args": {
			defaultStateVideoConnection: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			defaultStateVideoConnection
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.removeVideoConnectionFromDefaultState({
				defaultStateVideoConnection
			}));
		})
	},
	removeKvmConnectionFromDefaultState: {
		"name": "removeKvmConnectionFromDefaultState",
		"type": GraphQLBoolean,
		"args": {
			defaultStateKvmConnection: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			defaultStateKvmConnection
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.removeKvmConnectionFromDefaultState({
				defaultStateKvmConnection
			}));
		})
	},
	executeDefaultState: {
		"name": "executeDefaultState",
		"type": GraphQLBoolean,
		"args": {
			defaultStateId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			defaultStateId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.executeDefaultState({
				defaultStateId
			}));
		})
	},
	createDiagram: {
		"name": "createDiagram",
		"type": classes.Diagram,
		"args": {
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.createDiagram({
				slug
			}));
		})
	},
	editDiagram: {
		"name": "editDiagram",
		"type": classes.Diagram,
		"args": {
			diagramId: {
				type: GraphQLInt
			},
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			diagramId,
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.editDiagram({
				diagramId,
				slug
			}));
		})
	},
	removeDiagram: {
		"name": "removeDiagram",
		"type": GraphQLBoolean,
		"args": {
			diagramId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			diagramId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.removeDiagram({
				diagramId
			}));
		})
	},
	createDiagramScreen: {
		"name": "createDiagramScreen",
		"type": classes.DiagramScreen,
		"args": {
			diagramId: {
				type: GraphQLInt
			},
			slug: {
				type: GraphQLString
			},
			conPortId: {
				type: GraphQLInt
			},
			matrixId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			diagramId,
			slug,
			conPortId,
			matrixId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.createDiagramScreen({
				diagramId,
				slug,
				conPortId,
				matrixId
			}));
		})
	},
	removeDiagramScreen: {
		"name": "removeDiagramScreen",
		"type": GraphQLBoolean,
		"args": {
			diagramScreenId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			diagramScreenId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.removeDiagramScreen({
				diagramScreenId
			}));
		})
	},
	editDiagramScreen: {
		"name": "editDiagramScreen",
		"type": classes.DiagramScreen,
		"args": {
			id: {
				type: GraphQLInt
			},
			slug: {
				type: GraphQLString
			},
			conPortId: {
				type: GraphQLInt
			},
			matrixId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			id,
			slug,
			conPortId,
			matrixId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.editDiagramScreen({
				id,
				slug,
				conPortId,
				matrixId
			}));
		})
	},
	addCpuToDiagramScreen: {
		"name": "addCpuToDiagramScreen",
		"type": classes.DiagramScreenCpuPort,
		"args": {
			diagramScreenId: {
				type: GraphQLInt
			},
			cpuPortId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			diagramScreenId,
			cpuPortId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.addCpuToDiagramScreen({
				diagramScreenId,
				cpuPortId
			}));
		})
	},
	removeCpuFromDiagramScreen: {
		"name": "removeCpuFromDiagramScreen",
		"type": GraphQLBoolean,
		"args": {
			diagramScreenId: {
				type: GraphQLInt
			},
			cpuPortId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			diagramScreenId,
			cpuPortId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.matti.removeCpuFromDiagramScreen({
				diagramScreenId,
				cpuPortId
			}));
		})
	}
}
