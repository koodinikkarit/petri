
import * as classes from "./";

const messages = require("./risto_service_pb");

export default class {
	constructor(client, {
		user
	}) {
		this.client = client;
		var _user = user;

		Object.defineProperties(this, {
			"user": {
				get: () => _user
			},
			
		})
	}

	
}	
	
	