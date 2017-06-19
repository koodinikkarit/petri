
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		device,
		deviceInfo
	}) {
		this.client = client;
		var _device = device;
		var _deviceInfo = deviceInfo;

		Object.defineProperties(this, {
			"device": {
				get: () => _device
			},
			"deviceInfo": {
				get: () => _deviceInfo
			},
			
		})
	}

	
}	
	
	