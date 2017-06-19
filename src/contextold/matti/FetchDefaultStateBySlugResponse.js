
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		defaultState
	}) {
		this.client = client;
		var _defaultState = defaultState;

		Object.defineProperties(this, {
			"defaultState": {
				get: () => _defaultState
			},
			
		})
	}

	
}	
	
	