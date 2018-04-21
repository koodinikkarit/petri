import * as DataLoader from "dataloader";
import {
	Seppo as SeppoClient,
	Variation,
	VariationVersion,
	Author,
	SongDatabase,
	Tag,
	Language
} from "seppo-client-js";
import { ISeppo } from "./ISeppo";

export class Seppo extends SeppoClient implements ISeppo {
	private variationLoader: DataLoader<number, Variation>;
	private authorLoader: DataLoader<number, Author>;
	private newestVariationVersionLoader: DataLoader<number, VariationVersion>;
	private songDatabaseLoader: DataLoader<number, SongDatabase>;
	private tagLoader: DataLoader<number, Tag>;
	private languageLoader: DataLoader<number, Language>;

	constructor(args: { ip: string; port: number }) {
		super(args);
	}

	fetchVariation(variationId: number) {
		if (variationId) {
			if (!this.variationLoader) {
				this.variationLoader = new DataLoader(async keys => {
					const res = await this.fetchVariationById({
						variationIds: keys
					});

					return keys.map(p => res.variations.find(e => e.id === p));
				});
			}

			return this.variationLoader.load(variationId);
		}
	}

	fetchNewestVariationVersion(variationId: number) {
		if (variationId > 0) {
			if (!this.newestVariationVersionLoader) {
				this.newestVariationVersionLoader = new DataLoader(
					async keys => {
						const res = await this.fetchNewestVariationVersionByVariationId(
							{
								variationIds: keys
							}
						);

						return keys.map(p =>
							res.variationVersions.find(e => e.variationId === p)
						);
					}
				);
			}

			return this.newestVariationVersionLoader.load(variationId);
		}
	}

	fetchAuthor(authorId: number) {
		if (authorId > 0) {
			if (!this.authorLoader) {
				this.authorLoader = new DataLoader(async keys => {
					const res = await this.fetchAuthorById({
						authorIds: keys
					});

					console.log("keys", keys);

					return keys.map(p => res.authors.find(e => e.id === p));
				});
			}
			return this.authorLoader.load(authorId);
		}
	}

	async fetchSongDatabase(songDatabaseId: number) {
		if (songDatabaseId) {
			if (!this.songDatabaseLoader) {
				this.songDatabaseLoader = new DataLoader(async keys => {
					const res = await this.fetchSongDatabaseById({
						songDatabaseIds: keys
					});

					return keys.map(p =>
						res.songDatabases.find(e => e.id === p)
					);
				});
			}
			return this.songDatabaseLoader.load(songDatabaseId);
		}
	}

	async fetchTag(tagId: number) {
		if (tagId) {
			if (!this.tagLoader) {
				this.tagLoader = new DataLoader(async keys => {
					const res = await this.fetchTagById({
						tagIds: keys
					});

					return keys.map(p => res.tags.find(e => e.id === p));
				});
			}
			return this.tagLoader.load(tagId);
		}
	}

	async fetchLanguage(languageId: number) {
		if (languageId) {
			if (!this.languageLoader) {
				console.log("lanaugelodaer", languageId);
				this.languageLoader = new DataLoader(async keys => {
					console.log("keys", keys);
					const res = await this.fetchLanguageById({
						languageIds: keys
					});

					return keys.map(p => res.languages.find(e => e.id === p));
				});
			}
			return this.languageLoader.load(languageId);
		}
	}
}
