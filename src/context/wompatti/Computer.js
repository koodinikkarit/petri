
export class Computer {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get id() {
		return this.model.getId();
	}

	get name() {
		return this.model.getName();
	}

	get wolInterface() {
		return this.context.fetchWolInterfaceById(this.model.getWolinterfaceid());
	}
}

export class ComputersConnection {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get computers() {
		return this.model.getComputersList().map(p => new Computer(this.context, p));
	}
}

export class CreateComputerOutput {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get computer(){
		new Computer(this.context, this.model.getComputer());
	}
}