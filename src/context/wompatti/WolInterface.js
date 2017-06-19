
export default class {
	constructor(context, model) {
		var id = model.getId();
		var ethernetInterfaceId = model.getEthernetinterfaceid();
		var mac = model.getMac();

		Object.defineProperties(this, {
			"id": {
				get: () => id
			},
			"mac": {
				get: () => mac
			}
		})
	}
}