
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		wolDevice
	}) {
		this.client = client;
		var _wolDevice = wolDevice;

		Object.defineProperties(this, {
			"wolDevice": {
				get: () => _wolDevice
			},
			
		})
	}

	
}	
	
	