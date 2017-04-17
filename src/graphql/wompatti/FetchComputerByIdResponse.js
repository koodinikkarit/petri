import {
    GraphQLObjectType
} from "graphql";

import Computer from "./Computer";

export default new GraphQLObjectType({
    name: "FetchComputerByIdResponse",
    fields: () => ({
        computer: {
            type: Computer
        }
    })
})