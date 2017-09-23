

export class WolInterface {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get id() {
		return this.model.getId();
	}

	get ethernetInterfaceId() {
		return this.model.getEthernetinterfaceid();
	}

	get mac() {
		return this.model.getMac();
	}
}

export class WolInterfacesConnection {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get wolInterfaces() {
		return this.model.getWolinterfacesList().map(p => (
			new WolInterface(this.context, p)
		));
	}
}