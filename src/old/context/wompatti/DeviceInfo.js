
import {
	KeyValue
} from "./KeyValue";

export class DeviceInfo {
	constructor(context, deviceInfo) {
		this.context = context;
		var _id = deviceInfo.getId();

		Object.defineProperties(this, {
			id: {
				get: () => _id
			}
		})
	}

	get keyValues() {
		return this.context.fetchKeyValuesByDeviceInfoId(this.id);
	}
}

export class DeviceInfoKeyValues {
	constructor(context, model) {
		Object.defineProperties(this, {
			"deviceInfo": {
				get: () => context.fetchDeviceInfoById(model.getDeviceinfoid())
			}, 
			"keyValues": {
				get: () => model.getKeyvaluesList().map(p => new KeyValue(context, p))
			}
		})
	}
}