import {
	GraphQLObjectType,
	GraphQLInt
} from "graphql";

import Computer from "./Computer";

export default new GraphQLObjectType({
	name: "EditComputerResponse",
	fields: () => ({
		state: {
			type: GraphQLInt
		},
		computer: {
			type: Computer
		}
	})
})