
import SongDatabase from "./SongDatabase";

const EwDatabase = `
    type EwDatabase {
        id: ID
        name: String
        key: String
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

const EditEwDatabaseInput = `
    input EditEwDatabaseInput {
        ewDatabaseId: ID
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
    EditEwDatabaseInput,
    SearchEwDatabasesInput
];