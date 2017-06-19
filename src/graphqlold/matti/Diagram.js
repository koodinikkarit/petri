
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Diagram",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		slug: {
			type: GraphQLString
		},
		diagramScreens: {
			type:  new GraphQLList(classes.DiagramScreen)
		},
		diagramScreen: {
			type: classes.FetchDiagramScreenByIdResponse
		}
	})
})