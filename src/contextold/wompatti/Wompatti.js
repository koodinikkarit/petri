
import * as classes from "./";

const messages = require("./wompatti_service_pb");
const services = require("./wompatti_service_grpc_pb");

export default class Wompatti {
	constructor(ip, port, credentials) {
		this.client = new services.WompattiClient(ip + ":" + port, credentials);
	}

	createComputer({
		
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateComputerRequest();
			
			
			this.client.createComputer(req, (err, res) => {
				resolve(new classes.CreateComputerResponse(this.client, {
					computer: res.getCreateComputerResponse().getComputer(),
					deviceInfo: res.getCreateComputerResponse().getDeviceinfo()
				}));
			});
		});
	}

	editComputer({
		id,
		arttuId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditComputerRequest();
			req.setId(id);
			req.setArttuid(arttuId);
			
			this.client.editComputer(req, (err, res) => {
				resolve(new classes.EditComputerResponse(this.client, {
					computer: res.getEditComputerResponse().getComputer()
				}));
			});
		});
	}

	removeComputer({
		computerId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveComputerRequest();
			req.setComputerid(computerId);
			
			this.client.removeComputer(req, (err, res) => {
				resolve(new classes.RemoveComputerResponse(this.client, {
					
				}));
			});
		});
	}

	fetchComputers({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchComputersRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchComputers(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Computer(this.client, {
					id: data.getId(),
					arttuId: data.getArttuid(),
					deviceInfoId: data.getDeviceinfoid()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchComputerById({
		id
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchComputerByIdRequest();
			req.setId(id);
			
			this.client.fetchComputerById(req, (err, res) => {
				resolve(new classes.FetchComputerByIdResponse(this.client, {
					computer: res.getFetchComputerByIdResponse().getComputer()
				}));
			});
		});
	}

	wakeup({
		computerId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.WakeupRequest();
			req.setComputerid(computerId);
			
			this.client.wakeup(req, (err, res) => {
				resolve(new classes.WakeupResponse(this.client, {
					
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
			req.setEthernetinterface(ethernetInterface);
			
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
			req.setComputerid(computerId);
			
			this.client.fetchComputerWolDevice(req, (err, res) => {
				resolve(new classes.FetchComputerWolDeviceResponse(this.client, {
					wolDevice: res.getFetchComputerWolDeviceResponse().getWoldevice()
				}));
			});
		});
	}

	fetchKeijos({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchKeijosRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchKeijos(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Keijo(this.client, {
					id: data.getId(),
					name: data.getName(),
					ip: data.getIp(),
					port: data.getPort()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchKeijoById({
		keijoId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchKeijoByIdRequest();
			req.setKeijoid(keijoId);
			
			this.client.fetchKeijoById(req, (err, res) => {
				resolve(new classes.FetchKeijoByIdResponse(this.client, {
					keijo: res.getFetchKeijoByIdResponse().getKeijo()
				}));
			});
		});
	}

	turnOnCecDevice({
		keijoId,
		address
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.TurnOnCecDeviceRequest();
			req.setKeijoid(keijoId);
			req.setAddress(address);
			
			this.client.turnOnCecDevice(req, (err, res) => {
				resolve(new classes.TurnOnCecDeviceResponse(this.client, {
					
				}));
			});
		});
	}

	changeKeijoSource({
		keijoId,
		sourceNumber
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.ChangeKeijoSourceRequest();
			req.setKeijoid(keijoId);
			req.setSourcenumber(sourceNumber);
			
			this.client.changeKeijoSource(req, (err, res) => {
				resolve(new classes.ChangeKeijoSourceResponse(this.client, {
					
				}));
			});
		});
	}

	shutDownCecDevice({
		keijoId,
		address
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.ShutDownCecDeviceRequest();
			req.setKeijoid(keijoId);
			req.setAddress(address);
			
			this.client.shutDownCecDevice(req, (err, res) => {
				resolve(new classes.ShutDownCecDeviceResponse(this.client, {
					
				}));
			});
		});
	}

	fetchCecDevicePowerStatusByKeijoId({
		keijoId,
		address
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchCecDevicePowerStatusByKeijoIdRequest();
			req.setKeijoid(keijoId);
			req.setAddress(address);
			
			this.client.fetchCecDevicePowerStatusByKeijoId(req, (err, res) => {
				resolve(new classes.FetchCecDevicePowerStatusByKeijoIdResponse(this.client, {
					
				}));
			});
		});
	}

	fetchCecTvDeviceSourceByKeijoId({
		keijoId,
		address
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchCecTvDeviceSourceByKeijoIdRequest();
			req.setKeijoid(keijoId);
			req.setAddress(address);
			
			this.client.fetchCecTvDeviceSourceByKeijoId(req, (err, res) => {
				resolve(new classes.FetchCecTvDeviceSourceByKeijoIdResponse(this.client, {
					
				}));
			});
		});
	}

	fetchArttuDevices({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchArttuDevicesRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchArttuDevices(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Arttu(this.client, {
					id: data.getId(),
					computerId: data.getComputerid()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchArttuDeviceById({
		arttuId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchArttuDeviceByIdRequest();
			req.setArttuid(arttuId);
			
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
			req.setArttuid(arttuId);
			
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

	fetchArttuEthernetInterfaceById({
		ethernetInterfaceId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchArttuEthernetInterfaceByIdRequest();
			req.setEthernetinterfaceid(ethernetInterfaceId);
			
			this.client.fetchArttuEthernetInterfaceById(req, (err, res) => {
				resolve(new classes.FetchArttuEthernetInterfaceByIdResponse(this.client, {
					ethernetInterface: res.getFetchArttuEthernetInterfaceByIdResponse().getEthernetinterface()
				}));
			});
		});
	}

	createDevice({
		
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDeviceRequest();
			
			
			this.client.createDevice(req, (err, res) => {
				resolve(new classes.CreateDeviceResponse(this.client, {
					device: res.getCreateDeviceResponse().getDevice(),
					deviceInfo: res.getCreateDeviceResponse().getDeviceinfo()
				}));
			});
		});
	}


}



