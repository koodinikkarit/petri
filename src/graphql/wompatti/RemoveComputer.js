
import {
    GraphQLString
} from "graphql";

import RemoveComputerResponse from "./RemoveComputerResponse";

export default {
    name: "RemoveComputer",
    type: RemoveComputerResponse,
    args: {
        id: {
            type: GraphQLString
        }
    }
}