const fs = require("fs");
const grpc = require("grpc");

const wompattiService = grpc.load("../wompatti_service/wompatti_service.proto").WompattiService;

const config = require("../../config.json");

export default class {
	constructor(token) {

	}

	get wompatti() {
		if (!this._wompatti) {
			this._wompatti = new wompattiService.Wompatti(`${config.wompattiIp}:${config.wompattiPort}`)
		}
		return this._wompatti;
	}
}