import {
	DomainEntity,
	IdType,
	StringType,
	IntType,
	ListType,
	BooleanType
} from "grpc-graphql-router-tools";

export const Language = new DomainEntity({
	name: "Language",
	fields: () => ({
		id: {
			type: IdType
		},
		name: {
			type: StringType
		}
	})
});

export const LanguagesConnection = new DomainEntity({
	name: "LanguageConnection",
	fields: () => ({
		maxLanguages: {
			type: IntType
		},
		languages: {
			type: new ListType(Language)
		}
	})
});

export const CreateLanguageResponse = new DomainEntity({
	name: "CreateLanguageResponse",
	fields: () => ({
		language: {
			type: Language
		}
	})
});

export const UpdateLanguageResponse = new DomainEntity({
	name: "UpdateLanguageResponse",
	fields: () => ({
		success: {
			type: BooleanType
		},
		language: {
			type: Language
		}
	})
});

export const RemoveLanguageResponse = new DomainEntity({
	name: "RemoveLanguageResponse",
	fields: () => ({
		success: {
			type: BooleanType
		}
	})
});
