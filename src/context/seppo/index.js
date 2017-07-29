const messages = require("./service/seppo_service_pb");
const services = require("./service/seppo_service_grpc_pb");

import DataLoader from "dataloader";

import {
	Variation,
	SearchVariationsOutput
} from "./Variation";

export default class {
	constructor({
		ip,
		port,
		credentials
	}) {
		this.client = new services.SeppoClient(ip + ":" + port, credentials);
	}

	// Queries

	fetchVariationById(id) {
		if (!this.variationLoader) {
			this.variationLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchVariationByIdRequest();
				req.setVariationidsList(keys);
				console.log("keys", keys);
				this.client.fetchVariationById(req, (err, res) => {
					if (!err) {
						console.log("res3.0", res);
						resolve(res.getVariationsList().map(p => {
							if (p.getId() > 0) {
								return new Variation(this, p);
							} else {
								return null;
							}
						}))
					} else {
						reject();
					}
				})
			}))
		}
		return this.variationLoader.load(id);
	}

	searchVariations({
		searchWord,
		songDatabaseId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.SearchVariationsRequest();
			//req.setSearchword(searchWord);
			//req.setSongdatabaseid(songDatabaseId);
			console.log("searchVariations");
			this.client.searchVariations(req, (err, res) => {
				if (!err) {
					resolve(new SearchVariationsOutput(this, res));
				} else {
					reject();
				}
			});
		});
	}


	// Mutations

	createVariation({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateVariationRequest();
			req.setName(name);

			console.log("createVariation");

			this.client.createVariation(req, (err, res) => {
				if (!err) {
					resolve(new Variation(this, res.getVariation()));
				} else {
					reject();
				}
			})
		});
	}

	editVariation({
		variationId,
		name,
		text,
		songId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditVariationRequest();
			req.setVariationid(variationId);
			req.setName(name);
			req.setText(text);
			req.setSongid(songId);

			this.client.editVariation(req, (err, res) => {
				if (!err) {
					resolve(new Variation(this, res.getVariation()));
				} else {
					reject();
				}
			})
		})
	}
}