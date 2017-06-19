
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "FetchDiagramBySlugResponse",
	fields: () => ({
		diagram: {
			type: undefined
		},
		
	})
})