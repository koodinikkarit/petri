import * as DataLoader from "dataloader";
import {
	Seppo as SeppoClient,
	Variation,
	VariationVersion
} from "seppo-client-js";
import { ISeppo } from "./ISeppo";

export class Seppo extends SeppoClient implements ISeppo {
	private variationLoader: DataLoader<number, Variation>;
	private newestVariationVersionLoader: DataLoader<number, VariationVersion>;

	constructor(args: { ip: string; port: number }) {
		super(args);
	}

	fetchVariationWithLoader(variationId: number) {
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

	fetchNewestVariationVersion(variationId: number) {
		if (!this.newestVariationVersionLoader) {
			this.newestVariationVersionLoader = new DataLoader(async keys => {
				const res = await this.fetchNewestVariationVersionByVariationId(
					{
						variationIds: keys
					}
				);

				return keys.map(p =>
					res.variationVersions.find(e => e.id === p)
				);
			});
		}

		return this.newestVariationVersionLoader.load(variationId);
	}
}
