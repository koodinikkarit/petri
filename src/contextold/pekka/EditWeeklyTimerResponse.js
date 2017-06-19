
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		weeklyTimer
	}) {
		this.client = client;
		var _weeklyTimer = weeklyTimer;

		Object.defineProperties(this, {
			"weeklyTimer": {
				get: () => _weeklyTimer
			},
			
		})
	}

	
}	
	
	