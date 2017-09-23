import {
	DomainEntity,
	IdType,
	StringType,
	IntType,
	ListType,
	BooleanType
} from "grpc-graphql-router-tools";

export const WolInterface = new DomainEntity({
	name: "WolInterface",
	fields: {
		id: {
			type: IdType
		},
		ip: {
			type: StringType
		},
		port: {
			type: IntType
		}
	}
});

export const WolInterfacesConnection = new DomainEntity({
	name: "WolInterfacesConnection",
	fields: {
		wolInterfaces: {
			type: new ListType(WolInterface)
		},
		maxWolinterfaces: {
			type: IntType
		}
	}
});

export const CreateWolInterfaceResponse = new DomainEntity({
	name: "CreateWolInterfaceResponse",
	fields: {
		wolInterface: {
			type: WolInterface
		}
	}
});

export const UpdateWolInterfaceResponse = new DomainEntity({
	name: "UpdateWolInterfaceResponse",
	fields: {
		wolInterface: {
			type: WolInterface
		},
		success: {
			type: BooleanType
		}
	}
});

export const RemoveWolInterfaceResponse = new DomainEntity({
	name: "RemoveWolInterfaceResponse",
	fields: {
		success: {
			type: BooleanType
		}
	}
})