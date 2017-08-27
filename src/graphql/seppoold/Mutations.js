
import Variation from "./Variation";
import SongDatabase from "./SongDatabase";
import EwDatabase from "./EwDatabase";
import SongDatabaseVariation from "./SongDatabaseVariation";

const SeppoMutation = `
	extend type Mutation {
		createVariation(params: CreateVariationInput): Variation
		editVariation(params: EditVariationInput): Variation
		removeVariation(variationId: ID): Boolean
		createSongDatabase(params: CreateSongDatabaseInput): SongDatabase
		editSongDatabase(params: EditSongDatabaseInput): SongDatabase
		removeSongDatabase(songDatabaseId: ID): Boolean
		createEwDatabase(params: CreateEwDatabaseInput): EwDatabase
		editEwDatabase(params: EditEwDatabaseInput): EwDatabase
		removeEwDatabase(ewDatabaseId: ID): Boolean
		addVariationToSongDatabase(songDatabaseId: ID, variationId: ID): SongDatabaseVariation
		removeVariationFromSongDatabase(songDatabaseId: ID, variationId: ID): Boolean
	}
`;

export default () => [
	SeppoMutation,
	Variation,
	SongDatabase,
	EwDatabase,
	SongDatabaseVariation
];