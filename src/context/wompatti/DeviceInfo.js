
const messages = require("./service/wompatti_service_pb");

export default class {
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