
import * as classes from "./";

const messages = require("./risto_service_pb");

export default class {
	constructor(client, {
		id,
		username
	}) {
		this.client = client;
		var _id = id;
		var _username = username;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"username": {
				get: () => _username
			},
			
		})
	}

	
	createToken({
		password,
		maxAge
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateTokenRequest();
			req.setUsername(this.id);
			req.setPassword(password);
			req.setMaxage(maxAge)
			
			this.client.createToken(req, (err, res) => {
				resolve(new classes.CreateTokenResponse(this.client, {
					token: res.getCreateTokenResponse().getToken(),
					state: res.getCreateTokenResponse().getState()
				}));
			});
		});
	}

	fetchUserByToken({
		password,
		maxAge
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateTokenRequest();
			req.setUsername(this.id);
			req.setPassword(password);
			req.setMaxage(maxAge)
			
			this.client.fetchUserByToken(req, (err, res) => {
				resolve(new classes.CreateTokenResponse(this.client, {
					token: res.getCreateTokenResponse().getToken(),
					state: res.getCreateTokenResponse().getState()
				}));
			});
		});
	}
}	
	
	