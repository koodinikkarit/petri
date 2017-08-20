
export class EwDatabase {
    constructor(context, model) {
        Object.defineProperties(this, {
            "id": {
                get: () => model.getId()
            },
            "name": {
                get: () => model.getName()
            },
            "key": {
                get: () => model.getKey()
            },
            "songDatabaseId": {
                get: () => model.getSongDatabaseid()
            },
            "songDatabase": {
                get: () => context.fetchSongDatabaseById(model.getSongdatabaseid())
            }
        });
    }
}

export class EwDatabasesConnection {
    constructor(context, model) {
        var ewDatabases = model.getEwdatabasesList().map(p => new EwDatabase(this, p))
        Object.defineProperties(this, {
            "ewDatabases": {
                get: () => ewDatabases
            }
        })
    }
}