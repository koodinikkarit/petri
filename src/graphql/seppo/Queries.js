
import Variation from "./Variation";
import SongDatabase from "./SongDatabase";
import EwDatabase from "./EwDatabase";

const SeppoQuery = `
	extend type Query {
		variation(variationId: ID): Variation
		searchVariations(params: SearchVariationsInput): SearchVariationsOutput
		songDatabase(songDatabaseId: ID): SongDatabase
		searchSongDatabases(params: SearchSongDatabasesInput): SongDatabasesConnection
		ewDatabase(ewDatabase: ID): EwDatabase
		searchEwDatabases(params: SearchEwDatabasesInput): EwDatabasesConnection
	}
`;

export default () => [
	Variation,
	SongDatabase,
	EwDatabase,
	SeppoQuery	
];