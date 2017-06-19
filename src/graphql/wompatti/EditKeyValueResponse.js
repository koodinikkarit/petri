import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

import KeyValue from "./KeyValue";

export default new GraphQLObjectType({
	name: "EditKeyValueResponse",
	fields: () => ({
		state: {
			type: GraphQLString
		},
		keyValue: {
			type: KeyValue
		}
	})
})