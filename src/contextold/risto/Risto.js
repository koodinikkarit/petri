
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
				resolve(new classes.CreateTokenResponse(this.client, {
					token: res.getCreateTokenResponse().getToken(),
					state: res.getCreateTokenResponse().getState()
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
				resolve(new classes.CreateUserResponse(this.client, {
					user: res.getCreateUserResponse().getUser()
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
				resolve(new classes.CreateTokenResponse(this.client, {
					token: res.getCreateTokenResponse().getToken(),
					state: res.getCreateTokenResponse().getState()
				}));
			});
		});
	}


}



