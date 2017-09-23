import {
	GraphQLBoolean,
	GraphQLID,
	GraphQLString
} from "graphql";

import Computer from "./Computer";
import WolInterface from "./WolInterface";

import {
	CreateComputerInput,
	UpdateComputerInput
} from "./OtherComputerTypes";

export default {
	createComputer: {
		name: "CreateComputer",
		type: Computer,
		args: {
			params: {
				type: CreateComputerInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.wompatti.createComputer(params || {})
	},
	updateComputer: {
		name: "UpdateComputer",
		type: Computer,
		args: {
			params: {
				type: UpdateComputerInput
			}
		},
		resolve: (
			obj,
			{
				params
			},
			context
		) => context.wompatti.updateComputer(params || {})
	},
	removeComputer: {
		name: "RemoveComputer",
		type: GraphQLBoolean,
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
		) => context.wompatti.removeComputer(computerId)
	},
	createWolInterface: {
		name: "CreateWolInterface",
		type: WolInterface,
		args: {
			ethernetInterfaceId: {
				type: GraphQLID
			},
			mac: {
				type: GraphQLString
			}
		},
		resolve: (
			obj,
			{
				ethernetInterfaceId,
				mac
			},
			context
		) => context.wompatti.createWolInterface(
			ethernetInterfaceId,
			mac
		)
	},
	editWolInterface: {
		name: "EditWolInterface",
		type: WolInterface,
		args: {
			wolInterfaceId: {
				type: GraphQLID
			},
			ethernetInterfaceId: {
				type: GraphQLID
			},
			mac: {
				type: GraphQLString
			}
		},
		resolve: (
			obj,
			{
				wolInterfaceId,
				ethernetInterfaceId,
				mac
			},
			context
		) => context.wompatti.editWolInterface({
			wolInterfaceId,
			ethernetInterfaceId,
			mac
		})
	},
	removeWolInterface: {
		name: "RemoveWolInterface",
		type: GraphQLBoolean,
		args: {
			wolInterfaceId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				wolInterfaceId
			},
			context
		) => context.wompatti.removeWolInterface(wolInterfaceId)
	},
	wakeup: {
		name: "Wakeup",
		type: GraphQLBoolean,
		args: {
			wolInterfaceId: {
				type: GraphQLID
			}
		},
		resolve: (
			obj,
			{
				wolInterfaceId
			},
			context
		) => context.wompatti.wakeup(wolInterfaceId)
	}
};