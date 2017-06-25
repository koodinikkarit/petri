
import PageInfo from "./PageInfo";

export class Computer {
	constructor(context, computer) {
		var _id = computer.getId();
		var name = computer.getName();
		var deviceInfoId = computer.getDeviceinfoid();
		var arttuId = computer.getArttuid();
		var wolInterfaceId = computer.getWolInterfaceId();

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
				get: () => context.fetchArttuById()
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
				get: () => model.getEdges().map(p => new ComputersEdge(context, p))
			},
			"totalCount": {
				get: () => model.getTotalcount()
			},
			"computers": {
				get: () => model.getEdges().map(p => new Computer(context, p.getComputer()))
			}
		})
	}
}

export class ComputersEdge {
	constructor(context, model) {
		Object.defineProperties(this, {
			"node": {
				get: () => new Computer(context, model.getComputer())
			},
			"cursor": {
				get: () => model.getCursor()
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