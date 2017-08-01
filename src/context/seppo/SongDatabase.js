

export class SongDatabase {
    constructor(context, model) {
        Object.defineProperties(this, {
            "id": {
                get: () => model.getId()
            },
            "name": {
                get: () => model.getName()
            }
        })
    }
}

export class SongDatabasesConnection {
    constructor(context, model) {
        var songDatabases = model.getEdgesList().map(p => new SongDatabase(this, p.getNode()));
        Object.defineProperties(this, {
            "songDatabases": {
                get: () => songDatabases
            }
        })
    }
}