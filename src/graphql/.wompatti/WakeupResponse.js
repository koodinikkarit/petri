import {
    GraphQLObjectType,
    GraphQLBoolean
} from "graphql";

export default new GraphQLObjectType({
    name: "WakeupResponse",
    fields: () => ({
        success: {
            type: GraphQLBoolean
        }
    })
})