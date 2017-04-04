const Matrix = require("./Matrix");

module.exports = class CpuPort {
	constructor(client, cpuPort) {
		this.client = client;
		this._id = cpuPort.id;
		this._slug = cpuPort.slug;
		this._matrixId = cpuPort.matrixId
		this._portNum = cpuPort.portNum;
	}

	get id() {
		return this._id;
	}

	get slug() {
		return this._slug;
	}

	set slug(slug) {
		this.client.editCpuPort({
			id: this.id,
			slug: slug
		}, slug => {
			this._slug = slug;
		})
	}

	get matrix() {
		return new Promise((resolve, reject) => {
			this.client.fetchMatrixById({
				id: this._matrixId
			}, matrix => {
				resolve(new Matrix(this.client, matrix))
			});
		});
	}

	get portNum() {
		return this._portNum;
	}
}