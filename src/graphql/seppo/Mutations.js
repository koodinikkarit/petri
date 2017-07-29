
import Variation from "./Variation";

const SeppoMutation = `
	extend type Mutation {
		createVariation(name: String): Variation
		editVariation(params: EditVariationInput): Variation
	}
`;

export default () => [
	SeppoMutation,
	Variation
];