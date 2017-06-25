
export default class {
    constructor(context, model) {
        Object.defineProperties(this, {
            "hasNextPage": {
                get: () => model.getHasnextpage()
            },
            "hasPreviousPage": {
                get: () => model.getHaspreviouspage()
            },
            "startCursor": {
                get: () => model.getStartcursor()
            },
            "endCursor": {
                get: () => model.getEndcursor()
            }
        })
    }
}