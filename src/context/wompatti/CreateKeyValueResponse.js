
import KeyValue from "./KeyValue";

export default class {
	constructor(context, model) {
		var keyValue;
		if (model.getKeyvalue())
		keyValue = new KeyValue(context, model.getKeyvalue());

		Object.defineProperties(this, {
			"keyValue": {
				get: () => keyValue
			}
		})
	}
}