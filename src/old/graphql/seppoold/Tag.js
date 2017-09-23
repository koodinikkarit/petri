

const Tag = `
	type Tag {
		id: ID
		name: String
	}
`;

const CreateTagInput = `
	input CreateTagInput {
		name: String
	}
`;

const EditTagInput = `
	input EditTagInput {
		tagId: ID
		name: String
	}
`;

const SearchTagsInput = `
	input SearchTagsInput {
		id: ID
	}
`;

const SearchTagsOutput = `
	type SearchTagsOutput {
		tags: [Tag]
		maxTags: Int
	}
`;


export default () => [
	CreateTagInput,
	EditTagInput,
	SearchTagsInput,
	SearchTagsOutput,
	Tag
];