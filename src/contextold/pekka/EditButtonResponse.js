
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		button
	}) {
		this.client = client;
		var _button = button;

		Object.defineProperties(this, {
			"button": {
				get: () => _button
			},
			
		})
	}

	
}	
	
	