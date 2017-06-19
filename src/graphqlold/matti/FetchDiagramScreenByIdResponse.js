
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "FetchDiagramScreenByIdResponse",
	fields: () => ({
		diagramScreen: {
			type: undefined
		},
		
	})
})