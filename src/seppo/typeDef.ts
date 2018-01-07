export default `
type Song {
	id: ID
}

type Author {
	id: ID
	name: String
}

type Copyright {
	id: ID
	name: String
}

type Language {
	id: ID
	name: String
}

type Tag {
	id: ID
	name: String
	variations: [Variation]
}

type Variation {
	id: ID
	songId: ID
	song: Song
	languageId: ID
	language: Language
	authorId: ID
	author: Author
	copyrightId: ID
	copyright: Copyright
	name: String
	version: Int
	text: String
}

type VariationVersion {
	id: ID
	name: String
	text: String
	version: Int
	createdAt: String
	disabledAt: String
	variation: Variation
}

type SongDatabase {
	id: ID
	name: String
	variations: [Variation]
	tags: [Tag]
}

type MatiasClient {
	id: ID
	name: String
	hostName: String
	key: String
	accepted: Boolean
	ewDatabases: [EwDatabase]
}

type EwDatabase {
	id: ID
	name: String
	matiasClientId: ID
	matiasClient: MatiasClient
	filesystemPath: String
	songDatabaseId: ID
	songDatabase: SongDatabase
	removeSongsFromEwDatabase: Int
	removeSongsFromSongDatabase: Int
	variationVersionConflictAction: Int
}

type CreateVariationResponse {
	variation: Variation
}

type UpdateVariationResponse {
	variation: Variation
	success: Boolean
}

type SongDatabasesConnection {
	songDatabases: [SongDatabase]
	maxSongDatabases: Int
}

type UpdateSongDatabaseResponse {
	success: Boolean
	songDatabase: SongDatabase
}

type SearchMatiasClientsResponse {
	matiasClients: [MatiasClient]
	maxMatiasClients: Int
}

type UpdateMatiasClientResponse {
	matiasClient: MatiasClient
	success: Boolean
}

type EwDatabasesConnection {
	maxEwDatabases: Int
	ewDatabases: [EwDatabase]
}

type UpdateEwDatabaseResponse {
	ewDatabase: EwDatabase
	success: Boolean
}

type Query {
	variation(
		variationId: ID	
	): Variation
	searchVariations(
		searchWord: String,
		songDatabaseId: ID,
		tagId: ID,
		languageId: ID,
		offset: Int,
		limit: Int
	): [Variation]
	newVariationVersion: VariationVersion
	songDatabase: SongDatabase
	searchSongDatabases: SongDatabasesConnection
	matiasClient(
		matiasClientId: ID
	): MatiasClient
	searchMatiasClients: SearchMatiasClientsResponse
	ewDatabase(
		ewDatabaseId: ID
	): EwDatabase
	searchEwDatabases(
		offset: Int,
		limit: Int,
		songDatabaseId: ID,
		matiasClientId: ID
	): EwDatabasesConnection
}

type Mutation {
	createVariation(
		name: String,
		text: String
	): CreateVariationResponse
	updateVariation(
		variationId: ID,
		name: String,
		text: String,
		languageId: ID
	): UpdateVariationResponse
	removeVariation(
		variationId: ID
	): Boolean
	createSongDatabase(
		name: String
	): SongDatabase
	updateSongDatabase(
		songDatabaseId: ID
		name: String
	): UpdateSongDatabaseResponse
	removeSongDatabase(
		songDatabaseId: ID
	): Boolean
	updateMatiasClient(
		matiasClientId: ID,
		name: String,
		accepted: Boolean
	): UpdateMatiasClientResponse
	createEwDatabase(
		name: String,
		filesystemPath: String,
		songDatabaseId: ID,
		matiasClientId: ID
	): EwDatabase
	updateEwDatabase(
		ewDatabaseId: ID
		name: String
		accepted: Boolean
	): UpdateEwDatabaseResponse
}

schema {
	query: Query,
	mutation: Mutation
}
`;

// languageId: ID
// songId: ID
// language: Language
// tags(offset: Int, limit: Int): TagsConnection
// songDatabases(offset: Int, limit: Int): SongDatabasesConnection
// authorId: Int
// author: Author
// copyrightId: Int
// copyright: Copyright
