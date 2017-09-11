import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} from "graphql";

import WolInterface from "./WolInterface";

export default new GraphQLObjectType({
	name: "Computer",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		wolInterface: {
			type: WolInterface
		}
	})
});