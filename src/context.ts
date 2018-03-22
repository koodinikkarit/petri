import { Request } from "express";

export class Context {
	private token: string;
	private req: Request;

	constructor(args: { token: string; req?: Request }) {
		this.token = args.token;
		this.req = args.req;
	}

	public setToken(token: string) {
		this.token = token;
		this.req.session.token = token;
	}

	public getToken() {
		return this.token;
	}

	public setUser(user) {}
}
