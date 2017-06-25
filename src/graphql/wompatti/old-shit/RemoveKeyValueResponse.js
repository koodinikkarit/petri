import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: "RemoveKeyValueResponse",
	fields: () => ({
		state: {
			type: GraphQLString
		}
	})
})