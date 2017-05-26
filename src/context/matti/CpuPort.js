
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
					var req = new messages.EditCpuPortRequest();
					req.setCpuportid(_id);
					req.setSlug(_slug);
					this.client.editCpuPort(req, (erro, res) => {

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

	connectMatrix({
		slug,
		ip,
		port,
		numberOfConPorts
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.ConnectMatrixRequest();
			req.setSlug(slug);
			req.setIp(ip);
			req.setPort(port);
			req.setNumberofconports(numberOfConPorts);
			req.setNumberofcpuports(this.id)
			
			this.client.connectMatrix(req, (err, res) => {
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

	createDefaultState({
		slug,
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDefaultStateRequest();
			req.setSlug(slug);
			req.setMatrixid(matrixId)
			
			this.client.createDefaultState(req, (err, res) => {
				resolve(new classes.DefaultState(this.client, {
					id: res.getDefaultState().getId(),
					slug: res.getDefaultState().getSlug(),
					matrixId: res.getDefaultState().getMatrixid()
				}));
			});
		});
	}

	insertVideoConnectionToDefaultState({
		defaultStateId,
		conPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertVideoConnectionToDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			req.setConportid(conPortId);
			req.setCpuportid(this.id)
			
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
		defaultStateId,
		conPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertKvmConnectionToDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			req.setConportid(conPortId);
			req.setCpuportid(this.id)
			
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
		diagramScreenId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddCpuToDiagramScreenRequest();
			req.setDiagramscreenid(diagramScreenId);
			req.setCpuportid(this.id)
			
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
		diagramScreenId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveCpuFromDiagramScreenRequest();
			req.setDiagramscreenid(diagramScreenId);
			req.setCpuportid(this.id)
			
			this.client.removeCpuFromDiagramScreen(req, (err, res) => {
				resolve();
			});
		});
	}
}	
	
	