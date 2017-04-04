const ConPort = require("./ConPort");
const CpuPort = require("./CpuPort");

module.exports = class Matrix {
	constructor(client, matrix) {
		this.client = client;
		this._id = matrix.id,
		this._ip = matrix.ip;
		this._port = matrix.port;
		this._slug = matrix.slug;
		this._numberOfConPorts = matrix.numberOfConPorts;
		this._numberOfCpuPorts = matrix.numberOfCpuPorts;
	}

	get id() {
		return this._id;
	}

	get ip() {
		return this._ip;
	}

	set ip(ip) {
		this.client.editMatrix({
			id: this.id,
			ip
		}, (matrix) => {
			this._ip = matrix.ip;
		});
	}

	get port() {
		return this._port;
	}

	set port(port) {
		this.client.editMatrix({
			id: this.id,
			port
		}, (matrix) => {
			this._port = matrix.port;
		});
	}

	get slug() {
		return this._slug;
	}

	set slug(slug) {
		console.log("edit matrix slug", slug);
		this.client.editMatrix({
			id: this.id,
			slug
		}, (matrix) => {
			console.log("matrix slug edited", slug);
			this._slug = matrix.slug;
		});
	}

	get numberOfConPorts() {
		return this._numberOfConPorts;
	}
	
	get numberOfCpuPorts() {
		return this._numberOfCpuPorts;
	}

	get conPorts() {
		return new Promise((resolve, reject) => {
			var conPorts = [];
			var call = this.client.fetchConPortsByMatrixId({
				matrixId: this.id
			});
			call.on("data", conPort => {
				conPorts.push(new ConPort(this.client, conPort));
			});
			call.on("end", () => {
				resolve(conPorts);
			});
		});
	}

	get cpuPorts() {
		return new Promise((resolve, reject) => {
			var cpuPorts = [];
			var call = this.client.fetchCpuPortsByMatrixId({
				matrixId: this.id
			});
			call.on("data", cpuPort => {
				cpuPorts.push(new CpuPort(this.client, cpuPort));
			});
			call.on("end", () => {
				resolve(cpuPorts);
			});
		});
	}
}