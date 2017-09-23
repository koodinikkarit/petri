import SongDatabase from "./SongDatabase";
import Variation from "./Variation";

const SongDatabaseVariation = `
    type SongDatabaseVariation {
        id: ID
        songDatabase: SongDatabase
        variation: Variation
    }
`;

export default () => [
    SongDatabaseVariation,
    SongDatabase,
    Variation
];