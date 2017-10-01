const messages = require("./service/seppo_service_pb");
const services = require("./service/seppo_service_grpc_pb");
const grpc = require("grpc");

import DataLoader from "dataloader";

import {
	Variation,
	VariationText,
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

import {
	Tag,
	TagsConnection
} from "./Tag";

import {
	Language,
	LanguagesConnection
} from "./Language";

import {
	TagVariation
} from "./TagVariation";

import{
	SongDatabaseTag
} from "./SongDatabaseTag";

export default class {
	constructor({
		ip,
		port,
		//credentials
	}) {
		this.client = new services.SeppoClient(
			ip + ":" + port, 
			grpc.credentials.createInsecure()
		);
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
						}));
					} else {
						reject();
					}
				});
			}));
		}
		return this.variationLoader.load(id);
	}

	fetchVariationTextByVariationId(id) {
		if (!this.variationTextLoader) {
			this.variationTextLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchVariationTextByVariationIdRequest();
				req.setVariationidsList(keys);

				this.client.fetchVariationTextByVariationId(req, (err, res) => {
					if (!err) {
						resolve(res.getVariationtextsList().map(p => {
							if (p.getId() > 0) {
								var vv = new VariationText(this, p);
								return vv;
							} else {
								return null;
							}
						}));
					} else {
						reject();
					}
				});
			}));
		}
		return this.variationTextLoader.load(id);
	}

	searchVariations({
		searchWord,
		songDatabaseId,
		songDatabaseFilterId,
		tagId,
		languageId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.SearchVariationsRequest();
			req.setSearchword(searchWord);
			req.setSongdatabaseid(songDatabaseId);
			req.setSongdatabasefilterid(songDatabaseFilterId);
			req.setTagid(tagId);
			req.setLanguageid(languageId);

			this.client.searchVariations(req, (err, res) => {
				if (!err) {
					resolve(new SearchVariationsOutput(this, res));
				} else {
					reject();
				}
			});
		});
	}

	fetchSongDatabases({
		searchWord,
		variationId
	}) {
		return new Promise((resolve, reject) => {			
			var req = new messages.FetchSongDatabasesRequest();
			req.setSearchword(searchWord);
			req.setVariationid(variationId);

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

	searchTags({
		songDatabaseId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.SearchTagsRequest();
			req.setSongdatabaseid(songDatabaseId);

			this.client.searchTags(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(new TagsConnection(this, res));
				}
			});
		});
	}

	fetchTagById(id) {
		if (!this.tagLoader) {
			this.tagLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchTagByIdRequest();
				req.setTagidsList(keys);
				
				this.client.fetchTagById(req, (err, res) => {
					if (err) {
						reject();
					} else {
						resolve(res.getTagsList().map(p => {
							if (p.getId() > 0) {
								return new Tag(this, p);
							} else {
								return null;
							}
						}));
					}
				});
			}));
		}
		return this.tagLoader.load(id);
	}

	searchLanguages() {
		return new Promise((resolve, reject) => {
			var req = new messages.SearchLanguagesRequest();

			this.client.searchLanguages(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(new LanguagesConnection(this, res));
				}
			});
		});
	}

	fetchLanguageById(id) {
		if (!this.languageLoader) {
			this.languageLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchLanguageByIdRequest();
				req.setLanguageidsList(keys);

				this.client.fetchLanguageById(req, (err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.getLanguagesList().map(p => {
							if (p.getId() > 0) {
								return new Language(this, p);
							} else {
								return null;
							}
						}));
					}
				});
			}));
		}
		return this.languageLoader.load(id);
	}

	fetchVariationTags(variationId) {
		if (!this.variationTagsLoader) {
			this.variationTagsLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchVariationTagsRequest();
				req.setVariationidsList(keys);

				this.client.fetchVariationTags(req, (err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.getVariationtagsList().map(p => (
							p.getTagsList().map(e => (
								new Tag(this, e)
							))
						)));
					}
				});
			}));
		}
		return this.variationTagsLoader.load(variationId);
	}

	fetchTagVariations(tagId) {
		if (!this.tagVariationsLoader) {
			this.tagVariationsLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchTagVariationsRequest();
				req.setTagidsList(keys);

				this.client.fetchTagVariations(req, (err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.getTagvariationsList().map(p => (
							p.getVariationsList().map(e => (
								new Variation(this, e)
							))
						)));
					}
				});
			}));
		}
		return this.tagVariationsLoader.load(tagId);
	}

	fetchTagSongDatabases(tagId) {
		if (!this.tagSongDatabasesLoader) {
			this.tagSongDatabasesLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.fetchTagSongDatabasesRequest();
				req.setTagidsList(keys);

				this.client.fetchTagSongDatabases(req, (err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.getTagsongdatabasesList().map(p => (
							p.getSongdatabasesList().map(e => (
								new SongDatabase(this, e)
							))
						)));
					}
				});
			}));
		}
		return this.tagSongDatabasesLoader(tagId);
	}

	fetchSongDatabaseTags(songDatabaseId) {
		if (!this.songDatabaseTagsLoader) {
			this.songDatabaseTagsLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchSongDatabaseTagsRequest();
				req.setSongdatabaseidsList(keys);

				this.client.fetchSongDatabaseTags(req, (err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.getSongdatabasetagsList().map(p => (
							p.getTagsList().map(e => (
								new Tag(this, e)
							))
						)));
					}
				});
			}));
		}
		return this.songDatabaseTagsLoader(songDatabaseId);
	}

	fetchLanguageVariations(languageId) {
		if (!this.languageVariationsLoader) {
			this.languageVariationsLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchLanguageVariationsRequest();
				req.setLanguageidsList(keys);

				this.client.fetchLanguageVariations(req, (err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.getLanguagevariations().map(p => (
							p.getVariationsList().map(e => (
								new Variation(this, e)
							))
						)));
					}
				});
			}));
		}
		return this.languageVariationsLoader.load(languageId);
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
			this.client.createVariation(req, (err, res) => {
				if (!err) {
					resolve(new Variation(this, res.getVariation()));
				} else {
					reject();
				}
			});
		});
	}

	editVariation({
		variationId,
		name,
		text,
		songId,
		languageId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditVariationRequest();
			req.setVariationid(variationId);
			req.setName(name);
			req.setText(text);
			req.setSongid(songId);
			req.setLanguageid(languageId);

			this.client.editVariation(req, (err, res) => {
				if (!err) {
					resolve(new Variation(this, res.getVariation()));
				} else {
					reject();
				}
			});
		});
	}

	removeVariation(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveVariationRequest();
			req.setVariationid(id);

			this.client.removeVariation(req, (err) => {
				if (!err) {
					resolve();
				} else {
					reject(err);
				}
			});
		});
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
		name,
		addTagIds,
		removeTagIds
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditSongDatabaseRequest();
			req.setSongdatabaseid(songDatabaseId);
			req.setName(name);
			req.setAddtagidsList(addTagIds);
			req.setRemovetagidsList(removeTagIds);

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

			this.client.removeVariationFromSongDatabase(req, (err) => {
				if (!err) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	createTag({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateTagRequest();
			req.setName(name);

			this.client.createTag(req, (err, res) => {
				if (!err) {
					resolve(new Tag(this, res.getTag()));
				} else {
					reject(err);
				}
			});
		});
	}

	editTag({
		tagId,
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditTagRequest();
			req.setTagid(tagId);
			req.setName(name);

			this.client.editTag(req, (err, res) => {
				if (!err) {
					resolve(new Tag(this, res.getTag()));
				} else {
					reject(err);
				}
			});
		});
	}

	removeTag(tagId) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveTagRequest();
			req.setTagid(tagId);

			this.client.removeTag(req, (err, res) => {
				if (!err) {
					resolve(res.getSuccess());
				} else {
					reject(err);
				}
			});
		});
	}

	createLanguage({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateLanguageRequest();
			req.setName(name);

			this.client.createLanguage(req, (err, res) => {
				if (!err) {
					resolve(new Language(this, res.getLanguage()));
				} else {
					reject(err);
				}
			});
		});
	}

	editLanguage({
		languageId,
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditLanguageRequest();
			req.setLanguageid(languageId);
			req.setName(name);

			this.client.editLanguage(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(new Language(this, res.getLanguage()));
				}
			});
		});
	}

	removeLanguage(languageId) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveLanguageRequest();
			req.setLanguageid(languageId);

			this.client.removeLanguage(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.getSuccess());
				}
			});
		});
	}

	addTagToVariation(tagId, variationId) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddTagToVariationRequest();
			req.setTagid(tagId);
			req.setVariationid(variationId);

			this.client.addTagToVariation(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					if (res.getSuccess()) {
						resolve(new TagVariation(this, res.getTagvariation()));
					} else {
						resolve(null);
					}
				}
			});
		});
	}

	removeTagFromVariation(tagId, variationId) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveTagFromVariationRequest();
			req.setTagid(tagId);
			req.setVariationid(variationId);

			this.client.removeTagFromVariation(req, (err, res) => {
				if (err) {
					reject();
				} else {
					resolve(res.getSuccess());
				}
			});
		});
	}

	addTagToSongDatabase(tagId, songDatabaseId) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddTagToSongDatabaseRequest();
			req.setTagid(tagId);
			req.setSongdatabaseid(songDatabaseId);

			this.client.addTagToSongDatabase(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					if (res.getSuccess()) {
						resolve(new SongDatabaseTag(this, res.getSongdatabase()));
					}
				}
			});
		});
	}

	removeTagFromSongDatabase(tagId, songDatabaseId) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveTagFromSongDatabase();
			req.setTagid(tagId);
			req.setSongdatabaseid(songDatabaseId);

			this.client.removeTagFromSongDatabase(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					reject(res.getSuccess());
				}
			});
		});
	}
}