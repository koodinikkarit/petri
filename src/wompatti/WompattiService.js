import {
	DomainService,
	IntType,
	StringType,
	IdType,
	METHOD_TYPES
} from "grpc-graphql-router-tools";

import services from "./service/wompatti_service_grpc_pb";
import messages from "./service/wompatti_service_pb";

import {
	Computer,
	ComputersConnection,
	CreateComputerResponse,
	UpdateComputerResponse,
	RemoveComputerResponse,
	WakeupComputerResponse
} from "./Computer";

import {
	WolInterface,
	WolInterfacesConnection,
	CreateWolInterfaceResponse,
	UpdateWolInterfaceResponse,
	RemoveWolInterfaceResponse
} from "./WolInterface";

import {
	PingResponse
} from "./Ping";

export default new DomainService({
	name: "wompatti",
	messages: messages,
	services: services,
	methods: {
		fetchComputers: {
			name: "searchComputers",
			type: ComputersConnection,
			methodType: METHOD_TYPES.QUERY,
			requestTypeName: "FetchComputersRequest",
			args: {
				offset: {
					type: IntType
				},
				limit: {
					type: IntType
				}
			}
		},
		fetchComputerById: {
			name: "computer",
			returnField: "computer",
			type: Computer,
			methodType: METHOD_TYPES.QUERY,
			requestTypeName: "FetchComputerByIdRequest",
			dataLoader: {
				name: "computerId",
				serviceTypeName: "computerIds",
				returnField: "computers"	
			}
		},
		createComputer: {
			name: "createComputer",
			type: CreateComputerResponse,
			methodType: METHOD_TYPES.MUTATION,
			requestTypeName: "CreateComputerRequest",
			args: {
				name: {
					type: StringType
				}
			}
		},
		updateComputer: {
			name: "updateComputer",
			type: UpdateComputerResponse,
			methodType: METHOD_TYPES.MUTATION,
			requestTypeName: "UpdateComputerRequest",
			args: {
				computerId: {
					type: IdType
				},
				name: {
					type: StringType
				},
				wolInterfaceId: {
					type: IdType
				},
				ip: {
					type: StringType
				},
				mac: {
					type: StringType
				}
			}
		},
		removeComputer: {
			name: "removeComputer",
			type: RemoveComputerResponse,
			methodType: METHOD_TYPES.MUTATION,
			requestTypeName: "RemoveComputerRequest",
			args: {
				computerId: {
					type: IdType
				}
			}
		},
		fetchWolInterfaces: {
			name: "searchWolInterfaces",
			type: WolInterfacesConnection,
			methodType: METHOD_TYPES.QUERY,
			requestTypeName: "FetchWolInterfacesRequest",
			args: {
				offset: {
					type: IntType
				},
				limit: {
					type: IntType
				}
			}
		},
		fetchWolInterfaceById: {
			name: "wolInterface",
			returnField: "wolInterface",
			type: WolInterface,
			methodType: METHOD_TYPES.QUERY,
			requestTypeName: "FetchWolInterfaceByIdRequest",
			dataLoader: {
				name: "wolInterfaceId",
				serviceTypeName: "wolInterfaceIds",
				returnField: "wolInterfaces"
			}
		},
		ping: {
			name: "ping",
			type: PingResponse,
			methodType: METHOD_TYPES.QUERY,
			args: {
				ipAddress: {
					type: StringType
				}
			}
		},
		createWolInterface: {
			name: "createWolInterface",
			type: CreateWolInterfaceResponse,
			methodType: METHOD_TYPES.MUTATION,
			requestTypeName: "CreateWolInterfaceRequest",
			args: {
				ip: {
					type: StringType
				},
				port: {
					type: IntType
				}
			}
		},
		updateWolInterface: {
			name: "updateWolInterface",
			type: UpdateWolInterfaceResponse,
			methodType: METHOD_TYPES.MUTATION,
			requestTypeName: "UpdateWolInterfaceRequest",
			args: {
				wolInterfaceId: {
					type: IdType
				},
				ip: {
					type: StringType
				},
				port: {
					type: IntType
				}
			}
		},
		removeWolInterface: {
			name: "removeWolInterface",
			type: RemoveWolInterfaceResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				wolInterfaceId: {
					type: IdType
				}
			}
		},
		wakeup: {
			name: "wakeup",
			type: WakeupComputerResponse,
			methodType: METHOD_TYPES.MUTATION,
			args: {
				computerId: {
					type: IdType
				}
			}
		}
	}
})