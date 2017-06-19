
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id,
		name,
		mac,
		index,
		mtu,
		flags
	}) {
		this.client = client;
		var _id = id;
		var _name = name;
		var _mac = mac;
		var _index = index;
		var _mtu = mtu;
		var _flags = flags;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"name": {
				get: () => _name
			},
			"mac": {
				get: () => _mac
			},
			"index": {
				get: () => _index
			},
			"mtu": {
				get: () => _mtu
			},
			"flags": {
				get: () => _flags
			},
			
		})
	}

	
	createWolDevice({
		computerId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateWolDeviceRequest();
			req.setComputerid(computerId);
			req.setEthernetinterface(this.id)
			
			this.client.createWolDevice(req, (err, res) => {
				resolve(new classes.CreateWolDeviceResponse(this.client, {
					wolDevice: res.getCreateWolDeviceResponse().getWoldevice()
				}));
			});
		});
	}
}	
	
	