import {
	SongDatabaseTag
} from "./SongDatabaseTag";

const messages = require("./service/seppo_service_pb");

describe("Tests SongDatabaseTag getters", () => {
	var songDatabaseTagMessage = new messages.SongDatabaseTag();
	songDatabaseTagMessage.setId(1);
	songDatabaseTagMessage.setTagid(4);
	songDatabaseTagMessage.setSongdatabaseid(6);

	var songDatabaseTag = new SongDatabaseTag({}, songDatabaseTagMessage);

	it("Should get id", () => {
		expect(songDatabaseTag.id).toBe(1);
	});

	it("Should get tagId", () => {
		expect(songDatabaseTag.tagId).toBe(4);
	});

	it("Should get songDatabaseId", () => {
		expect(songDatabaseTag.songDatabaseId).toBe(6);
	});
});