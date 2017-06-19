import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

import WolInterface from "./WolInterface";

export default new GraphQLObjectType({
	name: "CreateWolInterfaceResponse",
	fields: () => ({
		state: {
			type: GraphQLString
		},
		wolInterface: {
			type: WolInterface
		}
	})
})