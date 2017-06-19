
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id,
		deviceInfoId,
		key,
		value
	}) {
		this.client = client;
		var _id = id;
		var _deviceInfoId = deviceInfoId;
		var _key = key;
		var _value = value;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"deviceInfoId": {
				get: () => _deviceInfoId
			},
			"key": {
				get: () => _key
			},
			"value": {
				get: () => _value
			},
			
		})
	}

	
}	
	
	