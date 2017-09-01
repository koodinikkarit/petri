
export class SongDatabaseTag {
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

	get songDatabaseId() {
		return this.model.getSongdatabaseid();
	}

	get tag() {
		return this.context.fetchTagById(this.tagId);
	}

	get songDatabase() {
		return this.context.fetchSongDatabaseId(this.songDatabaseId);
	}
}