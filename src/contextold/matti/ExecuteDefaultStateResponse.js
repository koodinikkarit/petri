
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		success,
		state
	}) {
		this.client = client;
		var _success = success;
		var _state = state;

		Object.defineProperties(this, {
			"success": {
				get: () => _success
			},
			"state": {
				get: () => _state
			},
			
		})
	}

	
}	
	
	