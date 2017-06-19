
export default class {
	constructor(context, model) {
		var device;
		if (model.getDevice())
		device = model.getDevice();

		Object.defineProperties(this, {
			"device": {
				get: () => device
			}
		})
	}
}