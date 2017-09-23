

export class SongDatabaseVariation {
    constructor(context, model) {
        Object.defineProperties(this, {
            "id": {
                get: () => model.getId()
            },
            "songDatabase": {
                get: () => context.fetchSongDatabaseById(model.getSongdatabaseid())
            },
            "variation": {
                get: () => context.fetchVariationById(model.getVariationid())
            }
        })
    }
}