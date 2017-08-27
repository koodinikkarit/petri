
import Variation from "./Variation";
import SongDatabase from "./SongDatabase";
import EwDatabase from "./EwDatabase";
import Tag from "./Tag";
import Language from "./Language";

const SeppoQuery = `
	extend type Query {
		variation(variationId: ID): Variation
		searchVariations(params: SearchVariationsInput): SearchVariationsOutput
		songDatabase(songDatabaseId: ID): SongDatabase
		searchSongDatabases(params: SearchSongDatabasesInput): SongDatabasesConnection
		ewDatabase(ewDatabaseId: ID!): EwDatabase
		searchEwDatabases(params: SearchEwDatabasesInput): EwDatabasesConnection
		songDatabaseVariations(songDatabaseId: ID): [Variation]
		tag(tagId: ID): Tag

	}
`;

export default () => [
	Variation,
	SongDatabase,
	EwDatabase,
	Tag,
	Language,
	SeppoQuery	
];