
import {
    GraphQLString
} from "graphql";

import EditComputerResponse from "./EditComputerResponse";

export default {
    name: "EditComputer",
    type: EditComputerResponse,
    args: {
        id: {
            type: GraphQLString
        },
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

