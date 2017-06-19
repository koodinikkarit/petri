
export default class {
	constructor(context, model) {
		var state = model.getState();

		Object.defineProperties(this, {
			"state": {
				get: () => state
			}
		});
	}
}