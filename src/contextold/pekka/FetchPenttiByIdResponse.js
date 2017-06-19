
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		pentti
	}) {
		this.client = client;
		var _pentti = pentti;

		Object.defineProperties(this, {
			"pentti": {
				get: () => _pentti
			},
			
		})
	}

	
}	
	
	