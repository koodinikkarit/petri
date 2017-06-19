
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

import * as classes from "./";

export default new GraphQLObjectType({
	name: "FetchCpuPortByIdResponse",
	fields: () => ({
		cpuPort: {
			type: undefined
		},
		
	})
})