
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		conPort
	}) {
		this.client = client;
		var _conPort = conPort;

		Object.defineProperties(this, {
			"conPort": {
				get: () => _conPort
			},
			
		})
	}

	
}	
	
	