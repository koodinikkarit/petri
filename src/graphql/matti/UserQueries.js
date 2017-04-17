import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull
} from "graphql";


import User from "./User";

export default {
	users: {
		name: "Users",
		type: new GraphQLList(User),
		resolve: (_, args) => new Promise((resolve, reject) => {

		})
	},
	userById: {
		name: "UserById",
		type: User,
		resolve: (_, args) => new Promise((resolve, reject) => {

		})
	}
}