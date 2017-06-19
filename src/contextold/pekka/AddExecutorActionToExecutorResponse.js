
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		executorAction
	}) {
		this.client = client;
		var _executorAction = executorAction;

		Object.defineProperties(this, {
			"executorAction": {
				get: () => _executorAction
			},
			
		})
	}

	
}	
	
	