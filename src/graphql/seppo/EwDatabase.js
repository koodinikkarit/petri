import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: "EwDatabase",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		key: {
			type: GraphQLString
		}
	})
});