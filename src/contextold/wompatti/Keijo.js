
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
				get: () => _name
			},
			"ip": {
				get: () => _ip
			},
			"port": {
				get: () => _port
			},
			
		})
	}

	
}	
	
	