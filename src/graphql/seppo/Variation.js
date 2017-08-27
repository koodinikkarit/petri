import {
	GraphQLFloat,
	GraphQLInt,
	GraphQLID,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLList
} from "graphql";

export default new GraphQLObjectType({
	name: "Variation",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		text: {
			type: GraphQLString
		},
		version: {
			type: GraphQLInt
		}
	})
});

// export const CreateVariationInput = new GraphQLInputObjectType({
// 	name: "CreateVariationInput",
// 	fields: () => ({
// 		name: {
// 			type: GraphQLString
// 		},
// 		text: {
// 			type: GraphQLString
// 		}
// 	})
// });

// export const EditVariationInput = new GraphQLInputObjectType({
// 	name: "EditVariationInput",
// 	fields: () => ({
// 		variationId: {
// 			type: GraphQLID
// 		},
// 		name: {
// 			type: GraphQLString
// 		},
// 		text: {
// 			type: GraphQLString
// 		},
// 		songId: {
// 			type: GraphQLID
// 		}
// 	})
// });

// export const SearchVariationsInput = new GraphQLInputObjectType({
// 	name: "SearchVariationsInput",
// 	fields: () => ({
// 		searchWord: {
// 			type: GraphQLString
// 		},
// 		songDatabaseId: {
// 			type: GraphQLID
// 		},
// 		songDatabaseFilterId: {
// 			type: GraphQLID
// 		}
// 	})
// });

// export const SearchVariationsOutput = new GraphQLObjectType({
// 	name: "SearchVariationsOutput",
// 	fields: () => ({
// 		variations: {
// 			type: new GraphQLList(Variation)
// 		},
// 		maxVariations: {
// 			type: GraphQLInt
// 		}
// 	})
// });

