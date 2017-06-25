import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean	
} from "graphql";

var Base64 = require('js-base64').Base64;

export default new GraphQLObjectType({
	name: "Arttu",
	fields: () => ({
		id: {
			type: GraphQLString,
			resolve: (that, args) => {
				return Base64.encode("art_" + that.id);
			}
		}
	})
})
