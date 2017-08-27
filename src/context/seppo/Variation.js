

export class Variation {
	constructor(context, model) {
		Object.defineProperties(this, {
			"id": {
				get: () => model.getId()
			},
			"name": {
				get: () => model.getName()
			},
			"songId": {
				get: () => model.getSongid()
			},
			"text": {
				get: () => new Promise((resolve) => {
					context.fetchVariationTextByVariationId(model.getId()).then(variationText => {
						resolve(variationText ? variationText.text : "")
					});
				})
			},
			"version": {
				get: () => model.getVersion()
			}
		});
	}
}

export class VariationText {
	constructor(context, model) {
		Object.defineProperties(this, {
			"text": {
				get: () => model.getText()
			}
		})
	}
}

export class SearchVariationsOutput {
	constructor(context, model) {
		Object.defineProperties(this, {
			variations: {
				get: () => model.getVariationsList().map(p => new Variation(context, p))
			},
			maxVariations: {
				get: () => model.getMaxvariations()
			}
		});
	}
}