
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
				resolve(new classes.FetchDiagramScreenByIdResponse(this.client, {
					diagramScreen: res.getFetchDiagramScreenByIdResponse().getDiagramscreen()
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
			
			this.client.removeDiagram(req, (err, res) => {
				resolve(new classes.RemoveDiagramResponse(this.client, {
					success: res.getRemoveDiagramResponse().getSuccess(),
					state: res.getRemoveDiagramResponse().getState()
				}));
			});
		});
	}

	fetchDiagramScreenById() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramScreenByIdRequest();
			req.setDiagramscreenid(this.id)
			
			this.client.fetchDiagramScreenById(req, (err, res) => {
				resolve(new classes.FetchDiagramScreenByIdResponse(this.client, {
					diagramScreen: res.getFetchDiagramScreenByIdResponse().getDiagramscreen()
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
				resolve(new classes.CreateDiagramScreenResponse(this.client, {
					diagramScreen: res.getCreateDiagramScreenResponse().getDiagramscreen()
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
	
	