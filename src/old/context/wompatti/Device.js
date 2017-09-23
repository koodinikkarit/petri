
import PageInfo from "./PageInfo";
import DeviceInfo from "./DeviceInfo";

export class Device {
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

export class DevicesConnection {
	constructor(context, model) {
		Object.defineProperties(this, {
			"pageInfo": {
				get: () => new PageInfo(context, model.getPageinfo())
			},
			"edges": {
				get: () => model.getEdgesList().map(p => new DevicesEdge(context, p))
			},
			"totalCount": {
				get: () => model.getTotalcount()
			},
			"devices": {
				get: () => model.getEdgesList().map(p => new Device(context, p.getDevice()))
			}
		})
	}
}

export class DevicesEdge {
	constructor(context, model) {
		Object.defineProperties(this, {
			"node": {
				get: () => new Device(context, model.getNode())
			},
			"cursor": {
				get: () => model.getCursor()
			}
		})
	}
}

export class CreateDeviceOutput {
	constructor(context, model) {
		Object.defineProperties(this, {
			"device": {
				get: () => new Device(context, model.getDevice())
			},
			"deviceInfo": {
				get: () => new DeviceInfo(context, model.getDeviceinfo())
			}
		})
	}
}