
const messages = require("./service/wompatti_service_pb");
const services = require("./service/wompatti_service_grpc_pb");

import DataLoader from "dataloader";

import CreateComputerResponse from "./CreateComputerResponse";
import EditComputerResponse from "./EditComputerResponse";
import RemoveComputerResponse from "./RemoveComputerResponse";
import Computer from "./Computer";
import DeviceInfo from "./DeviceInfo";
import FetchKeyValuesByDeviceInfoIdResponse from "./FetchKeyValuesByDeviceInfoIdResponse";
import FetchComputerByIdResponse from "./FetchComputerByIdResponse";
import FetchDeviceInfoByIdResponse from "./FetchDeviceInfoByIdResponse";
import CreateKeyValueResponse from "./CreateKeyValueResponse";
import EditKeyValueResponse from "./EditKeyValueResponse";
import RemoveKeyValueResponse from "./RemoveKeyValueResponse";
import Device from "./Device";
import CreateDeviceResponse from "./CreateDeviceResponse";
import RemoveDeviceResponse from "./RemoveDeviceResponse";
import FetchDeviceByIdResponse from "./FetchDeviceByIdResponse";
import EthernetInterface from "./EthernetInterface";
import CreateWolInterfaceResponse from "./CreateWolInterfaceResponse";

import {
	Base64
} from "js-base64";

export default class {
	constructor({
		ip,
		port,
		credentials
	}) {
		this.client = new services.WompattiClient(ip + ":" + port, credentials);
	}

