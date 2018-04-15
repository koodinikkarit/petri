import {
	Seppo as SeppoClient,
	Variation,
	VariationVersion
} from "seppo-client-js";

export interface ISeppo extends SeppoClient {
	fetchVariationWithLoader(variationId: number): Promise<Variation>;
	fetchNewestVariationVersion(variationId: number): Promise<VariationVersion>;
}
