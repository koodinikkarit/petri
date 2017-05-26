
import * as classes from "./";

const messages = require("./wompatti_service_pb");
const services = require("./wompatti_service_grpc_pb");

export default class Wompatti {
	constructor(ip, port, credentials) {
		this.client = new services.WompattiClient(ip + ":" + port, credentials);
	}

	addComputer({
		name,
		mac
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddComputerRequest();
			req.setName(name);
			req.setMac(mac);
			
			this.client.addComputer(req, (err, res) => {
				resolve(new classes.Computer(this.client, {
					id: res.getComputer().getId(),
					name: res.getComputer().getName(),
					mac: res.getComputer().getMac()
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
					name: data.getName(),
					mac: data.getMac()
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
				resolve(new classes.Computer(this.client, {
					id: res.getComputer().getId(),
					name: res.getComputer().getName(),
					mac: res.getComputer().getMac()
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
				resolve();
			});
		});
	}

	editComputer({
		id,
		name,
		mac
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditComputerRequest();
			req.setId(id);
			req.setName(name);
			req.setMac(mac);
			
			this.client.editComputer(req, (err, res) => {
				resolve(new classes.Computer(this.client, {
					id: res.getComputer().getId(),
					name: res.getComputer().getName(),
					mac: res.getComputer().getMac()
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
				resolve();
			});
		});
	}

	addKeijo({
		name,
		ip,
		port
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddKeijoRequest();
			req.setName(name);
			req.setIp(ip);
			req.setPort(port);
			
			this.client.addKeijo(req, (err, res) => {
				resolve(new classes.Keijo(this.client, {
					id: res.getKeijo().getId(),
					name: res.getKeijo().getName(),
					ip: res.getKeijo().getIp(),
					port: res.getKeijo().getPort()
				}));
			});
		});
	}

	editKeijo({
		keijoId,
		name,
		ip,
		port
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditKeijoRequest();
			req.setKeijoid(keijoId);
			req.setName(name);
			req.setIp(ip);
			req.setPort(port);
			
			this.client.editKeijo(req, (err, res) => {
				resolve(new classes.Keijo(this.client, {
					id: res.getKeijo().getId(),
					name: res.getKeijo().getName(),
					ip: res.getKeijo().getIp(),
					port: res.getKeijo().getPort()
				}));
			});
		});
	}

	removeKeijo({
		keijoId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveKeijoRequest();
			req.setKeijoid(keijoId);
			
			this.client.removeKeijo(req, (err, res) => {
				resolve();
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
				resolve(new classes.Keijo(this.client, {
					id: res.getKeijo().getId(),
					name: res.getKeijo().getName(),
					ip: res.getKeijo().getIp(),
					port: res.getKeijo().getPort()
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
				resolve();
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
				resolve();
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
				resolve();
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
				resolve();
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
				resolve();
			});
		});
	}


}



