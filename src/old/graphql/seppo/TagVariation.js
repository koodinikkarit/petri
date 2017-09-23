import {
	GraphQLID,
	GraphQLObjectType
} from "graphql";

import Tag from "./Tag";

import Variation from "./Variation";

export default new GraphQLObjectType({
	name: "TagVariation",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		tag: {
			type: Tag 
		},
		variation: {
			type: Variation
		}
	})
});