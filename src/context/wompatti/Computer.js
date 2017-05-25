
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id,
		name,
		mac
	}) {
		this.client = client;
		var _id = id;
		var _name = name;
		var _mac = mac;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"name": {
				get: () => _name,
				set: (name) => {
					_name = name
					var req = new messages.EditComputerRequest();
					req.setComputerid(_id);
					req.setName(_name);
					this.client.editComputer(req, (erro, res) => {

					});
				}
			},
			"mac": {
				get: () => _mac,
				set: (mac) => {
					_mac = mac
					var req = new messages.EditComputerRequest();
					req.setComputerid(_id);
					req.setMac(_mac);
					this.client.editComputer(req, (erro, res) => {

					});
				}
			},
			
		})
	}

	
}	
	
	