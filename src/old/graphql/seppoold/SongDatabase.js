import Variation from "./Variation";

const SongDatabase = `
    type SongDatabase {
        id: ID
        name: String
        variations: [Variation]
    }
`;

const SongDatabasesConnection = `
    type SongDatabasesConnection {
        songDatabases: [SongDatabase]
    }
`;

const CreateSongDatabaseInput = `
    input CreateSongDatabaseInput {
        name: String
    }
`;

const EditSongDatabaseInput = `
    input EditSongDatabaseInput {
        songDatabaseId: ID
        name: String
    }
`;

const SearchSongDatabasesInput = `
    input SearchSongDatabasesInput {
        offset: Int
        limit: Int
        searchWord: String
    }
`;


export default () => [
    SongDatabase,
    Variation,
    SongDatabasesConnection,
    CreateSongDatabaseInput,
    EditSongDatabaseInput,
    SearchSongDatabasesInput
];