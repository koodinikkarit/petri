
import * as classes from "./";

const messages = require("./matti_service_pb");

export default class {
	constructor(client, {
		diagramScreen
	}) {
		this.client = client;
		var _diagramScreen = diagramScreen;

		Object.defineProperties(this, {
			"diagramScreen": {
				get: () => _diagramScreen
			},
			
		})
	}

	
}	
	
	