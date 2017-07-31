
import Variation from "./Variation";
import SongDatabase from "./SongDatabase";
import EwDatabase from "./EwDatabase";

const SeppoMutation = `
	extend type Mutation {
		createVariation(name: String): Variation
		editVariation(params: EditVariationInput): Variation
		createSongDatabase(name: String): SongDatabase
		editSongDatabase(params: EditSongDatabaseInput): SongDatabase
		removeSongDatabase(id: ID): Boolean
		createEwDatabase(params: CreateEwDatabaseInput): EwDatabase
		removeEwDatabase(ewDatabaseId: ID): Boolean
	}
`;

export default () => [
	SeppoMutation,
	Variation
];