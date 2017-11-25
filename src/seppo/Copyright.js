import {
	DomainEntity,
	IdType,
	StringType,
	IntType,
	ListType,
	BooleanType
} from "grpc-graphql-router-tools";

export const Copyright = new DomainEntity({
	name: "Copyright",
	fields: () => ({
		id: {
			type: IdType 
		},
		name: {
			type: StringType
		}
	})
});

export const CopyrightsConnection = new DomainEntity({
	name: "CopyrightsConnection",
	fields: () => ({
		maxCopyrights: {
			type: IntType
		},
		copyrights: {
			type: new ListType(Copyright)
		}
	})
});

export const CreateCopyrightResponse = new DomainEntity({
	name: "CreateCopyrightResponse",
	fields: () => ({
		copyright: {
			type: Copyright
		}
	})
});

export const UpdateCopyrightResponse = new DomainEntity({
	name: "UpdateCopyrightResponse",
	fields: () => ({
		success: {
			type: BooleanType
		},
		copyright: {
			type: Copyright
		}
	})
});

export const RemoveCopyrightResponse = new DomainEntity({
	name: "RemoveCopyrightResponse",
	fields: () => ({
		success: {
			type: BooleanType
		}
	})
});