	createComputer({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateComputerRequest();
			req.setName(name);

			this.client.createComputer(req, (err, res) => {
				if (!err) {
					resolve(new CreateComputerResponse(this.client, res));
				} else {
					reject(err);
				}
			});
		});
	}

	editComputer({
		computerId,
		name,
		arttuId,
		deviceInfoId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditComputerRequest();
			req.setComputerid(computerId);
			req.setName(name);
			req.setArttuid(arttuId);
			req.setDeviceinfoid(deviceInfoId);

			this.client.editComputer(req, (err, res) => {
				if (!err) {
					resolve(new EditComputerResponse(this, res));
				} else {
					reject();
				}
			});
		})
	}

	removeComputer(id) {
		return new Promise((resolve, reject) => {
			var removeComputerRequest = new messages.removeComputerRequest();
			removeComputerRequest.setComputerid(id);

			this.client.removeComputer(req, (err, res) => {
				if (!err) {
					resolve(new RemoveComputerResponse(this, res));
				} else {
					reject();
				}
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
				items.push(new Computer(this, data));
			});

			call.on("end", () => {
				resolve(items);
			});

			call.on("error", () => {

			});
		});
	}

	fetchComputerById(id) {
		if (!this.computerLoader) {
			this.computerLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchComputerByIdRequest();
				req.setComputeridtList(keys);
				var call = this.client.fetchComputerById(req);
				
				var items = [];

				call.on("data", res => {
					items.push(new FetchComputerByIdResponse(this, res));
				});

				call.on("end", () => {
					resolve(items);
				});

				call.on("error", () => {

				});
			}));
		}
		return this.computerLoader.load(id);
	}

	fetchDeviceInfoById(id) {
		if (!this.deviceInfoLoader) {
			this.deviceInfoLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchDeviceInfoByIdRequest();
				req.setDeviceinfoidtList(keys);

				var call = this.client.fetchDeviceInfoById(req);

				var items = [];

				call.on("data", res => {
					//console.log("device info res", res);
					items.push(new FetchDeviceInfoByIdResponse(this, res));
				});

				call.on("end", () => {
					resolve(items);
				});

				call.on("error", () => {

				});
			}))
		}
		return this.deviceInfoLoader.load(id);
	}

	fetchKeyValuesByDeviceInfoId(id) {
		if (!this.keyValuesByDeviceInfoLoader) {
			this.keyValuesByDeviceInfoLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchKeyValuesByDeviceInfoIdRequest();
				req.setDeviceinfoidtList(keys);

				var call = this.client.fetchKeyValuesByDeviceInfoId(req);

				var items = [];

				call.on("data", res => {
					items.push(new FetchKeyValuesByDeviceInfoIdResponse(this, res));
				});

				call.on("end", () => {
					resolve(items);
				});

				call.on("error", () => {

				});
			}));
		}
		return this.keyValuesByDeviceInfoLoader.load(id);
	}

	createKeyValue({
		deviceInfoId,
		key,
		value
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateKeyValueRequest();

			console.log("deviceInfoId", deviceInfoId);

			req.setDeviceinfoid(deviceInfoId);
			req.setKey(key);
			req.setValue(value);

			this.client.createKeyValue(req, (err, res) => {
				if (!err) {
					resolve(new CreateKeyValueResponse(this, res));
				} else {
					reject(err);
				}
			});
		});
	}

	editKeyValue({
		keyValueId,
		key,
		value
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditKeyValueRequest();
			req.setKeyvalueid(keyValueId);
			req.setKey(key);
			req.setValue(value);

			this.client.editKeyValue(req, (err, res) => {
				if (!err) {
					resolve(new EditKeyValueResponse(this, res));
				} else {
					reject(err);
				}
			});
		})
	}

	removeKeyValue(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveKeyValueRequest();
			req.setKeyvalueid(id);

			this.client.removeKeyValue(req, (err, res) => {
				console.log("ress", res, err);
				if (!err) {
					resolve(new RemoveKeyValueResponse(this, res));
				} else {
					reject(err);
				}
			})
		})
	}

	createDevice({
		name
	}) {
		return new Promise((resolve, reject) => {
			var createDeviceResponse = new messages.CreateDeviceRequest();
			createDeviceResponse.setName(name);

			this.client.createDevice(req, (err, res) => {
				if (!err) {
					resolve(new CreateDeviceResponse(this, res));
				} else {
					reject();
				}
			});			
		});
	}

	removeDevice(id) {
		return new Promise((resolve, reject) => {
			var removeDeviceRequest = new messages.RemoveDeviceRequest();
			removeDeviceRequest.setDeviceid(id);

			this.client.removeDevice(req, (err, res) => {
				if (!err) {
					resolve(new RemoveDeviceResponse(this, res));
				} else {
					reject();
				}
			})
		})
	}

	fetchDevices({
		offset, 
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDevicesRequest();
			req.setOffset(offset);
			req.setLimit(limit);

			var call = this.client.fetchDevices(req);

			var items = [];

			call.on("data", res => {
				items.push(new Device(this, res));
			});

			call.on("end", () => {
				resolve(items);
			});

			call.on("error", () => {

			});
		});
	}

	fetchDeviceById(id) {
		if (!this.deviceLoader) {
			this.deviceLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchDeviceByIdRequest();
				req.setDeviceidt(id);

				var call = this.client.fetchDeviceById(req);

				var items = [];

				call.on("data", res => {
					items.push(new FetchDeviceByIdResponse(this, res));
				});

				call.on("end", () => {
					resolve(items);
				});

				call.on("error", () => {

				});
			}));
		}
		return this.deviceLoader(id);
	}

	fetchEthernetInterfaces() {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchEthernetInterfacesRequest();

			var call = this.client.fetchEthernetInterfaces(req);

			var items = [];

			call.on("data", res => {
				items.push(new EthernetInterface(this, res));
			});

			call.on("end", () => {
				resolve(items);
			});

			call.on("error", () => {

			});
		})
	}

	createWolInterface({
		computerId, 
		ethernetInterfaceId, 
		mac
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateWOlInterfaceRequest();
			req.setComputerid(computerId);
			req.setEthernetinterfaceid(ethernetInterfaceId);
			req.setMac(mac);

			this.client.createWolInterface(req, (err, res) => {
				if (!err) {
					resolve(new CreateWolInterfaceResponse(this, res));
				} else {
					reject();
				}
			})
		})
	}
}