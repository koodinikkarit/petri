
import Variation from "./Variation";
import SongDatabase from "./SongDatabase";
import EwDatabase from "./EwDatabase";

const SeppoQuery = `
	extend type Query {
		variation(variationId: ID): Variation
		searchVariations(params: SearchVariationsInput): SearchVariationsOutput
		songDatabase(songDatabaseId: ID): SongDatabase
		searchSongDatabases(params: SearchSongDatabasesInput): SongDatabasesConnection
		ewDatabase(ewDatabaseId: ID!): EwDatabase
		searchEwDatabases(params: SearchEwDatabasesInput): EwDatabasesConnection
		songDatabaseVariations(songDatabaseId: ID): [Variation]
	}
`;

export default () => [
	Variation,
	SongDatabase,
	EwDatabase,
	SeppoQuery	
];