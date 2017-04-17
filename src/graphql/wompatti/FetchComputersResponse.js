import {
    GraphQLObjectType,
    GraphQLList
} from "graphql";

import Computer from "./Computer";

export default new GraphQLObjectType({
    name: "FetchComputersResponse",
    fields: () => ({
        computers: {
            type: new GraphQLList(Computer)
        }
    })
})