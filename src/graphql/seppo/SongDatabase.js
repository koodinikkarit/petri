
const SongDatabase = `
    type SongDatabase {
        id: ID
        name: String
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
    }
`;


export default () => [
    SongDatabase,
    SongDatabasesConnection,
    CreateSongDatabaseInput,
    EditSongDatabaseInput,
    SearchSongDatabasesInput
];