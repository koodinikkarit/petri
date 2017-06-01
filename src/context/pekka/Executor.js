
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		id,
		name
	}) {
		this.client = client;
		var _id = id;
		var _name = name;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"name": {
				get: () => _name
			},
			"executorActions": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchExecutorActionsByExecutorIdRequest();
						req.setExecutorid(_id);
						
						
			var call = this.client.fetchExecutorActionsByExecutorId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.ExecutorAction(this.client, {
					id: data.getId(),
					name: data.getName(),
					executorId: data.getExecutorid(),
					actionType: data.getActiontype(),
					parameters: data.getParameters()
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

	
	fetchExecutorActionsByExecutorId() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchExecutorActionsByExecutorIdRequest();
			req.setExecutorid(this.id)
			
			var call = this.client.fetchExecutorActionsByExecutorId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.ExecutorAction(this.client, {
					id: data.getId(),
					name: data.getName(),
					executorId: data.getExecutorid(),
					actionType: data.getActiontype(),
					parameters: data.getParameters()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	addExecutorActionToExecutor({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddExecutorActionToExecutorRequest();
			req.setName(name);
			req.setExecutorid(this.id)
			
			this.client.addExecutorActionToExecutor(req, (err, res) => {
				resolve(new classes.ExecutorAction(this.client, {
					id: res.getExecutorAction().getId(),
					name: res.getExecutorAction().getName(),
					executorId: res.getExecutorAction().getExecutorid(),
					actionType: res.getExecutorAction().getActiontype(),
					parameters: res.getExecutorAction().getParameters()
				}));
			});
		});
	}

	editButton({
		buttonId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditButtonRequest();
			req.setButtonid(buttonId);
			req.setOnexecutorid(this.id);
			req.setOffexecutorid(this.id)
			
			this.client.editButton(req, (err, res) => {
				resolve(new classes.Button(this.client, {
					id: res.getButton().getId(),
					number: res.getButton().getNumber(),
					penttiId: res.getButton().getPenttiid(),
					onExecutorId: res.getButton().getOnexecutorid(),
					offExecutorId: res.getButton().getOffexecutorid()
				}));
			});
		});
	}
}	
	
	