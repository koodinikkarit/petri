import * as DataLoader from "dataloader";
import * as grpc from "grpc";
import {
	CreateVariationRequest,
	UpdateVariationRequest,
	RemoveVariationRequest,
	FetchVariationByIdRequest,
	SearchVariationsRequest,
	Variation,
	FetchNewestVariationVersionByVariationIdRequest,
	SeppoClient,
	SearchMatiasClientsRequest,
	FetchMatiasClientRequest,
	UpdateMatiasClientRequest,
	MatiasClient,
	MatiasClientAcceptedState,
	EwDatabase,
	FetchMatiasClientEwDatabasesRequest,
	FetchSongDatabaseByIdRequest,
	SearchSongDatabasesRequest,
	CreateSongDatabaseRequest,
	UpdateSongDatabaseRequest,
	UpdateSongDatabaseResponse,
	RemoveSongDatabaseRequest,
	CreateEwDatabaseRequest,
	SearchEwDatabasesRequest
} from "seppo-client-js";

import {
	VariationType,
	VariationVersion,
	MatiasClientType,
	MatiasClientsConnectionType,
	EwDatabaseType,
	SongDatabaseType,
	UpdateSongDatabaseResponseType,
	SongDatabasesConnectionType
} from "./types";
import {
	newVariation,
	newMatiasClient,
	newEwDatabase,
	newSongDatabase,
	newSongDatabaseConnectionType
} from "./generators";
import { request } from "https";

export default class Seppo {
	client: SeppoClient;
	variationLoader: DataLoader<number, VariationType>;
	variationVersionLoader: DataLoader<number, VariationVersion>;
	songDatabaseLoader: DataLoader<number, SongDatabaseType>;
	matiasLoader: DataLoader<number, MatiasClientType>;
	matiasClientEwDatabasesLoader: DataLoader<number, EwDatabaseType[]>;

	constructor({ ip, port }: { ip: string; port: number }) {
		this.client = new SeppoClient(
			`${ip}:${port}`,
			grpc.credentials.createInsecure()
		);
	}

