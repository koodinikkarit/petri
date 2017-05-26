
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id,
		name,
		ip,
		port
	}) {
		this.client = client;
		var _id = id;
		var _name = name;
		var _ip = ip;
		var _port = port;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"name": {
				get: () => _name,
				set: (name) => {
					_name = name
					var req = new messages.EditKeijoRequest();
					req.setKeijoid(_id);
					req.setName(_name);
					this.client.editKeijo(req, (erro, res) => {

					});
				}
			},
			"ip": {
				get: () => _ip,
				set: (ip) => {
					_ip = ip
					var req = new messages.EditKeijoRequest();
					req.setKeijoid(_id);
					req.setIp(_ip);
					this.client.editKeijo(req, (erro, res) => {

					});
				}
			},
			"port": {
				get: () => _port,
				set: (port) => {
					_port = port
					var req = new messages.EditKeijoRequest();
					req.setKeijoid(_id);
					req.setPort(_port);
					this.client.editKeijo(req, (erro, res) => {

					});
				}
			},
			
		})
	}

	
}	
	
	