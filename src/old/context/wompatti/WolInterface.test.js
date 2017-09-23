const messages = require("./service/wompatti_service_pb");

import {
	WolInterface,
	WolInterfacesConnection
} from "./WolInterface";

describe("Tests wolinterface getters", () => {
	const wolInterfaceMessage = new messages.WolInterface();
	wolInterfaceMessage.setId(5);
	wolInterfaceMessage.setEthernetinterfaceid(5);
	wolInterfaceMessage.setMac("asfg");

	const wolInterface = new WolInterface({}, wolInterfaceMessage);

	it("Should get id", () => {
		expect(wolInterface.id).toBe(5);
	});

	it("Should get ethernetInterfaceId", () => {
		expect(wolInterface.ethernetInterfaceId).toBe(5);
	});

	it("Should get mac", () => {
		expect(wolInterface.mac).toBe("asfg");
	});
});

describe("Tests wolinterfacesconnection getters", () => {
	const wolInterfaceMessage = new messages.WolInterface();
	wolInterfaceMessage.setId(5);
	wolInterfaceMessage.setEthernetinterfaceid(5);
	wolInterfaceMessage.setMac("asfg");

	const wolInterfacesConnectionMessage = new messages.FetchWolInterfacesResponse();
	wolInterfacesConnectionMessage.setWolinterfacesList([
		wolInterfaceMessage
	]);

	const wolInterfacesConnection = new WolInterfacesConnection(
		{},
		wolInterfacesConnectionMessage
	);

	it("Should have one wolinterface", () => {
		expect(wolInterfacesConnection.wolInterfaces.length).toBe(1);
	});

	it("Should get mac", () => {
		expect(wolInterfacesConnection.wolInterfaces[0].mac).toBe("asfg");
	});
});