import {
	DomainEntity,
	ListType,
	IntType,
	BooleanType,
	IdType,
	StringType
} from "grpc-graphql-router-tools";

export const Tag = new DomainEntity({
	name: "Tag",
	fields: () => ({
		id: {
			type: IdType
		},
		name: {
			type: StringType
		}
	})
});

export const TagsConnection = new DomainEntity({
	name: "TagsConnection",
	fields: () => ({
		id: {
			type: IdType
		},
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