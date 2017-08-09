const messages = require("./service/seppo_service_pb");
const services = require("./service/seppo_service_grpc_pb");
const grpc = require("grpc");

import DataLoader from "dataloader";

import {
	Variation,
	SearchVariationsOutput
} from "./Variation";

import {
	SongDatabase,
	SongDatabasesConnection
} from "./SongDatabase";

import {
	EwDatabase,
	EwDatabasesConnection
} from "./EwDatabase";

import {
	SongDatabaseVariation
} from "./SongDatabaseVariation";

export default class {
	constructor({
		ip,
		port,
		//credentials
	}) {
		console.log("ipp", ip, port);
		this.client = new services.SeppoClient(ip + ":" + port, grpc.credentials.createInsecure());
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
		songDatabaseId,
		songDatabaseFilterId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.SearchVariationsRequest();
			req.setSearchword(searchWord);
			req.setSongdatabaseid(songDatabaseId);
			req.setSongdatabasefilterid(songDatabaseFilterId);
			console.log("searchVariations", songDatabaseFilterId);
			this.client.searchVariations(req, (err, res) => {
				if (!err) {
					resolve(new SearchVariationsOutput(this, res));
				} else {
					console.log("searchVariations err", err);
					reject();
				}
			});
		});
	}

	fetchSongDatabases() {
		return new Promise((resolve, reject) => {
			console.log("fetchSongDatabases");
			
			var req = new messages.FetchSongDatabasesRequest();
			this.client.fetchSongDatabases(req, (err, res) => {
				if (!err) {
					resolve(new SongDatabasesConnection(this, res));
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
					resolve(new EwDatabasesConnection(this, res));
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

	fetchVariationsBySongDatabaseId(id) {
		if (!this.songDatabaseVariationsLoader) {
			this.songDatabaseVariationsLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchVariationsBySongDatabaseIdRequest();
				req.setSongdatabaseidsList(keys);
				

				this.client.fetchVariationsBySongDatabaseId(req, (err, res) => {
					if (!err) {
						resolve(res.getSongdatabasevariationsList().map(p => {
							return p.getVariationsList().map(e => new Variation(this, e));
						}));
					} else {
						reject();
					}
				});
			}));
		}

		return this.songDatabaseVariationsLoader.load(id);
	}


	// Mutations

	createVariation({
		name,
		text
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateVariationRequest();
			req.setName(name);
			req.setText(text);
			console.log("createVariation", name, text);
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

	removeVariation(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveVariationRequest();
			req.setVariationid(id);

			this.client.removeVariation(req, (err, res) => {
				console.log("removed variation");
				if (!err) {
					resolve();
				} else {
					reject();
				}
			});
		})
	}

	createSongDatabase({
		name
	}) {
		return new Promise((resolve, reject) => {
			console.log("createSongDatabase");
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
			req.setSongdatabaseid(songDatabaseId);
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

			this.client.removeSongDatabase(req, (err, res) => {
				if (!err) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	createEwDatabase({
		name,
		songDatabaseId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateEwDatabaseRequest();
			req.setName(name);
			req.setSongdatabaseid(songDatabaseId);

			console.log("createEwDataase", name, songDatabaseId);

			this.client.createEwDatabase(req, (err, res) => {
				if (!err) {
					resolve(new EwDatabase(this, res.getEwdatabase()));
				} else {
					reject();
				}
			});
		});
	}

	editEwDatabase({
		ewDatabaseId,
		name,
		songDatabaseId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditEwDatabaseRequest();
			req.setEwdatabaseid(ewDatabaseId);
			req.setName(name);
			req.setSongdatabaseid(songDatabaseId);

			this.client.editEwDatabase(req, (err, res) => {
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
			req.setEwdatabaseid(ewDatabaseId);
			this.client.removeEwDatabase(req, (err, res) => {
				if (!err) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	addVariationToSongDatabase(songDatabaseId, variationId) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddVariationToSongDatabaseRequest();
			req.setSongdatabaseid(songDatabaseId);
			req.setVariationid(variationId);

			this.client.addVariationToSongDatabase(req, (err, res) => {
				if (!err) {
					resolve(new SongDatabaseVariation(this, res.getSongdatabasevariation()));
				} else {
					reject();
				}
			});
		});
	}

	removeVariationFromSongDatabase(songDatabaseId, variationId) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveVariationFromSongDatabaseRequest();
			req.setSongdatabaseid(songDatabaseId);
			req.setVariationid(variationId);

			this.client.removeVariationFromSongDatabase(req, (err, res) => {
				if (!err) {
					resolve()
				} else {
					reject();
				}
			})
		});
	}
}