import {
    GraphQLObjectType
} from "graphql";

import Computer from "./Computer";

export default new GraphQLObjectType({
    name: "AddComputerResponse",
    fields: () => ({
        computer: {
            type: Computer
        }
    })
})