
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id,
		computerId,
		ethernetInterface
	}) {
		this.client = client;
		var _id = id;
		var _computerId = computerId;
		var _ethernetInterface = ethernetInterface;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"computerId": {
				get: () => _computerId
			},
			"ethernetInterface": {
				get: () => _ethernetInterface
			},
			
		})
	}

	
}	
	
	