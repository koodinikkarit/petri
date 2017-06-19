
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		id,
		number,
		penttiId,
		onExecutorId,
		offExecutorId
	}) {
		this.client = client;
		var _id = id;
		var _number = number;
		var _penttiId = penttiId;
		var _onExecutorId = onExecutorId;
		var _offExecutorId = offExecutorId;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"number": {
				get: () => _number
			},
			"penttiId": {
				get: () => _penttiId
			},
			"onExecutorId": {
				get: () => _onExecutorId,
				set: (onExecutorId) => {
					_onExecutorId = onExecutorId
					var req = new messages.EditButtonRequest();
					req.setButtonid(_id);
					req.setOnexecutorid(_onExecutorId);
					this.client.editButton(req, (erro, res) => {

					});
				}
			},
			"offExecutorId": {
				get: () => _offExecutorId,
				set: (offExecutorId) => {
					_offExecutorId = offExecutorId
					var req = new messages.EditButtonRequest();
					req.setButtonid(_id);
					req.setOffexecutorid(_offExecutorId);
					this.client.editButton(req, (erro, res) => {

					});
				}
			},
			"pentti": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchPenttiByIdRequest();
						req.setPenttiid(_penttiId);
						
						
			this.client.fetchPenttiById(req, (err, res) => {
				resolve(new classes.FetchPenttiByIdResponse(this.client, {
					pentti: res.getFetchPenttiByIdResponse().getPentti()
				}));
			});
					});
				}
			}
		})
	}

	
	fetchPenttiById({
		penttiId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchPenttiByIdRequest();
			req.setPenttiid(penttiId)
			
			this.client.fetchPenttiById(req, (err, res) => {
				resolve(new classes.FetchPenttiByIdResponse(this.client, {
					pentti: res.getFetchPenttiByIdResponse().getPentti()
				}));
			});
		});
	}
}	
	
	