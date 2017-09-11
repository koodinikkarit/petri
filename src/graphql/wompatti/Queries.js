import {
	GraphQLID
} from "graphql";

import Computer from "./Computer";
import WolInterface from "./WolInterface";

import {
	ComputersConnection,
	SearchComputersInput
} from "./OtherComputerTypes";
import {
	WolInterfacesConnection
} from "./OtherWolInterfaceTypes";

export default {
	searchComputers: {
		name: "SearchComputers",
		type: ComputersConnection,
		args: {
			params: {
				type: SearchComputersInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.wompatti.fetchComputers(params || {})
	},
	computer: {
		name: "Computer",
		type: Computer,
		args: {
			computerId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				computerId
			},
			context
		) => context.wompatti.fetchComputerById(computerId)
	},
	wolInterface: {
		name: "WolInterface",
		type: WolInterface,
		args: {
			wolInterfaceId: {
				type:GraphQLID
			}
		},
		resolve: (
			obj,
			{
				wolInterfaceId
			},
			context
		) => context.wompatti.fetchWolInterfaceById(wolInterfaceId)
	},
	wolInterfaces: {
		name: "WolInterfaces",
		type: WolInterfacesConnection,
		args: {
			
		},
		resolve: (
			obj,
			p,
			context
		) => context.wompatti.fetchWolInterfaces()
	}
};