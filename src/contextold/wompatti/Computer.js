
import * as classes from "./";

const messages = require("./wompatti_service_pb");

export default class {
	constructor(client, {
		id,
		arttuId,
		deviceInfoId
	}) {
		this.client = client;
		var _id = id;
		var _arttuId = arttuId;
		var _deviceInfoId = deviceInfoId;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"arttuId": {
				get: () => _arttuId,
				set: (arttuId) => {
					_arttuId = arttuId
					var req = new messages.EditComputerRequest();
					req.setComputerid(_id);
					req.setArttuid(_arttuId);
					this.client.editComputer(req, (erro, res) => {

					});
				}
			},
			"deviceInfoId": {
				get: () => _deviceInfoId
			},
			"computerWolDevice": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchComputerWolDeviceRequest();
						req.setComputerid(_id);
						
						
			this.client.fetchComputerWolDevice(req, (err, res) => {
				resolve(new classes.FetchComputerWolDeviceResponse(this.client, {
					wolDevice: res.getFetchComputerWolDeviceResponse().getWoldevice()
				}));
			});
					});
				}
			},
			"arttuDevice": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchArttuDeviceByIdRequest();
						req.setArttuid(_arttuId);
						
						
			this.client.fetchArttuDeviceById(req, (err, res) => {
				resolve(new classes.FetchArttuDeviceByIdResponse(this.client, {
					arttu: res.getFetchArttuDeviceByIdResponse().getArttu()
				}));
			});
					});
				}
			},
			"arttuEthernetInterfaces": {
				get: () => {
					return new Promise((resolve, rejected) => {
						var req = new messages.FetchArttuEthernetInterfacesRequest();
						req.setArttuid(_arttuId);
						
						
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

	
	createWolDevice({
		ethernetInterface
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateWolDeviceRequest();
			req.setComputerid(this.id);
			req.setEthernetinterface(ethernetInterface)
			
			this.client.createWolDevice(req, (err, res) => {
				resolve(new classes.CreateWolDeviceResponse(this.client, {
					wolDevice: res.getCreateWolDeviceResponse().getWoldevice()
				}));
			});
		});
	}

	fetchComputerWolDevice() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchComputerWolDeviceRequest();
			req.setComputerid(this.id)
			
			this.client.fetchComputerWolDevice(req, (err, res) => {
				resolve(new classes.FetchComputerWolDeviceResponse(this.client, {
					wolDevice: res.getFetchComputerWolDeviceResponse().getWoldevice()
				}));
			});
		});
	}

	fetchArttuDeviceById({
		arttuId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchArttuDeviceByIdRequest();
			req.setArttuid(arttuId)
			
			this.client.fetchArttuDeviceById(req, (err, res) => {
				resolve(new classes.FetchArttuDeviceByIdResponse(this.client, {
					arttu: res.getFetchArttuDeviceByIdResponse().getArttu()
				}));
			});
		});
	}

	fetchArttuEthernetInterfaces({
		arttuId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchArttuEthernetInterfacesRequest();
			req.setArttuid(arttuId)
			
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
	
	