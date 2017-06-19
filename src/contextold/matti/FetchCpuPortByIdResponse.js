
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		cpuPort
	}) {
		this.client = client;
		var _cpuPort = cpuPort;

		Object.defineProperties(this, {
			"cpuPort": {
				get: () => _cpuPort
			},
			
		})
	}

	
}	
	
	