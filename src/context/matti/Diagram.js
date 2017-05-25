
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		id,
		slug
	}) {
		this.client = client;
		var _id = id;
		var _slug = slug;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"slug": {
				get: () => _slug,
				set: (slug) => {
					_slug = slug
					var req = new messages.EditDiagramRequest();
					req.setDiagramid(_id);
					req.setSlug(_slug);
					this.client.editDiagram(req, (erro, res) => {

					});
				}
			},
			"diagramScreens": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchDiagramScreensByDiagramIdRequest();
						req.setDiagramid(_id);
						
						
			var call = this.client.fetchDiagramScreensByDiagramId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.DiagramScreen(this.client, {
					id: data.getId(),
					slug: data.getSlug(),
					diagramId: data.getDiagramid(),
					matrixId: data.getMatrixid(),
					conPortId: data.getConportid()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
					});
				}
			},
			"diagramScreen": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchDiagramScreenByIdRequest();
						req.setDiagramscreenid(_diagramScreenId);
						
						
			this.client.fetchDiagramScreenById(req, (err, res) => {
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
		})
	}

	
	fetchDiagramScreensByDiagramId() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramScreensByDiagramIdRequest();
			req.setDiagramid(this.id)
			
			var call = this.client.fetchDiagramScreensByDiagramId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.DiagramScreen(this.client, {
					id: data.getId(),
					slug: data.getSlug(),
					diagramId: data.getDiagramid(),
					matrixId: data.getMatrixid(),
					conPortId: data.getConportid()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	removeDiagram() {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDiagramRequest();
			req.setDiagramid(this.id)
			
			this.removeDiagram(req, (err, res) => {
				resolve();
			});
		});
	}

	fetchDiagramScreenById() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramScreenByIdRequest();
			req.setDiagramscreenid(this.id)
			
			this.client.fetchDiagramScreenById(req, (err, res) => {
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

	createDiagramScreen({
		slug,
		conPortId,
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDiagramScreenRequest();
			req.setDiagramid(this.id);
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
	
	