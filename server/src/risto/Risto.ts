import { Risto as RistoClient } from "risto-client-js";
import { IRisto } from "./IRisto";

export class Risto extends RistoClient implements IRisto {
	constructor(args: { ip: string; port: number }) {
		super(args);
	}
}
