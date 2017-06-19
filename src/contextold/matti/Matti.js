
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
				resolve(new classes.FetchMatrixByIdResponse(this.client, {
					matrix: res.getFetchMatrixByIdResponse().getMatrix()
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
				resolve(new classes.FetchMatrixBySlugResponse(this.client, {
					matrix: res.getFetchMatrixBySlugResponse().getMatrix()
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
			req.setConportid(conPortId);
			
			this.client.fetchCpuPortById(req, (err, res) => {
				resolve(new classes.FetchConPortByIdResponse(this.client, {
					conPort: res.getFetchConPortByIdResponse().getConport()
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
				resolve(new classes.ConnectMatrixResponse(this.client, {
					matrix: res.getConnectMatrixResponse().getMatrix(),
					success: res.getConnectMatrixResponse().getSuccess(),
					state: res.getConnectMatrixResponse().getState()
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
				resolve(new classes.EditMatrixResponse(this.client, {
					matrix: res.getEditMatrixResponse().getMatrix()
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
				resolve(new classes.RemoveMatrixResponse(this.client, {
					success: res.getRemoveMatrixResponse().getSuccess(),
					state: res.getRemoveMatrixResponse().getState()
				}));
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
				resolve(new classes.EditConPortResponse(this.client, {
					conPort: res.getEditConPortResponse().getConport(),
					success: res.getEditConPortResponse().getSuccess(),
					state: res.getEditConPortResponse().getState()
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
				resolve(new classes.EditCpuPortResponse(this.client, {
					cpuPort: res.getEditCpuPortResponse().getCpuport(),
					success: res.getEditCpuPortResponse().getSuccess(),
					state: res.getEditCpuPortResponse().getState()
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
				resolve(new classes.FetchDefaultStateByIdResponse(this.client, {
					defaultState: res.getFetchDefaultStateByIdResponse().getDefaultstate()
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
				resolve(new classes.FetchDefaultStateBySlugResponse(this.client, {
					defaultState: res.getFetchDefaultStateBySlugResponse().getDefaultstate()
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
				resolve(new classes.CreateDefaultStateResponse(this.client, {
					defaultState: res.getCreateDefaultStateResponse().getDefaultstate()
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
				resolve(new classes.EditDefaultStateResponse(this.client, {
					
				}));
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
				resolve(new classes.RemoveDefaultStateResponse(this.client, {
					success: res.getRemoveDefaultStateResponse().getSuccess(),
					state: res.getRemoveDefaultStateResponse().getState()
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
			req.setCpuportid(cpuPortId);
			
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
			req.setCpuportid(cpuPortId);
			
			this.client.insertKvmConnectionToDefaultState(req, (err, res) => {
				resolve(new classes.InsertKvmConnectionToDefaultStateResponse(this.client, {
					defaultStateKwmConnection: res.getInsertKvmConnectionToDefaultStateResponse().getDefaultstatekwmconnection()
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
				resolve(new classes.RemoveVideoConnectionFromDefaultStateResponse(this.client, {
					success: res.getRemoveVideoConnectionFromDefaultStateResponse().getSuccess(),
					state: res.getRemoveVideoConnectionFromDefaultStateResponse().getState()
				}));
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
				resolve(new classes.RemoveKvmConnectionFromDefaultStateResponse(this.client, {
					success: res.getRemoveKvmConnectionFromDefaultStateResponse().getSuccess(),
					state: res.getRemoveKvmConnectionFromDefaultStateResponse().getState()
				}));
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
				resolve(new classes.ExecuteDefaultStateResponse(this.client, {
					success: res.getExecuteDefaultStateResponse().getSuccess(),
					state: res.getExecuteDefaultStateResponse().getState()
				}));
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
				resolve(new classes.FetchDiagramByIdResponse(this.client, {
					diagram: res.getFetchDiagramByIdResponse().getDiagram()
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
				resolve(new classes.FetchDiagramBySlugResponse(this.client, {
					diagram: res.getFetchDiagramBySlugResponse().getDiagram()
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
				resolve(new classes.CreateDiagramResponse(this.client, {
					diagram: res.getCreateDiagramResponse().getDiagram()
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
			req.setDiagramid(diagramId);
			
			this.client.removeDiagram(req, (err, res) => {
				resolve(new classes.RemoveDiagramResponse(this.client, {
					success: res.getRemoveDiagramResponse().getSuccess(),
					state: res.getRemoveDiagramResponse().getState()
				}));
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
				resolve(new classes.FetchDiagramScreenByIdResponse(this.client, {
					diagramScreen: res.getFetchDiagramScreenByIdResponse().getDiagramscreen()
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
				resolve(new classes.FetchDiagramScreenBySlugResponse(this.client, {
					diagramScreen: res.getFetchDiagramScreenBySlugResponse().getDiagramscreen()
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
				resolve(new classes.CreateDiagramScreenResponse(this.client, {
					diagramScreen: res.getCreateDiagramScreenResponse().getDiagramscreen()
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
				resolve(new classes.RemoveDiagramScreenResponse(this.client, {
					success: res.getRemoveDiagramScreenResponse().getSuccess(),
					state: res.getRemoveDiagramScreenResponse().getState()
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
			req.setMatrixid(matrixId);
			
			this.client.editDiagramScreen(req, (err, res) => {
				resolve(new classes.EditDiagramScreenResponse(this.client, {
					diagramScreen: res.getEditDiagramScreenResponse().getDiagramscreen()
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
				resolve(new classes.AddCpuToDiagramScreenResponse(this.client, {
					diagramScreenCpuPort: res.getAddCpuToDiagramScreenResponse().getDiagramscreencpuport()
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
				resolve(new classes.RemoveCpuFromDiagramScreenResponse(this.client, {
					success: res.getRemoveCpuFromDiagramScreenResponse().getSuccess(),
					state: res.getRemoveCpuFromDiagramScreenResponse().getState()
				}));
			});
		});
	}


}



