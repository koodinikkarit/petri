import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from "graphql";

export default new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: {
			type: GraphQLString
		},
		username: {
			type: GraphQLString
		}
	})
})