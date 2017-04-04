const Matrix = require("./Matrix");

module.exports = class ConPort {
	constructor(client, conPort) {
		this.client = client;
		this._id = conPort.id;
		this._slug = conPort.slug;
		this._matrixId
		this._portNum = conPort.portNum;
	}

	get id() {
		return this._id;
	}

	get slug() {
		return this._slug;
	}

	set slug(slug) {
		this.client.editConPort({
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