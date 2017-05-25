const fs = require("fs");
const grpc = require("grpc");

let credentials = grpc.credentials.createSsl(
	fs.readFileSync('../ssl/ca.crt'), fs.readFileSync('../ssl/client.key'), 
	fs.readFileSync('../ssl/client.crt')
);

import {
	Matti
} from "./matti";

import {
	Wompatti
} from "./wompatti";

import {
	Risto
} from "./risto";

const config = require("../../config.json");

export default class {
	constructor(token) {
		var meta = new grpc.Metadata();
		if (token) meta.add("token", token);
		meta.add("ip", "10.50.0.11");

		var extra = grpc.credentials.createFromMetadataGenerator(
			function (url, callback) {
				callback(null, meta);
			}
		);
		this._credentials = grpc.credentials.combineChannelCredentials(credentials, extra);
	}

	get wompatti() {
		if (!this._wompatti) {
			this._wompatti = new Wompatti("localhost", 5052, this._credentials);
		}
		return this._wompatti;
	}

	get matti() {
		if (!this._matti) {
			this._matti = new Matti("localhost", 5050, this._credentials);
		}
		return this._matti;
	}

	get risto() {
		if (!this._risto) {
			this._risto = new Risto("localhost", 5051, this._credentials);
		}
		return this._risto;
	}
}