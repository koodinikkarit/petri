
import {
    GraphQLString
} from "graphql";

import WakeupResponse from "./WakeupResponse";

export default {
    name: "Wakeup",
    type: WakeupResponse,
    args: {
        id: {
            type: GraphQLString
        }
    }
}