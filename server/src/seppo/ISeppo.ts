import {
	Seppo as SeppoClient,
	Variation,
	VariationVersion,
	Author
} from "seppo-client-js";

export interface ISeppo extends SeppoClient {
	fetchVariation(variationId: number): Promise<Variation>;
	fetchNewestVariationVersion(variationId: number): Promise<VariationVersion>;
	fetchAuthor(authorId: number): Promise<Author>;
}
