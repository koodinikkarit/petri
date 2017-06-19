const fs = require("fs");
const grpc = require("grpc");

let sslCredentials = grpc.credentials.createSsl(
	fs.readFileSync('../ssl/ca.crt'), 
	fs.readFileSync('../ssl/client.key'), 
	fs.readFileSync('../ssl/client.crt')
);

import Wompatti from "./wompatti";

export default class {
	constructor({
		token,
		sourceIp,
		destinationIp,
		wompattiIp,
		wompattiPort
	}) {
		var meta = new grpc.Metadata();
		if (token) meta.add("token", token);
		if (sourceIp) meta.add("sourceIp", sourceIp);
		if (destinationIp) meta.add("destinationIp", destinationIp);

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