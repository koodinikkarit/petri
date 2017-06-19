
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		keijo
	}) {
		this.client = client;
		var _keijo = keijo;

		Object.defineProperties(this, {
			"keijo": {
				get: () => _keijo
			},
			
		})
	}

	
}	
	
	