

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
				get: () => model.getText()
			},
			"version": {
				get: () => model.getVersion()
			}
		});
	}
}

export class SearchVariationsOutput {
	constructor(context, model) {
		console.log("list", model.getVariationsList());
		Object.defineProperties(this, {
			variations: {
				get: () => model.getVariationsList().map(p => new Variation(context, p))
			}
		});
	}
}