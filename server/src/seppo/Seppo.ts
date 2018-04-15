import * as DataLoader from "dataloader";
import {
	Seppo as SeppoClient,
	Variation,
	VariationVersion,
	Author
} from "seppo-client-js";
import { ISeppo } from "./ISeppo";

export class Seppo extends SeppoClient implements ISeppo {
	private variationLoader: DataLoader<number, Variation>;
	private authorLoader: DataLoader<number, Author>;
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
					res.variationVersions.find(e => e.variationId === p)
				);
			});
		}

		return this.newestVariationVersionLoader.load(variationId);
	}

	fetchAuthor(authorId: number) {
		if (!this.authorLoader) {
			this.authorLoader = new DataLoader(async keys => {
				const res = await this.fetchAuthorById({
					authorIds: keys
				});

				return keys.map(p => res.authors.find(e => e.id === p));
			});
		}
		return this.authorLoader.load(authorId);
	}
}
