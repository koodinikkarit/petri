import {
	Tag,
	TagsConnection
} from "./Tag";

const messages = require("./service/seppo_service_pb");

describe("Tag gettters", () => {
	var tagMessage = new messages.Tag();
	tagMessage.setId(5);
	tagMessage.setName("testi");

	var tag = new Tag({}, tagMessage);

	it("Should return id", () => {
		expect(tag.id).toBe(5);
	});

	it("Should return name", () => {
		expect(tag.name).toBe("testi");
	});
});

describe("TagsConnection getters", () => {
	var tagMessage = new messages.Tag();
	tagMessage.setId(5);
	tagMessage.setName("testi");

	var tagsConnectionMessage = new messages.TagsConnection();
	tagsConnectionMessage.setTagsList([tagMessage]);
	tagsConnectionMessage.setMaxtags(10);

	var tagsConnection = new TagsConnection({}, tagsConnectionMessage);

	it("Should get maxTags", () => {
		expect(tagsConnection.maxTags).toBe(10);
	});

	it("Should get tags", () => {
		var tags = tagsConnection.tags;
		expect(tags.length).toBe(1);
	});
});