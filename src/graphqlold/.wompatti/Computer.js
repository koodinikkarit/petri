import {
    GraphQLObjectType,
    GraphQLString
} from "graphql";

export default new GraphQLObjectType({
    name: "Computer",
    fields: () => ({
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
    })
})