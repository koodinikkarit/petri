
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		cpuPort,
		success,
		state
	}) {
		this.client = client;
		var _cpuPort = cpuPort;
		var _success = success;
		var _state = state;

		Object.defineProperties(this, {
			"cpuPort": {
				get: () => _cpuPort
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
	
	