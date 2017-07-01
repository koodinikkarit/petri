const fs = require("fs");
const grpc = require("grpc");

import path from "path";

let sslCredentials = grpc.credentials.createSsl(
	fs.readFileSync(path.join(__dirname, "../../ssl/ca.crt")), 
	fs.readFileSync(path.join(__dirname, "../../ssl/client.key")), 
	fs.readFileSync(path.join(__dirname, "../../ssl/client.crt"))
);

import Wompatti from "./wompatti";

export default class {
	constructor({
		token,
		sourceFamily,
		sourceIp,
		sourcePort,
		destinationIp,
		destinationPort,
		destinationPath,
		wompattiIp,
		wompattiPort
	}) {
		var meta = new grpc.Metadata();
		if (token) meta.add("token", token);
		if (sourceFamily) meta.add("sourceFamily", sourceFamily);
		if (sourceIp) meta.add("sourceIp", sourceIp);
		if (sourcePort) meta.add("sourcePort", String(sourcePort));
		if (destinationIp) meta.add("destinationIp", destinationIp);
		if (destinationPort) meta.add("destinationPort", destinationPort);
		if (destinationPath) meta.add("destinationPath", destinationPath);

		var extra = grpc.credentials.createFromMetadataGenerator(
			function (url, callback) {
				callback(null, meta);
			}
		);

		var credentials = grpc.credentials.combineChannelCredentials(sslCredentials, extra);
	
		var wompatti;

		Object.defineProperties(this, {
			wompatti: {
				get: () => {
					if (!wompatti) wompatti = new Wompatti({
						ip: wompattiIp, 
						port: wompattiPort, 
						credentials: credentials
					});
					
					return wompatti;
				}
			}
		})
	}
}