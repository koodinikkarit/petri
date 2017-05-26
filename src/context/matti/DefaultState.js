
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
				resolve(new classes.Matrix(this.client, {
					id: res.getMatrix().getId(),
					ip: res.getMatrix().getIp(),
					port: res.getMatrix().getPort(),
					slug: res.getMatrix().getSlug(),
					numberOfConPorts: res.getMatrix().getNumberofconports(),
					numberOfCpuPorts: res.getMatrix().getNumberofcpuports()
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
				resolve(new classes.Matrix(this.client, {
					id: res.getMatrix().getId(),
					ip: res.getMatrix().getIp(),
					port: res.getMatrix().getPort(),
					slug: res.getMatrix().getSlug(),
					numberOfConPorts: res.getMatrix().getNumberofconports(),
					numberOfCpuPorts: res.getMatrix().getNumberofcpuports()
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
				resolve();
			});
		});
	}

	removeDefaultState() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDefaultStateRequest();
			req.setDefaultstateid(this.id)
			
			this.client.removeDefaultState(req, (err, res) => {
				resolve();
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
				resolve(new classes.DefaultStateVideoConnection(this.client, {
					id: res.getDefaultStateVideoConnection().getId(),
					conPortId: res.getDefaultStateVideoConnection().getConportid(),
					cpuPortId: res.getDefaultStateVideoConnection().getCpuportid(),
					defaultStateId: res.getDefaultStateVideoConnection().getDefaultstateid()
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
			
			this.client.removeVideoConnectionFromDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	removeKvmConnectionFromDefaultState() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveKvmConnectionFromDefaultStateRequest();
			req.setDefaultstatekvmconnection(this.id)
			
			this.client.removeKvmConnectionFromDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	executeDefaultState() {
		return new Promise((resolve, reject) => {
			var req = new messages.ExecuteDefaultStateRequest();
			req.setDefaultstateid(this.id)
			
			this.client.executeDefaultState(req, (err, res) => {
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
}	
	
	