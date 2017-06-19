
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		id,
		slug,
		matrixId,
		portNum
	}) {
		this.client = client;
		var _id = id;
		var _slug = slug;
		var _matrixId = matrixId;
		var _portNum = portNum;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"slug": {
				get: () => _slug,
				set: (slug) => {
					_slug = slug
					var req = new messages.EditConPortRequest();
					req.setConportid(_id);
					req.setSlug(_slug);
					this.client.editConPort(req, (erro, res) => {

					});
				}
			},
			"matrixId": {
				get: () => _matrixId
			},
			"portNum": {
				get: () => _portNum
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

	connectMatrix({
		slug,
		ip,
		port,
		numberOfCpuPorts
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.ConnectMatrixRequest();
			req.setSlug(slug);
			req.setIp(ip);
			req.setPort(port);
			req.setNumberofconports(this.id);
			req.setNumberofcpuports(numberOfCpuPorts)
			
			this.client.connectMatrix(req, (err, res) => {
				resolve(new classes.ConnectMatrixResponse(this.client, {
					matrix: res.getConnectMatrixResponse().getMatrix(),
					success: res.getConnectMatrixResponse().getSuccess(),
					state: res.getConnectMatrixResponse().getState()
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
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertVideoConnectionToDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			req.setConportid(this.id);
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
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertKvmConnectionToDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			req.setConportid(this.id);
			req.setCpuportid(cpuPortId)
			
			this.client.insertKvmConnectionToDefaultState(req, (err, res) => {
				resolve(new classes.InsertKvmConnectionToDefaultStateResponse(this.client, {
					defaultStateKwmConnection: res.getInsertKvmConnectionToDefaultStateResponse().getDefaultstatekwmconnection()
				}));
			});
		});
	}

	createDiagramScreen({
		diagramId,
		slug,
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDiagramScreenRequest();
			req.setDiagramid(diagramId);
			req.setSlug(slug);
			req.setConportid(this.id);
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
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditDiagramScreenRequest();
			req.setId(id);
			req.setSlug(slug);
			req.setConportid(this.id);
			req.setMatrixid(matrixId)
			
			this.client.editDiagramScreen(req, (err, res) => {
				resolve(new classes.EditDiagramScreenResponse(this.client, {
					diagramScreen: res.getEditDiagramScreenResponse().getDiagramscreen()
				}));
			});
		});
	}
}	
	
	