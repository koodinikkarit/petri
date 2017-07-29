
import Variation from "./Variation";

console.log("variation", Variation);

const SeppoQuery = `
	extend type Query {
		variation(variationId: ID): Variation
		searchVariations(params: SearchVariationsInput): SearchVariationsOutput
	}
`;

export default () => [
	Variation,
	SeppoQuery	
];