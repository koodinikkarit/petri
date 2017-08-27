
const Language = `
	type Language {
		id: ID
		name: String
	}
`;

const CreateLanguageInput = `
	input CreateLanguageInput {
		name: String
	}
`;

const EditLanguageInput = `
	input EditLanguageInput {
		languageId: ID
		name: String
	}
`;

const SearchLanguagesInput = `
	input SearchLanguagesInput {

	}
`;

const SearchLanguagesOutput = `
	type SearchLanguagesOutput {
		Languages: [Language]
		maxLanguages: Int
	}
`;


export default () => [
	CreateLanguageInput,
	EditLanguageInput,
	SearchLanguagesInput,
	SearchLanguagesOutput,
	Language
];