import {
	GraphQLID,
	GraphQLObjectType
} from "graphql";

export default new GraphQLObjectType({
	name: "EthernetInterface",
	fields: () => ({
		id: {
			type: GraphQLID
		}
	})
});