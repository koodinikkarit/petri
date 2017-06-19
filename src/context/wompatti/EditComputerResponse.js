
import Computer from "./Computer";

export default class {
	constructor(context, model) {
		var state = model.getState();
		var computer;
		if (model.getComputer())
		computer = new Computer(context, model.getComputer());

		Object.assign(this, {
			state: {
				get: () => state
			},
			computer: {
				get: () => computer
			}
		})
	}
}