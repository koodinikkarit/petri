
import * as classes from "./";

const messages = require("./matti_service_pb");
const services = require("./matti_service_grpc_pb");

export default class Matti {
	constructor(ip, port, credentials) {
		this.client = new services.MattiClient(ip + ":" + port, credentials);
	}

	fetchMatrixs({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchMatrixsRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchMatrixs(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Matrix(this.client, {
					id: data.getId(),
					ip: data.getIp(),
					port: data.getPort(),
					slug: data.getSlug(),
					numberOfConPorts: data.getNumberofconports(),
					numberOfCpuPorts: data.getNumberofcpuports()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchMatrixById({
		matrixId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchMatrixByIdRequest();
			req.setMatrixid(matrixId);
			
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

	fetchMatrixBySlug({
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchMatrixBySlugRequest();
			req.setSlug(slug);
			
			this.client.fetchMatrixBySlug(req, (err, res) => {
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
			req.setMatrixid(matrixId);
			
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
			req.setMatrixid(matrixId);
			
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
			req.setConportid(conPortId);
			
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
			req.setConportid(conPortId);
			
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

	connectMatrix({
		slug,
		ip,
		port,
		numberOfConPorts,
		numberOfCpuPorts
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.ConnectMatrixRequest();
			req.setSlug(slug);
			req.setIp(ip);
			req.setPort(port);
			req.setNumberofconports(numberOfConPorts);
			req.setNumberofcpuports(numberOfCpuPorts);
			
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

	editMatrix({
		id,
		slug,
		ip,
		port
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditMatrixRequest();
			req.setId(id);
			req.setSlug(slug);
			req.setIp(ip);
			req.setPort(port);
			
			this.client.editMatrix(req, (err, res) => {
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
			req.setMatrixid(matrixId);
			
			this.client.removeMatrix(req, (err, res) => {
				resolve();
			});
		});
	}

	editConPort({
		id,
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditConPortRequest();
			req.setId(id);
			req.setSlug(slug);
			
			this.client.editConPort(req, (err, res) => {
				resolve(new classes.ConPort(this.client, {
					id: res.getConPort().getId(),
					slug: res.getConPort().getSlug(),
					matrixId: res.getConPort().getMatrixid(),
					portNum: res.getConPort().getPortnum()
				}));
			});
		});
	}

	editCpuPort({
		id,
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditCpuPortRequest();
			req.setId(id);
			req.setSlug(slug);
			
			this.client.editCpuPort(req, (err, res) => {
				resolve(new classes.CpuPort(this.client, {
					id: res.getCpuPort().getId(),
					slug: res.getCpuPort().getSlug(),
					matrixId: res.getCpuPort().getMatrixid(),
					portNum: res.getCpuPort().getPortnum()
				}));
			});
		});
	}

	fetchDefaultStates({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDefaultStatesRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchDefaultStates(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.DefaultState(this.client, {
					id: data.getId(),
					slug: data.getSlug(),
					matrixId: data.getMatrixid()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchDefaultStateById({
		defaultStateId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDefaultStateByIdRequest();
			req.setDefaultstateid(defaultStateId);
			
			this.client.fetchDefaultStateById(req, (err, res) => {
				resolve(new classes.DefaultState(this.client, {
					id: res.getDefaultState().getId(),
					slug: res.getDefaultState().getSlug(),
					matrixId: res.getDefaultState().getMatrixid()
				}));
			});
		});
	}

	fetchDefaultStateBySlug({
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDefaultStateBySlugRequest();
			req.setSlug(slug);
			
			this.client.fetchDefaultStateBySlug(req, (err, res) => {
				resolve(new classes.DefaultState(this.client, {
					id: res.getDefaultState().getId(),
					slug: res.getDefaultState().getSlug(),
					matrixId: res.getDefaultState().getMatrixid()
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
			req.setMatrixid(matrixId);
			
			this.client.createDefaultState(req, (err, res) => {
				resolve(new classes.DefaultState(this.client, {
					id: res.getDefaultState().getId(),
					slug: res.getDefaultState().getSlug(),
					matrixId: res.getDefaultState().getMatrixid()
				}));
			});
		});
	}

	editDefaultState({
		defaultStateId,
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			req.setSlug(slug);
			
			this.client.editDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	removeDefaultState({
		defaultStateId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			
			this.client.removeDefaultState(req, (err, res) => {
				resolve();
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
			req.setCpuportid(cpuPortId);
			
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
			req.setCpuportid(cpuPortId);
			
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

	removeVideoConnectionFromDefaultState({
		defaultStateVideoConnection
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveVideoConnectionFromDefaultStateRequest();
			req.setDefaultstatevideoconnection(defaultStateVideoConnection);
			
			this.client.removeVideoConnectionFromDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	removeKvmConnectionFromDefaultState({
		defaultStateKvmConnection
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveKvmConnectionFromDefaultStateRequest();
			req.setDefaultstatekvmconnection(defaultStateKvmConnection);
			
			this.client.removeKvmConnectionFromDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	executeDefaultState({
		defaultStateId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.ExecuteDefaultStateRequest();
			req.setDefaultstateid(defaultStateId);
			
			this.client.executeDefaultState(req, (err, res) => {
				resolve();
			});
		});
	}

	fetchDiagrams({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramsRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchDiagrams(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Diagram(this.client, {
					id: data.getId(),
					slug: data.getSlug()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchDiagramById({
		diagramId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramByIdRequest();
			req.setDiagramid(diagramId);
			
			this.client.fetchDiagramById(req, (err, res) => {
				resolve(new classes.Diagram(this.client, {
					id: res.getDiagram().getId(),
					slug: res.getDiagram().getSlug()
				}));
			});
		});
	}

	fetchDiagramBySlug({
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramBySlugRequest();
			req.setSlug(slug);
			
			this.client.fetchDiagramBySlug(req, (err, res) => {
				resolve(new classes.Diagram(this.client, {
					id: res.getDiagram().getId(),
					slug: res.getDiagram().getSlug()
				}));
			});
		});
	}

	fetchDiagramScreensByDiagramId({
		diagramId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramScreensByDiagramIdRequest();
			req.setDiagramid(diagramId);
			
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

	createDiagram({
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDiagramRequest();
			req.setSlug(slug);
			
			this.client.createDiagram(req, (err, res) => {
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
			req.setSlug(slug);
			
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
			req.setDiagramid(diagramId);
			
			this.client.removeDiagram(req, (err, res) => {
				resolve();
			});
		});
	}

	fetchDiagramScreens({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramScreensRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchDiagramScreens(req);
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

	fetchDiagramScreenById({
		diagramScreenId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramScreenByIdRequest();
			req.setDiagramscreenid(diagramScreenId);
			
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

	fetchDiagramScreenBySlug({
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramScreenBySlugRequest();
			req.setSlug(slug);
			
			this.client.fetchDiagramScreenBySlug(req, (err, res) => {
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
			req.setMatrixid(matrixId);
			
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

	removeDiagramScreen({
		diagramScreenId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDiagramScreenRequest();
			req.setDiagramscreenid(diagramScreenId);
			
			this.client.removeDiagramScreen(req, (err, res) => {
				resolve();
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
			req.setMatrixid(matrixId);
			
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
		diagramScreenId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddCpuToDiagramScreenRequest();
			req.setDiagramscreenid(diagramScreenId);
			req.setCpuportid(cpuPortId);
			
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
		diagramScreenId,
		cpuPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveCpuFromDiagramScreenRequest();
			req.setDiagramscreenid(diagramScreenId);
			req.setCpuportid(cpuPortId);
			
			this.client.removeCpuFromDiagramScreen(req, (err, res) => {
				resolve();
			});
		});
	}


}



