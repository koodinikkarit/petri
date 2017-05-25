
import * as classes from "./";

const messages = require("./risto_service_pb");
const services = require("./risto_service_grpc_pb");

export default class Risto {
	constructor(ip, port, credentials) {
		this.client = new services.RistoClient(ip + ":" + port, credentials);
	}

	createToken({
		username,
		password,
		maxAge
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateTokenRequest();
			req.setUsername(username);
			req.setPassword(password);
			req.setMaxage(maxAge);
			
			this.client.createToken(req, (err, res) => {
				resolve(new classes.Token(this.client, {
					token: res.getToken().getToken()
				}));
			});
		});
	}

	createUser({
		username,
		password
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateUserRequest();
			req.setUsername(username);
			req.setPassword(password);
			
			this.client.createUser(req, (err, res) => {
				resolve(new classes.User(this.client, {
					id: res.getUser().getId(),
					username: res.getUser().getUsername()
				}));
			});
		});
	}

	fetchUserByToken({
		username,
		password,
		maxAge
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateTokenRequest();
			req.setUsername(username);
			req.setPassword(password);
			req.setMaxage(maxAge);
			
			this.client.fetchUserByToken(req, (err, res) => {
				resolve(new classes.Token(this.client, {
					token: res.getToken().getToken()
				}));
			});
		});
	}


}



