import {
	DomainEntity,
	IdType,
	StringType,
	IntType,
	ListType,
	BooleanType
} from "grpc-graphql-router-tools";

export const Author = new DomainEntity({
	name: "Author",
	fields: () => ({
		id: {
			type: IdType 
		},
		name: {
			type: StringType
		}
	})
});

export const AuthorsConnection = new DomainEntity({
	name: "AuthorsConnection",
	fields: () => ({
		maxAuthors: {
			type: IntType
		},
		authors: {
			type: new ListType(Author)
		}
	})
});

export const CreateAuthorResponse = new DomainEntity({
	name: "CreateAuthorResponse",
	fields: () => ({
		author: {
			type: Author
		}
	})
});

export const UpdateAuthorResponse = new DomainEntity({
	name: "UpdateAuthorResponse",
	fields: () => ({
		success: {
			type: BooleanType
		},
		author: {
			type: Author
		}
	})
});

export const RemoveAuthorResponse = new DomainEntity({
	name: "RemoveAuthorResponse",
	fields: () => ({
		success: {
			type: BooleanType
		}
	})
});