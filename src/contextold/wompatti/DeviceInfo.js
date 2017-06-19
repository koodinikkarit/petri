
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id
	}) {
		this.client = client;
		var _id = id;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			
		})
	}

	
}	
	
	