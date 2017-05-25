
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
			
			this.wakeup(req, (err, res) => {
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


}



