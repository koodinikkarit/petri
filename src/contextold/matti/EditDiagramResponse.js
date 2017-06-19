
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		diagram
	}) {
		this.client = client;
		var _diagram = diagram;

		Object.defineProperties(this, {
			"diagram": {
				get: () => _diagram
			},
			
		})
	}

	
}	
	
	