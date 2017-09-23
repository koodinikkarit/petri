
import PageInfo from "./PageInfo";
import {
	Command
} from "./Command";

export class DeviceType {
	constructor(context, model) {
		Object.defineProperties(this, {
			"id": {
				get: () => mode.getId()
			},
			"name": {
				get: () => mode.getName()
			}
		})
	}
}

export class DeviceTypesEdge {
	constructor(context, model) {
		Object.defineProperties(this, {
			"node": {
				get: () => new DeviceType(context, model.getDevicetype())
			},
			"cursor": {
				get: () => model.getCursor()
			}
		})
	}
}

export class DeviceTypesConnection {
	constructor(context, model) {
		Object.defineProperties(this, {
			"pageInfo": {
				get: () => new PageInfo(context, model.getPageinfo())
			},
			"edges": {
				get: () => model.getEdgesList().map(p => new DeviceTypesEdge(context, p))
			},
			"totalCount": {
				get: () => model.getTotalcount()
			},
			"deviceTypes": {
				get: () => model.getEdgesList().map(p => new DeviceType(context, p.getDevicetype()))
			}
		})
	}
}

export class DeviceTypeCommands {
	constructor(context, model) {
		Object.defineProperties(this, {
			"deviceType": {
				get: () => context.fetchDeviceTypeById(model.getDevicetypeid())
			},
			"commands": {
				get: () => model.getCommandsList().map(p => new Command(context, p))
			}
		})
	}
}