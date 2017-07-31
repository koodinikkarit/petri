
export class EwDatabase {
    constructor(context, model) {
        Object.defineProperties(this, {
            "id": {
                get: () => model.getId()
            },
            "songDatabaseId": {
                get: () => model.getSongDatabaseId()
            }
        });
    }
}