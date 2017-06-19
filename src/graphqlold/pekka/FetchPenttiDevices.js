
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "FetchPenttiDevices",
	fields: () => ({
		offset: {
			type: GraphQLInt
		},
		limit: {
			type: GraphQLInt
		},
		
	})
})