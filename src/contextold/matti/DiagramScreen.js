
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		id,
		slug,
		diagramId,
		matrixId,
		conPortId
	}) {
		this.client = client;
		var _id = id;
		var _slug = slug;
		var _diagramId = diagramId;
		var _matrixId = matrixId;
		var _conPortId = conPortId;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"slug": {
				get: () => _slug,
				set: (slug) => {
					_slug = slug
					var req = new messages.EditDiagramScreenRequest();
					req.setDiagramscreenid(_id);
					req.setSlug(_slug);
					this.client.editDiagramScreen(req, (erro, res) => {

					});
				}
			},
			"diagramId": {
				get: () => _diagramId
			},
			"matrixId": {
				get: () => _matrixId,
				set: (matrixId) => {
					_matrixId = matrixId
					var req = new messages.EditDiagramScreenRequest();
					req.setDiagramscreenid(_id);
					req.setMatrixid(_matrixId);
					this.client.editDiagramScreen(req, (erro, res) => {

					});
				}
			},
			"conPortId": {
				get: () => _conPortId,
				set: (conPortId) => {
					_conPortId = conPortId
					var req = new messages.EditDiagramScreenRequest();
					req.setDiagramscreenid(_id);
					req.setConportid(_conPortId);
					this.client.editDiagramScreen(req, (erro, res) => {

					});
				}
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
			"diagram": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchDiagramByIdRequest();
						req.setDiagramid(_diagramId);
						
						
			this.client.fetchDiagramById(req, (err, res) => {
				resolve(new classes.FetchDiagramByIdResponse(this.client, {
					diagram: res.getFetchDiagramByIdResponse().getDiagram()
				}));
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

	createDefaultState({
		slug,
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDefaultStateRequest();
			req.setSlug(slug);
			req.setMatrixid(matrixId)
			
			this.client.createDefaultState(req, (err, res) => {
				resolve(new classes.CreateDefaultStateResponse(this.client, {
					defaultState: res.getCreateDefaultStateResponse().getDefaultstate()
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
				resolve(new classes.InsertKvmConnectionToDefaultStateResponse(this.client, {
					defaultStateKwmConnection: res.getInsertKvmConnectionToDefaultStateResponse().getDefaultstatekwmconnection()
				}));
			});
		});
	}

	fetchDiagramById({
		diagramId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramByIdRequest();
			req.setDiagramid(diagramId)
			
			this.client.fetchDiagramById(req, (err, res) => {
				resolve(new classes.FetchDiagramByIdResponse(this.client, {
					diagram: res.getFetchDiagramByIdResponse().getDiagram()
				}));
			});
		});
	}

	editDiagram({
		diagramId,
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditDiagramRequest();
			req.setDiagramid(diagramId);
			req.setSlug(slug)
			
			this.client.editDiagram(req, (err, res) => {
				resolve(new classes.EditDiagramResponse(this.client, {
					diagram: res.getEditDiagramResponse().getDiagram()
				}));
			});
		});
	}

	removeDiagram({
		diagramId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDiagramRequest();
			req.setDiagramid(diagramId)
			
			this.client.removeDiagram(req, (err, res) => {
				resolve(new classes.RemoveDiagramResponse(this.client, {
					success: res.getRemoveDiagramResponse().getSuccess(),
					state: res.getRemoveDiagramResponse().getState()
				}));
			});
		});
	}

	removeDiagramScreen() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDiagramScreenRequest();
			req.setDiagramscreenid(this.id)
			
			this.client.removeDiagramScreen(req, (err, res) => {
				resolve(new classes.RemoveDiagramScreenResponse(this.client, {
					success: res.getRemoveDiagramScreenResponse().getSuccess(),
					state: res.getRemoveDiagramScreenResponse().getState()
				}));
			});
		});
	}

	addCpuToDiagramScreen({
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddCpuToDiagramScreenRequest();
			req.setDiagramscreenid(this.id);
			req.setCpuportid(cpuPortId)
			
			this.client.addCpuToDiagramScreen(req, (err, res) => {
				resolve(new classes.AddCpuToDiagramScreenResponse(this.client, {
					diagramScreenCpuPort: res.getAddCpuToDiagramScreenResponse().getDiagramscreencpuport()
				}));
			});
		});
	}

	removeCpuFromDiagramScreen({
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveCpuFromDiagramScreenRequest();
			req.setDiagramscreenid(this.id);
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
	
	