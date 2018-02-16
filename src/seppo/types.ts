import { MatiasClient } from "seppo-client-js";

export type VariationType = {
	id: number;
	authorId: number;
	copyrightId: number;
	languageId: number;
	songId: number;
};

export type IVariationsConnection = {
	totalCount: number;
	variations: VariationType[];
};

export type VariationVersion = {
	id: number;
	name: string;
	text: string;
	version: number;
};

export type MatiasClientType = {
	id: number;
	name: string;
	hostName: string;
	key: string;
	accepted: boolean;
};

export type SongDatabaseType = {
	id: number;
	name: string;
};

export type SongDatabasesConnectionType = {
	songDatabases: SongDatabaseType[];
	maxSongDatabases: number;
};

export type EwDatabaseType = {
	id: number;
	name: string;
	songDatabaseId: number;
	filesystemPath: string;
	matiasClientId: number;
	removeSongsFromEwDatabase: number;
	removeSongsFromSongDatabase: number;
	variationVersionConflictAction: number;
};

export type MatiasClientsConnectionType = {
	matiasClients: Array<MatiasClientType>;
	maxMatiasClients: number;
};

export type UpdateMatiasClientResponseType = {
	succes: boolean;
	matiasClient: MatiasClient;
};

export type UpdateSongDatabaseResponseType = {
	success: boolean;
	songDatabase: SongDatabaseType;
};