	async createVariation({ name, text }): Promise<VariationType | {}> {
		return new Promise((resolve, reject) => {
			let req = new CreateVariationRequest();
			req.setName(name);
			req.setText(text);

			this.client.createVariation(req, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve(
					res.getVariation() ? newVariation(res.getVariation()) : null
				);
			});
		});
	}

	async updateVariation({ variationId, name, text, languageId }) {
		return new Promise((resolve, reject) => {
			let req = new UpdateVariationRequest();
			req.setVariationid(variationId);
			req.setName(name);
			req.setText(text);
			req.setLanguageid(languageId);

			this.client.updateVariation(req, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve({
					success: res.getSuccess(),
					variation: res.getVariation()
						? newVariation(res.getVariation())
						: null
				});
			});
		});
	}

	async removeVariation(variationId) {
		return new Promise((resolve, reject) => {
			let req = new RemoveVariationRequest();
			req.setVariationid(variationId);

			this.client.removeVariation(req, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve({
					success: res.getSuccess()
				});
			});
		});
	}

	searchVariations({
		searchWord,
		songDatabaseId,
		tagId,
		languageId,
		offset,
		limit
	}: {
		searchWord: string;
		songDatabaseId: number;
		tagId: number;
		languageId: number;
		offset: number;
		limit: number;
	}): Promise<VariationType[]> {
		return new Promise((resolve, reject) => {
			let request = new SearchVariationsRequest();
			request.setSearchword(searchWord);
			request.setSongdatabaseid(songDatabaseId);
			request.setTagid(tagId);
			request.setLanguageid(languageId);
			request.setOffset(offset);
			request.setLimit(limit);

			this.client.searchVariations(request, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve(
					res.getVariationsList().map(p => ({
						id: p.getId(),
						authorId: p.getAuthorid(),
						copyrightId: p.getCopyrightid(),
						languageId: p.getLanguageid(),
						songId: p.getSongid()
					}))
				);
			});
		});
	}

	async fetchNewestVariationVersion(
		variationId: number
	): Promise<VariationVersion> {
		if (!this.variationVersionLoader) {
			this.variationVersionLoader = new DataLoader(
				keys =>
					new Promise((resolve, reject) => {
						let req = new FetchNewestVariationVersionByVariationIdRequest();
						req.setVariationidsList(keys);
						this.client.fetchNewestVariationVersionByVariationId(
							req,
							(err, res) => {
								if (err) {
									reject(err);
								}
								resolve(
									res.getVariationversionsList().map(p => ({
										id: p.getId(),
										name: p.getName(),
										text: p.getText(),
										version: p.getVersion()
									}))
								);
							}
						);
					})
			);
		}
		return this.variationVersionLoader.load(variationId);
	}

	async fetchVariation(variationId: number): Promise<VariationType> {
		if (!this.variationLoader) {
			this.variationLoader = new DataLoader(
				keys =>
					new Promise((resolve, reject) => {
						let request = new FetchVariationByIdRequest();
						request.setVariationidsList(keys);
						this.client.fetchVariationById(request, (err, res) => {
							if (err) {
								reject(err);
							}
							res.getVariationsList().map(p => ({
								id: p.getId(),
								authorId: p.getAuthorid(),
								copyrightId: p.getCopyrightid(),
								languageId: p.getLanguageid(),
								songId: p.getSongid()
							}));
						});
					})
			);
		}
		return this.variationLoader.load(variationId);
	}

	fetchSongDatabase(songDatabaseId: number): Promise<SongDatabaseType> {
		if (!this.songDatabaseLoader) {
			this.songDatabaseLoader = new DataLoader(
				keys =>
					new Promise((resolve, reject) => {
						let req = new FetchSongDatabaseByIdRequest();
						req.setSongdatabaseidsList(keys);

						this.client.fetchSongDatabaseById(req, (err, res) => {
							if (err) {
								reject(err);
							} else {
								resolve(
									res
										.getSongdatabasesList()
										.map(p => newSongDatabase(p))
								);
							}
						});
					})
			);
		}
		return this.songDatabaseLoader.load(songDatabaseId);
	}

	searchSongDatabases(): Promise<SongDatabasesConnectionType> {
		return new Promise((resolve, reject) => {
			let req = new SearchSongDatabasesRequest();

			this.client.searchSongDatabases(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(newSongDatabaseConnectionType(res));
				}
			});
		});
	}

	createSongDatabase({ name }: { name: string }): Promise<SongDatabaseType> {
		return new Promise((resolve, reject) => {
			let req = new CreateSongDatabaseRequest();
			req.setName(name);

			this.client.createSongDatabase(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(newSongDatabase(res.getSongdatabase()));
				}
			});
		});
	}

	updateSongDatabase({
		songDatabaseId,
		name
	}: {
		songDatabaseId: number;
		name: string;
	}): Promise<UpdateSongDatabaseResponseType> {
		return new Promise((resolve, reject) => {
			let req = new UpdateSongDatabaseRequest();
			req.setName(name);

			this.client.updateSongDatabase(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						songDatabase: newSongDatabase(res.getSongdatabase()),
						success: res.getSuccess()
					});
				}
			});
		});
	}

	removeSongDatabase(songDatabaseId: number): Promise<Boolean> {
		return new Promise((resolve, reject) => {
			let req = new RemoveSongDatabaseRequest();
			req.setSongdatabaseid(songDatabaseId);

			this.client.removeSongDatabase(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.getSuccess());
				}
			});
		});
	}

	async fetchMatiasClient(matiasClientId: number): Promise<MatiasClientType> {
		if (!this.matiasLoader) {
			this.matiasLoader = new DataLoader(
				keys =>
					new Promise((resolve, reject) => {
						let request = new FetchMatiasClientRequest();
						request.setMatiasclientidsList(keys);
						this.client.fetchMatiasClient(request, (err, res) => {
							if (err) {
								reject(err);
							}
							resolve(
								res
									.getMatiasclientsList()
									.map(p => newMatiasClient(p))
							);
						});
					})
			);
		}
		return this.matiasLoader.load(matiasClientId);
	}

	public searchMatiasClients(): Promise<MatiasClientsConnectionType> {
		return new Promise((resolve, reject) => {
			let req = new SearchMatiasClientsRequest();
			this.client.searchMatiasClients(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						maxMatiasClients: res.getMaxmatiasclients(),
						matiasClients: res
							.getMatiasclientsList()
							.map(p => newMatiasClient(p))
					});
				}
			});
		});
	}

	fetchMatiasClientEwDatabases(
		matiasClientId: number
	): Promise<EwDatabaseType[]> {
		if (!this.matiasClientEwDatabasesLoader) {
			this.matiasClientEwDatabasesLoader = new DataLoader(
				keys =>
					new Promise((resolve, reject) => {
						let req = new FetchMatiasClientEwDatabasesRequest();
						req.setMatiasclientidsList(keys);

						this.client.fetchMatiasClientEwDatabases(
							req,
							(err, res) => {
								if (err) {
									reject(err);
								} else {
									let matiasClientsEwDatabases = [];
									res
										.getEwdatabasesMap()
										.forEach((entry, key) => {
											matiasClientsEwDatabases.push(
												entry
													.getEwdatabasesList()
													.map(p => newEwDatabase(p))
											);
										});

									resolve(matiasClientsEwDatabases);
								}
							}
						);
					})
			);
		}
		return this.matiasClientEwDatabasesLoader.load(matiasClientId);
	}

	updateMatiasClient({
		matiasClientId,
		name,
		accepted
	}: {
		matiasClientId: number;
		name: string;
		accepted: boolean;
	}) {
		return new Promise((resolve, reject) => {
			let req = new UpdateMatiasClientRequest();
			req.setMatiasclientid(matiasClientId);
			req.setName(name);
			if (accepted != null) {
				if (accepted == true) {
					req.setState(MatiasClientAcceptedState.ACEPTED);
				} else if (accepted == false) {
					req.setState(MatiasClientAcceptedState.DECLINED);
				}
			}

			this.client.updateMatiasClient(req, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve({
					success: res.getSuccess(),
					matiasClient: newMatiasClient(res.getMatiasclient())
				});
			});
		});
	}
	searchEwDatabases(args: {
		offset: number;
		limit: number;
		songDatabaseId: number;
		matiasClientId: number;
	}): Promise<{ maxEwDatabases: number; ewDatabases: EwDatabaseType[] }> {
		return new Promise((resolve, reject) => {
			let req = new SearchEwDatabasesRequest();
			req.setOffset(args.offset);
			req.setLimit(args.limit);
			req.setSongdatabaseid(args.songDatabaseId);
			req.setMatiasclientid(args.matiasClientId);

			this.client.searchEwDatabases(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						maxEwDatabases: res.getMaxewdatabases(),
						ewDatabases: res
							.getEwdatabasesList()
							.map(p => newEwDatabase(p))
					});
				}
			});
		});
	}
	createEwDatabase(args: {
		name: string;
		filesystemPath: string;
		songDatabaseId: number;
		matiasClientId: number;
	}) {
		return new Promise((resolve, reject) => {
			console.log("args is", args);
			let req = new CreateEwDatabaseRequest();
			req.setName(args.name);
			req.setFilesystempath(args.filesystemPath);
			req.setSongdatabaseid(args.songDatabaseId);
			req.setMatiasclientid(args.matiasClientId);

			this.client.createEwDatabase(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(newEwDatabase(res.getEwdatabase()));
				}
			});
		});
	}
}

// import * as grpc from "grpc";
// grpc.

// "@types/protobufjs": "^5.0.31",
