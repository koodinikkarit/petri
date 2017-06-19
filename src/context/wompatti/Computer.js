
export default class {
	constructor(context, computer) {
		var _id = computer.getId();
		var arttuId = computer.getArttuid();
		var deviceInfoId = computer.getDeviceinfoid();
		var name = computer.getName();

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"name": {
				get: () => name
			},
			"deviceInfo": {
				get: () => {
					return context.fetchDeviceInfoById(deviceInfoId);
				}
			}
		})
	}	
}