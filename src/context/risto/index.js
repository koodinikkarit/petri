const messages = require("./service/risto_service_pb");
const services = require("./service/risto_service_grpc_pb");
const grpc = require("grpc");


import {
	User
} from "./User";

export default class Risto {
	constructor({
		token
	}) {
		this.token = token;
	}

	fetchUserByToken() {
		return new Promise((resolve, reject) => {
			if (this.token === "qwerty12345") {
				var user = new messages.User();
				user.setId(4);
				user.setUsername("jaska");
				
				resolve(
					new User(
						this,
						user
					)
				);
			} else {
				resolve(null);
			}
		});
	}
}