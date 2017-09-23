import {
	GraphQLObjectType,
	GraphQLID
} from "graphql";

import Tag from "./Tag";
import SongDatabase from "./SongDatabase";

export default new GraphQLObjectType({
	name: "SongDatabaseTag",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		tag: {
			type: Tag
		},
		songDatabase: {
			type: SongDatabase
		}		
	})
});