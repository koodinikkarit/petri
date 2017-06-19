
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
				resolve(new classes.FetchDiagramScreenByIdResponse(this.client, {
					diagramScreen: res.getFetchDiagramScreenByIdResponse().getDiagramscreen()
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
			req.setCpuportid(cpuPortId)
			
			this.client.insertKvmConnectionToDefaultState(req, (err, res) => {
				resolve(new classes.InsertKvmConnectionToDefaultStateResponse(this.client, {
					defaultStateKwmConnection: res.getInsertKvmConnectionToDefaultStateResponse().getDefaultstatekwmconnection()
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
				resolve(new classes.FetchDiagramScreenByIdResponse(this.client, {
					diagramScreen: res.getFetchDiagramScreenByIdResponse().getDiagramscreen()
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
				resolve(new classes.RemoveDiagramScreenResponse(this.client, {
					success: res.getRemoveDiagramScreenResponse().getSuccess(),
					state: res.getRemoveDiagramScreenResponse().getState()
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
	
	