import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: "RemoveDeviceResponse",
	fields: () => ({
		state: {
			type: GraphQLString
		}
	})
})