import {
	Variation,
	MatiasClient,
	EwDatabase,
	SongDatabase,
	SearchSongDatabasesResponse
} from "seppo-client-js";

import {
	VariationType,
	MatiasClientType,
	EwDatabaseType,
	SongDatabaseType,
	SongDatabasesConnectionType
} from "./types";

export const newVariation = (variation: Variation): VariationType => {
	return {
		id: variation.getId(),
		authorId: variation.getAuthorid(),
		copyrightId: variation.getCopyrightid(),
		languageId: variation.getLanguageid(),
		songId: variation.getSongid()
	};
};

export const newMatiasClient = (
	matiasClient: MatiasClient
): MatiasClientType => {
	return {
		id: matiasClient.getId(),
		name: matiasClient.getName(),
		hostName: matiasClient.getHostname(),
		key: matiasClient.getKey(),
		accepted: matiasClient.getAccepted()
	};
};

export const newSongDatabaseConnectionType = (
	searchSongDatabasesResponse: SearchSongDatabasesResponse
): SongDatabasesConnectionType => {
	return {
		songDatabases: searchSongDatabasesResponse
			.getSongdatabasesList()
			.map(p => newSongDatabase(p)),
		maxSongDatabases: searchSongDatabasesResponse.getMaxsongdatabases()
	};
};

export const newSongDatabase = (
	songDatabase: SongDatabase
): SongDatabaseType => {
	return {
		id: songDatabase.getId(),
		name: songDatabase.getName()
	};
};

export const newEwDatabase = (ewDatabase: EwDatabase): EwDatabaseType => {
	return {
		id: ewDatabase.getId(),
		name: ewDatabase.getName(),
		songDatabaseId: ewDatabase.getSongdatabaseid(),
		filesystemPath: ewDatabase.getFilesystempath(),
		matiasClientId: ewDatabase.getMatiasclientid(),
		removeSongsFromEwDatabase: ewDatabase.getRemovesongsfromewdatabase(),
		removeSongsFromSongDatabase: ewDatabase.getRemovesongsfromsongdatabase(),
		variationVersionConflictAction: ewDatabase.getVariationversionconflictaction()
	};
};
