
import {
	Language,
	LanguagesConnection
} from "./Language";

const messages = require("./service/seppo_service_pb");

describe("Language getters", () => {
	var languageMessage = new messages.Language();
	languageMessage.setId(5);
	languageMessage.setName("suomi");

	var language = new Language({}, languageMessage);

	it("Should get id", () => {
		expect(language.id).toBe(5);
	});

	it("Should get name", () => {
		expect(language.name).toBe("suomi");
	});
});

describe("LanguagesConnection getters", () => {
	var languageMessage = new messages.Language();
	languageMessage.setId(5);
	languageMessage.setName("suomi");

	var languagesConnectionMessage = new messages.LanguagesConnection();
	languagesConnectionMessage.setLanguagesList([languageMessage]);
	languagesConnectionMessage.setMaxlanguages(10);

	var languagesConnection = new LanguagesConnection({}, languagesConnectionMessage);

	it("Should get maxLanguages", () => {
		expect(languagesConnection.maxLanguages).toBe(10);
	});
	
	it("Should get languages", () => {
		var languages = languagesConnection.languages;
		expect(languages.length).toBe(1);
	});
});