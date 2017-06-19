
export default class {
	constructor(context, device) {
		var id = model.getId();
		var name = model.getName();
		var deviceInfoId = model.getDeviceinfoid();

		Object.defineProperties(this, {
			"id": {
				get: () => id
			},
			"name": {
				get: () => name
			},
			"deviceInfo": {
				get: () => context.fetchDeviceInfoById(deviceInfoId)
			}
		})
	}
}