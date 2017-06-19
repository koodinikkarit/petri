
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		executor
	}) {
		this.client = client;
		var _executor = executor;

		Object.defineProperties(this, {
			"executor": {
				get: () => _executor
			},
			
		})
	}

	
}	
	
	