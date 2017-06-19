
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "Pentti",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		ip: {
			type: GraphQLString
		},
		buttons: {
			type:  new GraphQLList(classes.Button)
		}
	})
})