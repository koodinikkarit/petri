const messages = require("./service/wompatti_service_pb");

import Computer from "./Computer";

export default class {
	constructor(context, fetchComputerByIdResponse) {
		var state = fetchComputerByIdResponse.getState();
		var computer
		if (fetchComputerByIdResponse.getComputer())
		computer = new Computer(context, fetchComputerByIdResponse.getComputer());

		Object.defineProperties(this, {
			"state": {
				get: () => state
			},
			"computer": {
				get: () => computer
			}
		});
	}
}