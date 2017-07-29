
import PageInfo from "./PageInfo";
import DeviceInfo from "./DeviceInfo";

export class Computer {
	constructor(context, computer) {
		var _id = computer.getId();
		var name = computer.getName();
		var deviceInfoId = computer.getDeviceinfoid();
		var arttuId = computer.getArttuid();
		var wolInterfaceId = computer.getWolinterfaceid();

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"name": {
				get: () => name
			},
			"deviceInfo": {
				get: () => context.fetchDeviceInfoById(deviceInfoId)
			},
			"arttu": {
				get: () => context.fetchArttuById(arttuId)
			},
			"wolInterface": {
				get: () => context.fetchWolInterfaceById(wolInterfaceId)
			}
		})
	}	
}

export class ComputersConnection {
	constructor(context, model) {
		Object.defineProperties(this, {
			"pageInfo": {
				get: () => new PageInfo(context, model.getPageinfo())
			},
			"edges": {
				get: () => model.getEdgesList().map(p => new ComputersEdge(context, p))
			},
			"totalCount": {
				get: () => model.getTotalcount()
			},
			"computers": {
				get: () => model.getEdgesList().map(p => new Computer(context, p.getNode()))
			}
		})
	}
}

export class ComputersEdge {
	constructor(context, model) {
		Object.defineProperties(this, {
			"node": {
				get: () => new Computer(context, model.getNode())
			},
			"cursor": {
				get: () => model.getCursor()
			}
		})
	}
}

export class CreateComputerOutput {
	constructor(context, model) {
		Object.defineProperties(this, {
			"computer": {
				get: () => new Computer(context, model.getComputer())
			},
			"deviceInfo": {
				get: () => new DeviceInfo(context, model.getDeviceinfo())
			}
		})
	}
}

// node: Film
// cursor: String!

// pageInfo: PageInfo!
// edges: [FilmsEdge]
// totalCount: Int
// films: [Film]