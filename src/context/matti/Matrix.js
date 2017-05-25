
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		id,
		ip,
		port,
		slug,
		numberOfConPorts,
		numberOfCpuPorts
	}) {
		this.client = client;
		var _id = id;
		var _ip = ip;
		var _port = port;
		var _slug = slug;
		var _numberOfConPorts = numberOfConPorts;
		var _numberOfCpuPorts = numberOfCpuPorts;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"ip": {
				get: () => _ip,
				set: (ip) => {
					_ip = ip
					var req = new messages.EditMatrixRequest();
					req.setMatrixid(_id);
					req.setIp(_ip);
					this.client.editMatrix(req, (erro, res) => {

					});
				}
			},
			"port": {
				get: () => _port,
				set: (port) => {
					_port = port
					var req = new messages.EditMatrixRequest();
					req.setMatrixid(_id);
					req.setPort(_port);
					this.client.editMatrix(req, (erro, res) => {

					});
				}
			},
			"slug": {
				get: () => _slug,
				set: (slug) => {
					_slug = slug
					var req = new messages.EditMatrixRequest();
					req.setMatrixid(_id);
					req.setSlug(_slug);
					this.client.editMatrix(req, (erro, res) => {

					});
				}
			},
			"numberOfConPorts": {
				get: () => _numberOfConPorts
			},
			"numberOfCpuPorts": {
				get: () => _numberOfCpuPorts
			},
			"conPorts": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchConPortsByMatrixIdRequest();
						req.setMatrixid(_id);
						
						
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
						req.setMatrixid(_id);
						
						
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

	
	fetchConPortsByMatrixId() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchConPortsByMatrixIdRequest();
			req.setMatrixid(this.id)
			
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

	fetchCpuPortsByMatrixId() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchCpuPortsByMatrixIdRequest();
			req.setMatrixid(this.id)
			
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

	removeMatrix() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveMatrixRequest();
			req.setMatrixid(this.id)
			
			this.removeMatrix(req, (err, res) => {
				resolve();
			});
		});
	}

	createDefaultState({
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDefaultStateRequest();
			req.setSlug(slug);
			req.setMatrixid(this.id)
			
			this.client.createDefaultState(req, (err, res) => {
				resolve(new classes.DefaultState(this.client, {
					id: res.getDefaultState().getId(),
					slug: res.getDefaultState().getSlug(),
					matrixId: res.getDefaultState().getMatrixid()
				}));
			});
		});
	}

	createDiagramScreen({
		diagramId,
		slug,
		conPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDiagramScreenRequest();
			req.setDiagramid(diagramId);
			req.setSlug(slug);
			req.setConportid(conPortId);
			req.setMatrixid(this.id)
			
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
		conPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditDiagramScreenRequest();
			req.setId(id);
			req.setSlug(slug);
			req.setConportid(conPortId);
			req.setMatrixid(this.id)
			
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
	
	