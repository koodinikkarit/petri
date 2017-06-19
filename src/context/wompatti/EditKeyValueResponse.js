import KeyValue from "./KeyValue";

export default class {
	constructor(context, model) {
		var state = model.getState();
		var keyValue;
		if (model.getKeyvalue())
		keyValue = new KeyValue(context, model.getKeyvalue());

		Object.defineProperties(this, {
			"state": {
				get: () => state
			},
			"keyValue": {
				get: () => keyValue
			}
		})
	}
}