
import WolInterface from "./WolInterface";

export default class {
	constructor(context, model) {
		var state;
		state = model.getState();
		var wolInterface;
		if (model.getWolinterface())
		wolInterface = new WolInterface(model.getWolinterface());

		Object.defineProperties(this, {
			"state": {
				get: () => state
			},
			"wolInterface": {
				get: () => wolInterface
			}
		})
	}
}