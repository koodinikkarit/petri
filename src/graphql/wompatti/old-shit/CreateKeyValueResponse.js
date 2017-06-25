import {
	GraphQLObjectType,
	GraphQLString
} from "graphql";

import KeyValue from "./KeyValue";

export default new GraphQLObjectType({
	name: "CreateKeyValueResponse",
	fields: () => ({
		keyValue: {
			type: KeyValue
		}
	})
})