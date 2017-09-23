import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} from "graphql";

export default new GraphQLObjectType({
	name: "Language",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		}
	})
});