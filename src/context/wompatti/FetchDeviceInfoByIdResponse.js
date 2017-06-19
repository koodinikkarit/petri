const messages = require("./service/wompatti_service_pb");

import DeviceInfo from "./DeviceInfo";

export default class {
	constructor(context, model) {
		var state = model.getState();
		var deviceInfo;
		if (model.getDeviceinfo())
		deviceInfo = new DeviceInfo(context, model.getDeviceinfo());

		Object.defineProperties(this, {
			"state": {
				get: () => {
					console.log("statee", state);
					return state;
				}
			},
			"deviceInfo": {
				get: () => {
					console.log("deeviceInfo", deviceInfo);	
					return deviceInfo;
				}
			}
		});
	}
}