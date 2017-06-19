
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		computer
	}) {
		this.client = client;
		var _computer = computer;

		Object.defineProperties(this, {
			"computer": {
				get: () => _computer
			},
			
		})
	}

	
}	
	
	