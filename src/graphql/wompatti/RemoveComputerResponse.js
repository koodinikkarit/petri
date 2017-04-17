import {
    GraphQLObjectType,
    GraphQLBoolean
} from "graphql";

export default new GraphQLObjectType({
    name: "RemoveComputerResponse",
    fields: () => ({
        removed: {
            type: GraphQLBoolean
        }
    })
})