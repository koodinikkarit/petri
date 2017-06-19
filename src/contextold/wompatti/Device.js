
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id,
		deviceInfoId
	}) {
		this.client = client;
		var _id = id;
		var _deviceInfoId = deviceInfoId;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"deviceInfoId": {
				get: () => _deviceInfoId
			},
			
		})
	}

	
}	
	
	