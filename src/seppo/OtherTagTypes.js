
import {
	DomainEntity,
	ListType,
	IntType,
	BooleanType
} from "grpc-graphql-router-tools";

import Tag from "./Tag";

export const TagsConnection = new DomainEntity({
	name: "TagsConnection",
	fields: () => ({
		maxTags: {
			type: IntType
		},
		tags: {
			type: new ListType(Tag)
		}
	})
});

export const CreateTagResponse = new DomainEntity({
	name: "CreateTagResponse",
	fields: () => ({
		tag: {
			type: Tag
		}
	})
});

export const UpdateTagResponse = new DomainEntity({
	name: "UpdateTagResponse",
	fields: () => ({
		success: {
			type: BooleanType
		},
		tag: {
			type: Tag
		}
	})
});

export const RemoveTagResponse = new DomainEntity({
	name: "RemoveTagResponse",
	fields: () => ({
		success: {
			type: BooleanType
		}
	})
});