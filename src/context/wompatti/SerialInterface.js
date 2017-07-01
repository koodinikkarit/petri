
import PageInfo from "./PageInfo";
import SerialPort from "./SerialPort";

export class SerialInterface {
	constructor(context, model) {
		Object.defineProperties(this, {
			"id": {
				get: () => mode.getId()
			},
			"serialPort": {
				get: () => new SerialPort(context, model.getSerialport())
			}
		})
	}
}

export class SerialInterfacesEdge {
	constructor(context, model) {
		Object.defineProperties(this, {
			"node": {
				get: () => new SerialInterface(context, model.getSerialinterface())
			},
			"cursor": {
				get: () => model.getCursor()
			}
		})
	}
}

export class SerialInterfacesConnections {
	constructor(context, model) {
		Object.defineProperties(this, {
			"pageInfo": {
				get: () => new PageInfo(context, model.getPageinfo())
			},
			"edges": {
				get: () => model.getEdgesList().map(p => new SerialInterfacesEdge(context, p))
			},
			"totalCount": {
				get: () => model.getTotalcount()
			},
			"serialInterfaces": {
				get: () => model.getEdgesList().map(p => new SerialInterface(context, p.getSerialinterface()))
			}
		})
	}
}