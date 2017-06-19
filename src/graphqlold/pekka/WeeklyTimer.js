
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "WeeklyTimer",
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		slug: {
			type: GraphQLString
		},
		minutes: {
			type: GraphQLInt
		},
		hours: {
			type: GraphQLInt
		},
		active: {
			type: GraphQLBoolean
		},
		monday: {
			type: GraphQLBoolean
		},
		tuesday: {
			type: GraphQLBoolean
		},
		wednesday: {
			type: GraphQLBoolean
		},
		thursday: {
			type: GraphQLBoolean
		},
		friday: {
			type: GraphQLBoolean
		},
		saturday: {
			type: GraphQLBoolean
		},
		sunday: {
			type: GraphQLBoolean
		},
		
	})
})