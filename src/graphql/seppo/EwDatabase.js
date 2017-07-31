

const EwDatabase = `
    type EwDatabase {
        id: ID
        songDatabaseId: ID
    }
`;

const EwDatabasesConnection = `
    type EwDatabasesConnection {
        ewDatabases: [EwDatabase]
    }
`;

const CreateEwDatabaseInput = `
    input CreateEwDatabaseInput {
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