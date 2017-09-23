
import PageInfo from "./PageInfo";

export class TelnetInterface {
	constructor(context, model) {
		Object.defineProperties(this, {
			"id": {
				get: () => model.getId()
			},
			"ip": {
				get: () => model.getIp()
			},
			"port": {
				get: () => model.getPort()
			}
		})
	}
}

export class TelnetInterfacesEdge {
	constructor(context, model) {
		Object.defineProperties(this, {
			"node": {
				get: () => new TelnetInterface(context, model.getTelnetInterface())
			},
			"cursor": {
				get: () => model.getCursor()
			}			
		})
	}
}

export class TelnetInterfacesConnection {
	constructor(context, model) {
		Object.defineProperties(this, {
			"pageInfo": {
				get: () => new PageInfo(context, model.getPageinfo())
			},
			"edges": {
				get: () => model.getEdgesList().map(p => new TelnetInterfacesEdge(context, p))
			},
			"totalCount": {
				get: () => model.getTotalcount()
			},
			"serialInterfaces": {
				get: () => model.getEdgesList().map(p => new TelnetInterface(context, p.getSerialinterface()))
			}			
		})
	}
}