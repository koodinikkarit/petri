

export class SongDatabase {
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

	get variations() {
		return this.context.fetchVariationsBySongDatabaseId(this.model.getId());
	}

	get tags() {
		return new Promise((resolve, reject) => {
			return this.context.searchTags({
				songDatabaseId: this.id
			}).then(tagsConnection => {
				resolve(tagsConnection.tags);
			}).catch(err => {
				reject(err);
			});
		});
	}
}

export class SongDatabasesConnection {
	constructor(context, model) {
		var songDatabases = model.getEdgesList().map(p => new SongDatabase(this, p.getNode()));
		Object.defineProperties(this, {
			"songDatabases": {
				get: () => songDatabases
			}
		});
	}
}