
export default class {
	constructor(context, model) {
		var id = model.getId();
		var name = model.getName();
		var mac = model.getMac();
		var index = model.getIndex();
		var mtu = model.getMtu();
		var flags = model.getFlags();

		Object.defineProperties(this, {
			"id": {
				get: () => id
			},
			"name": {
				get: () => name
			},
			"mac": {
				get: () => mac
			},
			"index": {
				get: () => index
			},
			"mtu": {
				get: () => mtu
			},
			"flags": {
				get: () => flags
			}
		})
	}
}