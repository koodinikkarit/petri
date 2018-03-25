import { Request } from "express";

export class Context {
	private req: Request;

	constructor(args: { req?: Request }) {
		this.req = args.req;
	}

	public setToken(token: string) {
		this.req.session.token = token;
	}

	public setUser(user) {
		this.req.session.user = user;
		console.log("setUset", user, this.req.session);
	}

	public clearToken() {
		this.req.session.token = null;
	}

	public clearUser() {
		this.req.session.user = null;
	}

	public getToken() {
		return this.req.session.token;
	}

	public getUser() {
		return this.req.session.user;
	}
}
