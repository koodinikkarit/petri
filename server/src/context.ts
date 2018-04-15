import { Request } from "express";
import { ISeppo } from "./seppo/ISeppo";
import { IRisto } from "./risto/IRisto";

export class Context {
	private req: Request;
	private _seppo: ISeppo;
	private _risto: IRisto;

	constructor(args: { req?: Request; seppo?: ISeppo; risto?: IRisto }) {
		this.req = args.req;
		this._seppo = args.seppo;
		this._risto = args.risto;
	}

	get seppo() {
		return this._seppo;
	}

	get risto() {
		return this._risto;
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
