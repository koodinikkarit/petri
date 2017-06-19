
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		computer,
		deviceInfo
	}) {
		this.client = client;
		var _computer = computer;
		var _deviceInfo = deviceInfo;

		Object.defineProperties(this, {
			"computer": {
				get: () => _computer
			},
			"deviceInfo": {
				get: () => _deviceInfo
			},
			
		})
	}

	
}	
	
	