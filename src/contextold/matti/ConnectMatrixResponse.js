
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		matrix,
		success,
		state
	}) {
		this.client = client;
		var _matrix = matrix;
		var _success = success;
		var _state = state;

		Object.defineProperties(this, {
			"matrix": {
				get: () => _matrix
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
	
	