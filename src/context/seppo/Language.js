
export class Language {
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

export class LanguagesConnection {
	constructor(context, model) {
		this.context = context;
		this.model = model;
	}

	get maxLanguages() {
		return this.model.getMaxlanguages();
	}

	get languages() {
		if (!this._languages) {
			this._languages = this.model.getLanguagesList().map(p => (
				new Language(this.context, p)
			));
		}
		return this._languages;
	}
}