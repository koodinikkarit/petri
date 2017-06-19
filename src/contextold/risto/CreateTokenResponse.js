
import * as classes from "./";

const messages = require("./risto_service_pb");

export default class {
	constructor(client, {
		token,
		state
	}) {
		this.client = client;
		var _token = token;
		var _state = state;

		Object.defineProperties(this, {
			"token": {
				get: () => _token
			},
			"state": {
				get: () => _state
			},
			
		})
	}

	
}	
	
	