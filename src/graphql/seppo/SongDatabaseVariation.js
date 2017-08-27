import {
	GraphQLObjectType,
	GraphQLID
} from "graphql";

import SongDatabase from "./SongDatabase";
import Variation from "./Variation";

export default new GraphQLObjectType({
	name: "SongDatabaseVariation",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		songDatabase: {
			type: SongDatabase
		},
		variation: {
			type: Variation
		}
	})
});