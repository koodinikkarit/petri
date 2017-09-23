import {
	DomainEntity,
	IdType,
	StringType,
	ListType,
	IntType,
	BooleanType
} from "grpc-graphql-router-tools";

import {
	WolInterface
} from "./WolInterface";

export const Computer = new DomainEntity({
	name: "Computer",
	fields: {
		id: {
			type: IdType
		},
		name: {
			type: StringType
		},
		ip: {
			type: StringType
		},
		mac: {
			type: StringType
		},
		wolInterfaceId: {
			type: IdType
		},
		wolInterface: {
			type: WolInterface,
			inhertedArgs: {
				wolInterfaceId: "wolInterfaceId"
			},
			serviceMethod: "fetchWolInterfaceById"		
		}
	}
});

export const ComputersConnection = new DomainEntity({
	name: "ComputersConnection",
	fields: {
		computers: {
			type: new ListType(Computer)
		},
		maxComputers: {
			type: IntType
		}
	}
});

export const CreateComputerResponse = new DomainEntity({
	name: "CreateComputerResponse",
	fields: {
		computer: {
			type: Computer
		}
	}
});

export const UpdateComputerResponse = new DomainEntity({
	name: "UpdateComputerResponse",
	fields: {
		computer: {
			type: Computer
		},
		success: {
			type: BooleanType
		}
	}
});

export const RemoveComputerResponse = new DomainEntity({
	name: "RemoveComputerResponse",
	fields: {
		success: {
			type: BooleanType
		}
	}
});

export const WakeupComputerResponse = new DomainEntity({
	name: "WakeupComputerResponse",
	fields: {
		success: {
			type: BooleanType
		}
	}
});