
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		matrix
	}) {
		this.client = client;
		var _matrix = matrix;

		Object.defineProperties(this, {
			"matrix": {
				get: () => _matrix
			},
			
		})
	}

	
}	
	
	