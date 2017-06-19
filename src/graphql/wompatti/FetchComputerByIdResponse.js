import {
	GraphQLObjectType,
	GraphQLInt
} from "graphql";

import Computer from "./Computer"

export default new GraphQLObjectType({
	name: "FetchComputerByIdResponse",
	fields: () => ({
		state: {
			type: GraphQLInt
		},
		computer: {
			type: Computer
		}
	})
})