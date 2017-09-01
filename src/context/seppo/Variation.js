
export class Variation {
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

	get text() {
		return new Promise((resolve) => {
			this.context.fetchVariationTextByVariationId(this.model.getId()).then(variationText => {
				resolve(variationText ? variationText.text : "");
			});
		});
	}

	get version() {
		return this.model.getVersion();
	}

	get languageId() {
		return this.model.getLanguageid();
	}
	
	get language() {
		return this.context.fetchLanguageById(this.languageId);
	}

	get tags() {
		return this.context.fetchVariationTags(this.id);
	}

	get songDatabases() {
		return new Promise((resolve) => {
			this.context.fetchSongDatabases({
				variationId: this.id
			}).then(songDatabasesConnection => {
				resolve(songDatabasesConnection.songDatabases);
			});
		});
	}
}

export class VariationText {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get text() {
		return this.model.getText();
	}
}

export class SearchVariationsOutput {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get variations() {
		return this.model.getVariationsList().map(p => new Variation(this.context, p));
	}

	get maxVariations() {
		return this.model.getMaxvariations();
	}
}