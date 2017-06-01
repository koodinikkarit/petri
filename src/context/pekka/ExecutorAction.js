
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		id,
		name,
		executorId,
		actionType,
		parameters
	}) {
		this.client = client;
		var _id = id;
		var _name = name;
		var _executorId = executorId;
		var _actionType = actionType;
		var _parameters = parameters;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"name": {
				get: () => _name
			},
			"executorId": {
				get: () => _executorId
			},
			"actionType": {
				get: () => _actionType
			},
			"parameters": {
				get: () => _parameters
			},
			"executor": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchExecutorByIdRequest();
						req.setExecutorid(_executorId);
						
						
			this.client.fetchExecutorById(req, (err, res) => {
				resolve(new classes.Executor(this.client, {
					id: res.getExecutor().getId(),
					name: res.getExecutor().getName()
				}));
			});
					});
				}
			}
		})
	}

	
	fetchExecutorById({
		executorId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchExecutorByIdRequest();
			req.setExecutorid(executorId)
			
			this.client.fetchExecutorById(req, (err, res) => {
				resolve(new classes.Executor(this.client, {
					id: res.getExecutor().getId(),
					name: res.getExecutor().getName()
				}));
			});
		});
	}
}	
	
	