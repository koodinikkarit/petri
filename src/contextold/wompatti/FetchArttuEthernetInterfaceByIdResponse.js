
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		ethernetInterface
	}) {
		this.client = client;
		var _ethernetInterface = ethernetInterface;

		Object.defineProperties(this, {
			"ethernetInterface": {
				get: () => _ethernetInterface
			},
			
		})
	}

	
}	
	
	