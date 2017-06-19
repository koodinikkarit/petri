
import Device from "./Device";

export default class {
	constructor(context, model) {
		var state;
		state = model.getState();

		var device;
		if (model.getDevice())
		device = new Device(context, model.getDevice());

		Object.defineProperties(this, {
			"state": {
				get: () => state
			},
			"device": {
				get: () => device
			}
		});
	}
}