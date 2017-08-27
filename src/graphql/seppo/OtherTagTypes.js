import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLInt
} from "graphql";

import Tag from "./Tag";

export const TagsConnection = new GraphQLObjectType({
	name: "TagsConnection",
	fields: () => ({
		tags: {
			type: new GraphQLList(Tag)
		},
		maxTags: {
			type: GraphQLInt
		}
	})
});

export const SearchTagsInput = new GraphQLInputObjectType({
	name: "SearchTagsInput",
	fields: () => ({
		id: {
			type: GraphQLID
		}
	})
});

export const CreateTagInput = new GraphQLInputObjectType({
	name: "CreateTagInput",
	fields: () => ({
		name: {
			type: GraphQLString
		}
	})
});

export const EditTagInput = new GraphQLInputObjectType({
	name: "EditTagInput",
	fields: () => ({
		tagId: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		}
	})
});
