
export class TagVariation {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get id() {
		return this.model.getId();
	}

	get tagId() {
		return this.model.getTagid();
	}

	get variationId() {
		return this.model.getVariationid();
	}

	get tag() {
		return this.context.fetchTagById(this.tagId);
	}

	get variation() {
		return this.context.fetchVariationId(this.variationId);
	}
}