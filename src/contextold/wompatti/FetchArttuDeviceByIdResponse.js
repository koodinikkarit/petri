
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		arttu
	}) {
		this.client = client;
		var _arttu = arttu;

		Object.defineProperties(this, {
			"arttu": {
				get: () => _arttu
			},
			
		})
	}

	
}	
	
	