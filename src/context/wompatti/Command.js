

export class Command {
	constructor(context, model) {
		this.context = context;
		this.model = model;
		Object.defineProperties(this, {
			"id": {
				get: () => model.getId()
			},
			"name": {
				get: () => model.getName()
			},
			"value": {
				get: () => model.getValue()
			}
		})
	}

	get realId() {
		this.model.getId();
	}

	get deviceType() {
		return this.context.fetchDeviceTypeById(model.getDevicetypeid())
	}
}