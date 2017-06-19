
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		conPort,
		success,
		state
	}) {
		this.client = client;
		var _conPort = conPort;
		var _success = success;
		var _state = state;

		Object.defineProperties(this, {
			"conPort": {
				get: () => _conPort
			},
			"success": {
				get: () => _success
			},
			"state": {
				get: () => _state
			},
			
		})
	}

	
}	
	
	