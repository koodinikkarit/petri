const messages = require("./service/seppo_service_pb");
const services = require("./service/seppo_service_grpc_pb");

import DataLoader from "dataloader";

import {
	Variation,
	SearchVariationsOutput
} from "./Variation";

import {
	SongDatabase
} from "./SongDatabase";

import {
	EwDatabase
} from "./EwDatabase";

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
				this.client.fetchVariationById(req, (err, res) => {
					if (!err) {
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

	fetchSongDatabases() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchSongDatabasesRequest();
			this.client.fetchSongDatabases(req, (err, res) => {
				if (!err) {
					resolve(res.getSongdatabasesList().map(p => new SongDatabase(this, p)));
				} else {
					reject();
				}
			});
		});
	}

	fetchSongDatabaseById(id) {
		if (!this.songDatabaseLoader) {
			this.songDatabaseLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchSongDatabaseByIdRequest();
				req.setSongdatabaseidsList(keys);

				this.client.fetchSongDatabaseById(req, (err, res) => {
					if (!err) {
						resolve(res.getSongdatabasesList().map(p => {
							if (p.getId() > 0) {
								return new SongDatabase(this, p);
							} else {
								return null;
							}
						}))
					} else {
						reject();
					}
				});
			}));
		}
		return this.songDatabaseLoader.load(id);
	}

	fetchEwDatabases() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchEwDatabasesRequest();
			this.client.fetchEwDatabases(req, (err, res) => {
				if (!err) {
					resolve(res.getEwdatabasesList().map(p => new EwDatabase(this, p)));
				} else {
					reject()
				}
			});
		});
	}

	fetchEwDatabaseById(id) {
		if (!this.ewDatabaseLoader) {
			this.ewDatabaseLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchEwDatabaseByIdRequest();
				req.setEwdatabaseidsList(keys);

				this.client.fetchEwDatabaseById(req, (err, res) => {
					if (!err) {
						resolve(res.getEwdatabasesList().map(p => {
							if (p.getId() > 0) {
								return new EwDatabase(this, p);
							} else {
								return null;
							}
						}))
					} else {
						reject();
					}
				});
			}));
		}
		return this.ewDatabaseLoader.load(id);
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

	createSongDatabase({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateSongDatabaseRequest();
			req.setName(name);

			this.client.createSongDatabase(req, (err, res) => {
				if (!err) {
					resolve(new SongDatabase(this, res.getSongdatabase()));
				} else {
					reject();
				}
			});
		});
	}

	editSongDatabase({
		songDatabaseId,
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditSongDatabaseRequest();
			req.setName(name);

			this.client.editSongDatabase(req, (err, res) => {
				if (!err) {
					resolve(new SongDatabase(this, res.getSongdatabase()));
				} else {
					reject();
				}
			});
		});
	}

	removeSongDatabase(songDatabaseId) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveSongDatabaseRequest();
			req.setSongdatabaseid(songDatabaseId);

			this.client.editSongDatabase(req, (err, res) => {
				if (!err) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	createEwDatabase({
		songDatabaseId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateEwDatabaseRequest();

			this.client.createEwDatabase(req, (err, res) => {
				if (!err) {
					resolve(new EwDatabase(this, res.getEwdatabase()));
				} else {
					reject();
				}
			});
		});
	}

	removeEwDatabase(ewDatabaseId) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveEwDatabaseRequest();

			this.client.removeEwDatabase(req, (err, res) => {
				if (!err) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}
}