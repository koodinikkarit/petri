import {
	Seppo as SeppoClient,
	Variation,
	VariationVersion,
	Author,
	SongDatabase,
	Tag
} from "seppo-client-js";

export interface ISeppo extends SeppoClient {
	fetchVariation(variationId: number): Promise<Variation>;
	fetchNewestVariationVersion(variationId: number): Promise<VariationVersion>;
	fetchAuthor(authorId: number): Promise<Author>;
	fetchSongDatabase(songDatabaseId: number): Promise<SongDatabase>;
	fetchTag(tagId: number): Promise<Tag>;
}
