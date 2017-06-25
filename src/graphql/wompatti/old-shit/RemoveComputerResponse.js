import {
	GraphQLObjectType,
	GraphQLInt
} from "graphql";

export default new GraphQLObjectType({
	name: "RemoveComputerResponse",
	fields: () => ({
		state: {
			type: GraphQLInt
		}
	})
})