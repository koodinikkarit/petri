
import User from "./User";

console.log("User", User);

const RistoQuery = `
	extend type Query {
		user: User
	}
`;

export default () => [
	User,
	RistoQuery
];