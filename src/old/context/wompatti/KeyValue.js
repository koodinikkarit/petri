export class KeyValue {
	constructor(context, keyValue) {
		var _id = keyValue.getId();
		var _key = keyValue.getKey();
		var _value = keyValue.getValue();
		var deviceInfoId = keyValue.getDeviceinfoid();

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"key": {
				get: () => _key
			},
			"value": {
				get: () => _value
			},
			"deviceInfo": {
				get: () => context.fetchDeviceInfoById(deviceInfoId)
			}
		})
	}
}