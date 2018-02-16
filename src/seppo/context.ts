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
	SearchEwDatabasesRequest,
	UpdateEwDatabaseRequest
} from "seppo-client-js";

import {
	VariationType,
	VariationVersion,
	MatiasClientType,
	MatiasClientsConnectionType,
	EwDatabaseType,
	SongDatabaseType,
	UpdateSongDatabaseResponseType,
	SongDatabasesConnectionType,
	IVariationsConnection
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
				} else {
					resolve(
						res.getVariation()
							? newVariation(res.getVariation())
							: null
					);
				}
			});
		});
	}

	updateVariation(args: {
		variationId: number;
		name: string;
		text: string;
		languageId: number;
		addSongDatabaseIds: number[];
		removeSongDatabaseIds: number[];
	}) {
		return new Promise((resolve, reject) => {
			console.log("update varioations", args);
			let req = new UpdateVariationRequest();
			req.setVariationid(args.variationId);
			req.setName(args.name);
			req.setText(args.text);
			req.setLanguageid(args.languageId);
			req.setAddsongdatabaseidsList(args.addSongDatabaseIds);
			req.setRemovesongdatabaseidsList(args.removeSongDatabaseIds);

			this.client.updateVariation(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						success: res.getSuccess(),
						variation: res.getVariation()
							? newVariation(res.getVariation())
							: null
					});
				}
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

	searchVariations(args: {
		searchWord?: string;
		songDatabaseId?: number;
		tagId?: number;
		languageId?: number;
		offset?: number;
		limit?: number;
	}): Promise<IVariationsConnection> {
		return new Promise((resolve, reject) => {
			let request = new SearchVariationsRequest();
			if (args.searchWord) request.setSearchword(args.searchWord);
			if (args.songDatabaseId)
				request.setSongdatabaseid(args.songDatabaseId);
			if (args.tagId) request.setTagid(args.tagId);
			if (args.languageId) request.setLanguageid(args.languageId);
			if (args.offset) request.setOffset(args.offset);
			if (args.limit) request.setLimit(args.limit);

			this.client.searchVariations(request, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						totalCount: res.getMaxvariations(),
						variations: res.getVariationsList().map(p => ({
							id: p.getId(),
							authorId: p.getAuthorid(),
							copyrightId: p.getCopyrightid(),
							languageId: p.getLanguageid(),
							songId: p.getSongid()
						}))
					});
				}
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
								} else {
									resolve(
										res
											.getVariationversionsList()
											.map(p => ({
												id: p.getId(),
												name: p.getName(),
												text: p.getText(),
												version: p.getVersion()
											}))
									);
								}
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
							} else {
								resolve(
									res
										.getVariationsList()
										.map(p => newVariation(p))
								);
							}
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

	searchSongDatabases(args: {
		limit?: number;
		offset?: number;
		searchWord?: string;
		variationId?: number;
	}): Promise<SongDatabasesConnectionType> {
		return new Promise((resolve, reject) => {
			let req = new SearchSongDatabasesRequest();
			req.setLimit(args.limit);
			req.setOffset(args.offset);
			req.setSearchword(args.searchWord);
			req.setVariationid(args.variationId);

			this.client.searchSongDatabases(req, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(newSongDatabaseConnectionType(res));
				}
			});
		});
	}

	createSongDatabase(args: { name: string }): Promise<SongDatabaseType> {
		return new Promise((resolve, reject) => {
			let req = new CreateSongDatabaseRequest();
			req.setName(args.name);

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
							} else {
								resolve(
									res
										.getMatiasclientsList()
										.map(p => newMatiasClient(p))
								);
							}
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
				} else {
					resolve({
						success: res.getSuccess(),
						matiasClient: newMatiasClient(res.getMatiasclient())
					});
				}
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
	updateEwDatabase(args: {
		ewDatabaseId: number;
		name: string;
		accepted: boolean;
	}) {
		return new Promise((resolve, reject) => {
			let req = new UpdateEwDatabaseRequest();
			req.setEwdatabaseid(args.ewDatabaseId);
			req.setName(args.name);
			req.setAccepted(args.accepted);
		});
	}
}

// import * as grpc from "grpc";
// grpc.

// "@types/protobufjs": "^5.0.31",
