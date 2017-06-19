
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		offset,
		limit
	}) {
		this.client = client;
		var _offset = offset;
		var _limit = limit;

		Object.defineProperties(this, {
			"offset": {
				get: () => _offset
			},
			"limit": {
				get: () => _limit
			},
			
		})
	}

	
}	
	
	