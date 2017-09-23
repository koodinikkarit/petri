import {
	DomainEntity,
	ListType,
	IntType,
	BooleanType
} from "grpc-graphql-router-tools";

import Variation from "./Variation";
import VariationText from "./VariationText";

export const VariationsConnection = new DomainEntity({
	name: "VariationsConnection",
	fields: {
		variations: {
			type: new ListType(Variation)
		},
		maxVariations: {
			type: IntType
		}
	}
});

export const CreateVariationResponse = new DomainEntity({
	name: "CreateVariationResponse",
	fields: {
		variation: {
			type: Variation
		},
		variationText: {
			type: VariationText
		}
	}
});

export const UpdateVariationResponse = new DomainEntity({
	name: "UpdateVariationResponse",
	fields: {
		variation: {
			type: Variation
		},
		success: {
			type: BooleanType
		}
	}
});

export const RemoveVariationResponse = new DomainEntity({
	name: "RemoveVariationResponse",
	fields: {
		success: {
			type: BooleanType
		}
	}
});