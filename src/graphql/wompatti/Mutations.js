import {
	GraphQLBoolean,
	GraphQLID,
	GraphQLString
} from "graphql";

import WolInterface from "./WolInterface";

export default {
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