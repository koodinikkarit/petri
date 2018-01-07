import SeppoContext from "./seppo/context";

export default class Context {
	seppoIp: string;
	seppoPort: number;
	private seppoContext: SeppoContext;

	constructor({
		seppoIp,
		seppoPort
	}: {
		seppoIp: string;
		seppoPort: number;
	}) {
		this.seppoIp = seppoIp;
		this.seppoPort = seppoPort;
	}

	get seppo() {
		if (!this.seppoContext) {
			this.seppoContext = new SeppoContext({
				ip: this.seppoIp,
				port: this.seppoPort
			});
		}
		return this.seppoContext;
	}
}
