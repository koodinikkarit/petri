import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList
} from "graphql";

import Computer from "./Computer";

export const CreateComputerInput = new GraphQLInputObjectType({
	name: "CreateComputerInput",
	fields: () => ({
		name: {
			type: GraphQLString
		}
	})
});

export const UpdateComputerInput = new GraphQLInputObjectType({
	name: "UpdateComputerInput",
	fields: () => ({
		computerId: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		}
	})
});

export const ComputersConnection = new GraphQLObjectType({
	name: "ComputersConnection",
	fields: () => ({
		computers: {
			type: new GraphQLList(Computer)
		}
	})
});

export const SearchComputersInput = new GraphQLInputObjectType({
	name: "SearchComputersInput",
	fields: () => ({
		offset: {
			type: GraphQLID
		},
		limit: {
			type: GraphQLID
		}
	})
});