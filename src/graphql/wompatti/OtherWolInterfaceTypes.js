import {
	GraphQLObjectType,
	GraphQLList
} from "graphql";

import WolInterface from "./WolInterface";

export const WolInterfacesConnection = new GraphQLObjectType({
	name: "WolInterfacesConnection",
	fields: () => ({
		wolInterfaces: {
			type: new GraphQLList(WolInterface)
		}
	})
});