
export class User {
	constructor(
		context,
		model
	) {
		this.context = context;
		this.model = model;
	}

	get id() {
		return this.model.getId();
	}

	get userName() {
		return this.model.getUsername();
	}
}