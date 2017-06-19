
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		defaultStateKwmConnection
	}) {
		this.client = client;
		var _defaultStateKwmConnection = defaultStateKwmConnection;

		Object.defineProperties(this, {
			"defaultStateKwmConnection": {
				get: () => _defaultStateKwmConnection
			},
			
		})
	}

	
}	
	
	