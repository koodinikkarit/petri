

export class Tag {
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
}

export class TagsConnection {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get maxTags() {
		return this.model.getMaxtags();
	}

	get tags() {
		if (!this._tags) {
			this._tags = this.model.getTagsList().map(p => (
				new Tag(this.context, p)
			));
		}
		return this._tags;
	}
}