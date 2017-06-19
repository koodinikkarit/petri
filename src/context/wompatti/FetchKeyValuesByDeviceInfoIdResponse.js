
const messages = require("./service/wompatti_service_pb");

import KeyValue from "./KeyValue";

export default class {
	constructor(context, model) {
		var deviceInfoId = model.getDeviceinfoid();
		var keyValues = [];
		if (model.getKeyvaluesList())
		keyValues = model.getKeyvaluesList().map(p => new KeyValue(context, p)); 

		Object.defineProperties(this, {
			"deviceInfo": {
				get: () => context.fetchDeviceInfoById(deviceInfoId)
			},
			"keyValues": {
				get: () => keyValues
			}
		})
	}
}
