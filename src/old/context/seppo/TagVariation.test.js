import {
	TagVariation
} from "./TagVariation";

const messages = require("./service/seppo_service_pb");

describe("Test tagvariation getters", () => {
	var tagVariationMessage = new messages.TagVariation();
	tagVariationMessage.setId(1);
	tagVariationMessage.setTagid(4);
	tagVariationMessage.setVariationid(6);

	var tagVariation = new TagVariation({}, tagVariationMessage);

	it("Should get id", () => {
		expect(tagVariation.id).toBe(1);
	});

	it("Should get tagId", () => {
		expect(tagVariation.tagId).toBe(4);
	});

	it("Should get variationId", () => {
		expect(tagVariation.variationId).toBe(6);
	});
});