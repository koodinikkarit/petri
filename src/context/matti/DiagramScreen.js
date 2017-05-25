
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
			"diagram": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchDiagramByIdRequest();
						req.setDiagramid(_diagramId);
						
						
			this.client.fetchDiagramById(req, (err, res) => {
				resolve(new classes.Diagram(this.client, {
					id: res.getDiagram().getId(),
					slug: res.getDiagram().getSlug()
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

	removeMatrix({
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveMatrixRequest();
			req.setMatrixid(matrixId)
			
			this.removeMatrix(req, (err, res) => {
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
		conPortId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.InsertVideoConnectionToDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
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

	fetchDiagramById({
		diagramId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramByIdRequest();
			req.setDiagramid(diagramId)
			
			this.client.fetchDiagramById(req, (err, res) => {
				resolve(new classes.Diagram(this.client, {
					id: res.getDiagram().getId(),
					slug: res.getDiagram().getSlug()
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
				resolve(new classes.Diagram(this.client, {
					id: res.getDiagram().getId(),
					slug: res.getDiagram().getSlug()
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
			
			this.removeDiagram(req, (err, res) => {
				resolve();
			});
		});
	}

	removeDiagramScreen() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDiagramScreenRequest();
			req.setDiagramscreenid(this.id)
			
			this.removeDiagramScreen(req, (err, res) => {
				resolve();
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
				resolve(new classes.DiagramScreenCpuPort(this.client, {
					id: res.getDiagramScreenCpuPort().getId(),
					diagramScreenId: res.getDiagramScreenCpuPort().getDiagramscreenid(),
					cpuPortId: res.getDiagramScreenCpuPort().getCpuportid()
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
			
			this.removeCpuFromDiagramScreen(req, (err, res) => {
				resolve();
			});
		});
	}
}	
	
	