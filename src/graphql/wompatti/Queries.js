import {
	GraphQLID
} from "graphql";


import WolInterface from "./WolInterface";
import {
	WolInterfacesConnection
} from "./OtherWolInterfaceTypes";

export default {
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