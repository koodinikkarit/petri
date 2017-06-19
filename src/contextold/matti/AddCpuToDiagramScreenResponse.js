
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		diagramScreenCpuPort
	}) {
		this.client = client;
		var _diagramScreenCpuPort = diagramScreenCpuPort;

		Object.defineProperties(this, {
			"diagramScreenCpuPort": {
				get: () => _diagramScreenCpuPort
			},
			
		})
	}

	
}	
	
	