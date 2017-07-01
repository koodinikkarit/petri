

export class Command {
	constructor(context, model) {
		Object.defineProperties(this, {
			"id": {
				get: () => model.getId()
			},
			"deviceInfo": {
				get: () => context.fetchDeviceInfoById(model.getDeviceinfoid())
			},
			"name": {
				get: () => model.getName()
			},
			"value": {
				get: () => model.getValue()
			}
		})
	}
}