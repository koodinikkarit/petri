
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		id,
		conPortId,
		cpuPortId,
		defaultStateId
	}) {
		this.client = client;
		var _id = id;
		var _conPortId = conPortId;
		var _cpuPortId = cpuPortId;
		var _defaultStateId = defaultStateId;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"conPortId": {
				get: () => _conPortId
			},
			"cpuPortId": {
				get: () => _cpuPortId
			},
			"defaultStateId": {
				get: () => _defaultStateId
			},
			"conPort": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchConPortByIdRequest();
						req.setConportid(_conPortId);
						
						
			this.client.fetchConPortById(req, (err, res) => {
				resolve(new classes.ConPort(this.client, {
					id: res.getConPort().getId(),
					slug: res.getConPort().getSlug(),
					matrixId: res.getConPort().getMatrixid(),
					portNum: res.getConPort().getPortnum()
				}));
			});
					});
				}
			},
			"cpuPort": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchCpuPortByIdRequest();
						req.setConportid(_conPortId);
						
						
			this.client.fetchCpuPortById(req, (err, res) => {
				resolve(new classes.ConPort(this.client, {
					id: res.getConPort().getId(),
					slug: res.getConPort().getSlug(),
					matrixId: res.getConPort().getMatrixid(),
					portNum: res.getConPort().getPortnum()
				}));
			});
					});
				}
			},
			"defaultState": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchDefaultStateByIdRequest();
						req.setDefaultstateid(_defaultStateId);
						
						
			this.client.fetchDefaultStateById(req, (err, res) => {
				resolve(new classes.DefaultState(this.client, {
					id: res.getDefaultState().getId(),
					slug: res.getDefaultState().getSlug(),
					matrixId: res.getDefaultState().getMatrixid()
				}));
			});
					});
				}
			}
		})
	}

	
	fetchConPortById({
		conPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchConPortByIdRequest();
			req.setConportid(conPortId)
			
			this.client.fetchConPortById(req, (err, res) => {
				resolve(new classes.ConPort(this.client, {
					id: res.getConPort().getId(),
					slug: res.getConPort().getSlug(),
					matrixId: res.getConPort().getMatrixid(),
					portNum: res.getConPort().getPortnum()
				}));
			});
		});
	}

	fetchCpuPortById({
		conPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchCpuPortByIdRequest();
			req.setConportid(conPortId)
			
			this.client.fetchCpuPortById(req, (err, res) => {
				resolve(new classes.ConPort(this.client, {
					id: res.getConPort().getId(),
					slug: res.getConPort().getSlug(),
					matrixId: res.getConPort().getMatrixid(),
					portNum: res.getConPort().getPortnum()
				}));
			});
		});
	}

	fetchDefaultStateById({
		defaultStateId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDefaultStateByIdRequest();
			req.setDefaultstateid(defaultStateId)
			
			this.client.fetchDefaultStateById(req, (err, res) => {
				resolve(new classes.DefaultState(this.client, {
					id: res.getDefaultState().getId(),
					slug: res.getDefaultState().getSlug(),
					matrixId: res.getDefaultState().getMatrixid()
				}));
			});
		});
	}

	removeDefaultState({
		defaultStateId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDefaultStateRequest();
			req.setDefaultstateid(defaultStateId)
			
			this.removeDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	insertKvmConnectionToDefaultState({
		defaultStateId,
		conPortId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertKvmConnectionToDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			req.setConportid(conPortId);
			req.setCpuportid(cpuPortId)
			
			this.client.insertKvmConnectionToDefaultState(req, (err, res) => {
				resolve(new classes.DefaultStateKvmConnection(this.client, {
					id: res.getDefaultStateKvmConnection().getId(),
					conPortId: res.getDefaultStateKvmConnection().getConportid(),
					cpuPortId: res.getDefaultStateKvmConnection().getCpuportid(),
					defaultStateId: res.getDefaultStateKvmConnection().getDefaultstateid()
				}));
			});
		});
	}

	removeVideoConnectionFromDefaultState() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveVideoConnectionFromDefaultStateRequest();
			req.setDefaultstatevideoconnection(this.id)
			
			this.removeVideoConnectionFromDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	executeDefaultState({
		defaultStateId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.ExecuteDefaultStateRequest();
			req.setDefaultstateid(defaultStateId)
			
			this.executeDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	createDiagramScreen({
		diagramId,
		slug,
		conPortId,
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDiagramScreenRequest();
			req.setDiagramid(diagramId);
			req.setSlug(slug);
			req.setConportid(conPortId);
			req.setMatrixid(matrixId)
			
			this.client.createDiagramScreen(req, (err, res) => {
				resolve(new classes.DiagramScreen(this.client, {
					id: res.getDiagramScreen().getId(),
					slug: res.getDiagramScreen().getSlug(),
					diagramId: res.getDiagramScreen().getDiagramid(),
					matrixId: res.getDiagramScreen().getMatrixid(),
					conPortId: res.getDiagramScreen().getConportid()
				}));
			});
		});
	}

	editDiagramScreen({
		id,
		slug,
		conPortId,
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditDiagramScreenRequest();
			req.setId(id);
			req.setSlug(slug);
			req.setConportid(conPortId);
			req.setMatrixid(matrixId)
			
			this.client.editDiagramScreen(req, (err, res) => {
				resolve(new classes.DiagramScreen(this.client, {
					id: res.getDiagramScreen().getId(),
					slug: res.getDiagramScreen().getSlug(),
					diagramId: res.getDiagramScreen().getDiagramid(),
					matrixId: res.getDiagramScreen().getMatrixid(),
					conPortId: res.getDiagramScreen().getConportid()
				}));
			});
		});
	}

	addCpuToDiagramScreen({
		diagramScreenId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddCpuToDiagramScreenRequest();
			req.setDiagramscreenid(diagramScreenId);
			req.setCpuportid(cpuPortId)
			
			this.client.addCpuToDiagramScreen(req, (err, res) => {
				resolve(new classes.DiagramScreenCpuPort(this.client, {
					id: res.getDiagramScreenCpuPort().getId(),
					diagramScreenId: res.getDiagramScreenCpuPort().getDiagramscreenid(),
					cpuPortId: res.getDiagramScreenCpuPort().getCpuportid()
				}));
			});
		});
	}

	removeCpuFromDiagramScreen({
		diagramScreenId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveCpuFromDiagramScreenRequest();
			req.setDiagramscreenid(diagramScreenId);
			req.setCpuportid(cpuPortId)
			
			this.removeCpuFromDiagramScreen(req, (err, res) => {
				resolve();
			});
		});
	}
}	
	
	