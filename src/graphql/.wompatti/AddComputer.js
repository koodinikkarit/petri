
import {
    GraphQLString
} from "graphql";

import AddComputerResponse from "./AddComputerResponse";

export default {
    name: "AddComputer",
    type: AddComputerResponse,
    args: {
        name: {
            type: GraphQLString
        },
        ip: {
            type: GraphQLString
        },
        mac: {
            type: GraphQLString
        }
    }
}