
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
				resolve(new classes.FetchConPortByIdResponse(this.client, {
					conPort: res.getFetchConPortByIdResponse().getConport()
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
				resolve(new classes.FetchConPortByIdResponse(this.client, {
					conPort: res.getFetchConPortByIdResponse().getConport()
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
				resolve(new classes.FetchDefaultStateByIdResponse(this.client, {
					defaultState: res.getFetchDefaultStateByIdResponse().getDefaultstate()
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
				resolve(new classes.FetchConPortByIdResponse(this.client, {
					conPort: res.getFetchConPortByIdResponse().getConport()
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
				resolve(new classes.FetchConPortByIdResponse(this.client, {
					conPort: res.getFetchConPortByIdResponse().getConport()
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
				resolve(new classes.FetchDefaultStateByIdResponse(this.client, {
					defaultState: res.getFetchDefaultStateByIdResponse().getDefaultstate()
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
			
			this.client.removeDefaultState(req, (err, res) => {
				resolve(new classes.RemoveDefaultStateResponse(this.client, {
					success: res.getRemoveDefaultStateResponse().getSuccess(),
					state: res.getRemoveDefaultStateResponse().getState()
				}));
			});
		});
	}

	insertVideoConnectionToDefaultState({
		defaultStateId,
		conPortId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertVideoConnectionToDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			req.setConportid(conPortId);
			req.setCpuportid(cpuPortId)
			
			this.client.insertVideoConnectionToDefaultState(req, (err, res) => {
				resolve(new classes.InsertVideoConnectionToDefaultStateResponse(this.client, {
					defaultStateVideoConnection: res.getInsertVideoConnectionToDefaultStateResponse().getDefaultstatevideoconnection()
				}));
			});
		});
	}

	removeKvmConnectionFromDefaultState() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveKvmConnectionFromDefaultStateRequest();
			req.setDefaultstatekvmconnection(this.id)
			
			this.client.removeKvmConnectionFromDefaultState(req, (err, res) => {
				resolve(new classes.RemoveKvmConnectionFromDefaultStateResponse(this.client, {
					success: res.getRemoveKvmConnectionFromDefaultStateResponse().getSuccess(),
					state: res.getRemoveKvmConnectionFromDefaultStateResponse().getState()
				}));
			});
		});
	}

	executeDefaultState({
		defaultStateId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.ExecuteDefaultStateRequest();
			req.setDefaultstateid(defaultStateId)
			
			this.client.executeDefaultState(req, (err, res) => {
				resolve(new classes.ExecuteDefaultStateResponse(this.client, {
					success: res.getExecuteDefaultStateResponse().getSuccess(),
					state: res.getExecuteDefaultStateResponse().getState()
				}));
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
				resolve(new classes.CreateDiagramScreenResponse(this.client, {
					diagramScreen: res.getCreateDiagramScreenResponse().getDiagramscreen()
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
				resolve(new classes.EditDiagramScreenResponse(this.client, {
					diagramScreen: res.getEditDiagramScreenResponse().getDiagramscreen()
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
				resolve(new classes.AddCpuToDiagramScreenResponse(this.client, {
					diagramScreenCpuPort: res.getAddCpuToDiagramScreenResponse().getDiagramscreencpuport()
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
			
			this.client.removeCpuFromDiagramScreen(req, (err, res) => {
				resolve(new classes.RemoveCpuFromDiagramScreenResponse(this.client, {
					success: res.getRemoveCpuFromDiagramScreenResponse().getSuccess(),
					state: res.getRemoveCpuFromDiagramScreenResponse().getState()
				}));
			});
		});
	}
}	
	
	