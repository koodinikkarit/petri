

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