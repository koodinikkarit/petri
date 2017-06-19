
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id,
		computerId
	}) {
		this.client = client;
		var _id = id;
		var _computerId = computerId;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"computerId": {
				get: () => _computerId
			},
			"computerWolDevice": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchComputerWolDeviceRequest();
						req.setComputerid(_computerId);
						
						
			this.client.fetchComputerWolDevice(req, (err, res) => {
				resolve(new classes.FetchComputerWolDeviceResponse(this.client, {
					wolDevice: res.getFetchComputerWolDeviceResponse().getWoldevice()
				}));
			});
					});
				}
			},
			"arttuEthernetInterfaces": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchArttuEthernetInterfacesRequest();
						req.setArttuid(_id);
						
						
			var call = this.client.fetchArttuEthernetInterfaces(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.EthernetInterface(this.client, {
					id: data.getId(),
					name: data.getName(),
					mac: data.getMac(),
					index: data.getIndex(),
					mtu: data.getMtu(),
					flags: data.getFlags()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
					});
				}
			}
		})
	}

	
	editComputer({
		id
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditComputerRequest();
			req.setId(id);
			req.setArttuid(this.id)
			
			this.client.editComputer(req, (err, res) => {
				resolve(new classes.EditComputerResponse(this.client, {
					computer: res.getEditComputerResponse().getComputer()
				}));
			});
		});
	}

	createWolDevice({
		computerId,
		ethernetInterface
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateWolDeviceRequest();
			req.setComputerid(computerId);
			req.setEthernetinterface(ethernetInterface)
			
			this.client.createWolDevice(req, (err, res) => {
				resolve(new classes.CreateWolDeviceResponse(this.client, {
					wolDevice: res.getCreateWolDeviceResponse().getWoldevice()
				}));
			});
		});
	}

	fetchComputerWolDevice({
		computerId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchComputerWolDeviceRequest();
			req.setComputerid(computerId)
			
			this.client.fetchComputerWolDevice(req, (err, res) => {
				resolve(new classes.FetchComputerWolDeviceResponse(this.client, {
					wolDevice: res.getFetchComputerWolDeviceResponse().getWoldevice()
				}));
			});
		});
	}

	fetchArttuEthernetInterfaces() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchArttuEthernetInterfacesRequest();
			req.setArttuid(this.id)
			
			var call = this.client.fetchArttuEthernetInterfaces(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.EthernetInterface(this.client, {
					id: data.getId(),
					name: data.getName(),
					mac: data.getMac(),
					index: data.getIndex(),
					mtu: data.getMtu(),
					flags: data.getFlags()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}
}	
	
	