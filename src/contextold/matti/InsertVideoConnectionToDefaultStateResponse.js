
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		defaultStateVideoConnection
	}) {
		this.client = client;
		var _defaultStateVideoConnection = defaultStateVideoConnection;

		Object.defineProperties(this, {
			"defaultStateVideoConnection": {
				get: () => _defaultStateVideoConnection
			},
			
		})
	}

	
}	
	
	