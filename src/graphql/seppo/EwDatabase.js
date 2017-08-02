
import SongDatabase from "./SongDatabase";

const EwDatabase = `
    type EwDatabase {
        id: ID
        name: String
        songDatabase: SongDatabase
    }
`;

const EwDatabasesConnection = `
    type EwDatabasesConnection {
        ewDatabases: [EwDatabase]
    }
`;

const CreateEwDatabaseInput = `
    input CreateEwDatabaseInput {
        name: String
        songDatabaseId: ID
    }
`;

const SearchEwDatabasesInput = `
    input SearchEwDatabasesInput {
        offset: Int
        limit: Int
    }
`;

export default () => [
    EwDatabase,
    EwDatabasesConnection,
    CreateEwDatabaseInput,
    SearchEwDatabasesInput
];