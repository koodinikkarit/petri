
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		id,
		slug,
		matrixId
	}) {
		this.client = client;
		var _id = id;
		var _slug = slug;
		var _matrixId = matrixId;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"slug": {
				get: () => _slug,
				set: (slug) => {
					_slug = slug
					var req = new messages.EditDefaultStateRequest();
					req.setDefaultstateid(_id);
					req.setSlug(_slug);
					this.client.editDefaultState(req, (erro, res) => {

					});
				}
			},
			"matrixId": {
				get: () => _matrixId
			},
			"matrix": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchMatrixByIdRequest();
						req.setMatrixid(_matrixId);
						
						
			this.client.fetchMatrixById(req, (err, res) => {
				resolve(new classes.FetchMatrixByIdResponse(this.client, {
					matrix: res.getFetchMatrixByIdResponse().getMatrix()
				}));
			});
					});
				}
			},
			"conPorts": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchConPortsByMatrixIdRequest();
						req.setMatrixid(_matrixId);
						
						
			var call = this.client.fetchConPortsByMatrixId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.ConPort(this.client, {
					id: data.getId(),
					slug: data.getSlug(),
					matrixId: data.getMatrixid(),
					portNum: data.getPortnum()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
					});
				}
			},
			"cpuPorts": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchCpuPortsByMatrixIdRequest();
						req.setMatrixid(_matrixId);
						
						
			var call = this.client.fetchCpuPortsByMatrixId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.CpuPort(this.client, {
					id: data.getId(),
					slug: data.getSlug(),
					matrixId: data.getMatrixid(),
					portNum: data.getPortnum()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
					});
				}
			}
		})
	}

	
	fetchMatrixById({
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchMatrixByIdRequest();
			req.setMatrixid(matrixId)
			
			this.client.fetchMatrixById(req, (err, res) => {
				resolve(new classes.FetchMatrixByIdResponse(this.client, {
					matrix: res.getFetchMatrixByIdResponse().getMatrix()
				}));
			});
		});
	}

	fetchConPortsByMatrixId({
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchConPortsByMatrixIdRequest();
			req.setMatrixid(matrixId)
			
			var call = this.client.fetchConPortsByMatrixId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.ConPort(this.client, {
					id: data.getId(),
					slug: data.getSlug(),
					matrixId: data.getMatrixid(),
					portNum: data.getPortnum()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchCpuPortsByMatrixId({
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchCpuPortsByMatrixIdRequest();
			req.setMatrixid(matrixId)
			
			var call = this.client.fetchCpuPortsByMatrixId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.CpuPort(this.client, {
					id: data.getId(),
					slug: data.getSlug(),
					matrixId: data.getMatrixid(),
					portNum: data.getPortnum()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	removeMatrix({
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveMatrixRequest();
			req.setMatrixid(matrixId)
			
			this.client.removeMatrix(req, (err, res) => {
				resolve(new classes.RemoveMatrixResponse(this.client, {
					success: res.getRemoveMatrixResponse().getSuccess(),
					state: res.getRemoveMatrixResponse().getState()
				}));
			});
		});
	}

	removeDefaultState() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDefaultStateRequest();
			req.setDefaultstateid(this.id)
			
			this.client.removeDefaultState(req, (err, res) => {
				resolve(new classes.RemoveDefaultStateResponse(this.client, {
					success: res.getRemoveDefaultStateResponse().getSuccess(),
					state: res.getRemoveDefaultStateResponse().getState()
				}));
			});
		});
	}

	insertVideoConnectionToDefaultState({
		conPortId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertVideoConnectionToDefaultStateRequest();
			req.setDefaultstateid(this.id);
			req.setConportid(conPortId);
			req.setCpuportid(cpuPortId)
			
			this.client.insertVideoConnectionToDefaultState(req, (err, res) => {
				resolve(new classes.InsertVideoConnectionToDefaultStateResponse(this.client, {
					defaultStateVideoConnection: res.getInsertVideoConnectionToDefaultStateResponse().getDefaultstatevideoconnection()
				}));
			});
		});
	}

	insertKvmConnectionToDefaultState({
		conPortId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertKvmConnectionToDefaultStateRequest();
			req.setDefaultstateid(this.id);
			req.setConportid(conPortId);
			req.setCpuportid(cpuPortId)
			
			this.client.insertKvmConnectionToDefaultState(req, (err, res) => {
				resolve(new classes.InsertKvmConnectionToDefaultStateResponse(this.client, {
					defaultStateKwmConnection: res.getInsertKvmConnectionToDefaultStateResponse().getDefaultstatekwmconnection()
				}));
			});
		});
	}

	removeVideoConnectionFromDefaultState() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveVideoConnectionFromDefaultStateRequest();
			req.setDefaultstatevideoconnection(this.id)
			
			this.client.removeVideoConnectionFromDefaultState(req, (err, res) => {
				resolve(new classes.RemoveVideoConnectionFromDefaultStateResponse(this.client, {
					success: res.getRemoveVideoConnectionFromDefaultStateResponse().getSuccess(),
					state: res.getRemoveVideoConnectionFromDefaultStateResponse().getState()
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

	executeDefaultState() {
		return new Promise((resolve, reject) => {
			var req = new messages.ExecuteDefaultStateRequest();
			req.setDefaultstateid(this.id)
			
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
}	
	
	