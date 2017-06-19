
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		id,
		ip
	}) {
		this.client = client;
		var _id = id;
		var _ip = ip;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"ip": {
				get: () => _ip
			},
			"buttons": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchButtonsByPenttiIdRequest();
						req.setPenttiid(_id);
						
						
			var call = this.client.fetchButtonsByPenttiId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Button(this.client, {
					id: data.getId(),
					number: data.getNumber(),
					penttiId: data.getPenttiid(),
					onExecutorId: data.getOnexecutorid(),
					offExecutorId: data.getOffexecutorid()
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

	
	fetchButtonsByPenttiId() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchButtonsByPenttiIdRequest();
			req.setPenttiid(this.id)
			
			var call = this.client.fetchButtonsByPenttiId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Button(this.client, {
					id: data.getId(),
					number: data.getNumber(),
					penttiId: data.getPenttiid(),
					onExecutorId: data.getOnexecutorid(),
					offExecutorId: data.getOffexecutorid()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}
}	
	
	