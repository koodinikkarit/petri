
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		id,
		diagramScreenId,
		cpuPortId
	}) {
		this.client = client;
		var _id = id;
		var _diagramScreenId = diagramScreenId;
		var _cpuPortId = cpuPortId;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"diagramScreenId": {
				get: () => _diagramScreenId
			},
			"cpuPortId": {
				get: () => _cpuPortId
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

	fetchDiagramScreenById({
		diagramScreenId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDiagramScreenByIdRequest();
			req.setDiagramscreenid(diagramScreenId)
			
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

	removeDiagramScreen({
		diagramScreenId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDiagramScreenRequest();
			req.setDiagramscreenid(diagramScreenId)
			
			this.client.removeDiagramScreen(req, (err, res) => {
				resolve();
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
			req.setCpuportid(cpuPortId)
			
			this.client.removeCpuFromDiagramScreen(req, (err, res) => {
				resolve();
			});
		});
	}
}	
	
	