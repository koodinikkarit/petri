

const Variation = `
	type Variation {
		id: ID
		name: String
		text: String
		versiont: Int
	}
`;

const CreateVariationInput = `
	input CreateVariationInput {
		name: String
		text: String
	}
`;

const EditVariationInput = `
	input EditVariationInput {
		variationId: ID
		name: String
		text: String
		songId: ID
		version: Int
	}
`;

const SearchVariationsInput = `
	input SearchVariationsInput {
		searchWord: String
		songDatabaseId: ID
		songDatabaseFilterId: ID
	}
`;

const SearchVariationsOutput = `
	type SearchVariationsOutput {
		variations: [Variation]
	}
`;

export default () => [
	Variation,
	CreateVariationInput,
	EditVariationInput,
	SearchVariationsInput,
	SearchVariationsOutput
];