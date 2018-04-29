import {
	Seppo as SeppoClient,
	Variation,
	VariationVersion,
	Author,
	SongDatabase,
	Tag,
	Language,
	EwDatabase
} from "seppo-client-js";

export interface ISeppo extends SeppoClient {
	fetchVariation(variationId: number): Promise<Variation>;
	fetchNewestVariationVersion(variationId: number): Promise<VariationVersion>;
	fetchAuthor(authorId: number): Promise<Author>;
	fetchSongDatabase(songDatabaseId: number): Promise<SongDatabase>;
	fetchTag(tagId: number): Promise<Tag>;
	fetchLanguage(languageId: number): Promise<Language>;
	fetchAuthor(authorId: number): Promise<Author>;
	fetchEwDatabase(ewDatabaseId: number): Promise<EwDatabase>;
}
