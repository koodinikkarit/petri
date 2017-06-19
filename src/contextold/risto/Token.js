
import * as classes from "./";

const messages = require("./risto_service_pb");

export default class {
	constructor(client, {
		token
	}) {
		this.client = client;
		var _token = token;

		Object.defineProperties(this, {
			"token": {
				get: () => _token
			},
			
		})
	}

	
}	
	
	