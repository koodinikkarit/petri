
const messages = require("./service/wompatti_service_pb");
const services = require("./service/wompatti_service_grpc_pb");

import DataLoader from "dataloader";

import {
	Computer,
	ComputersConnection,
	CreateComputerOutput
} from "./Computer";

import {
	Device,
	DevicesConnection,
	CreateDeviceOutput
} from "./Device";

import {
	DeviceType,
	DeviceTypesEdge,
	DeviceTypesConnection,
	DeviceTypeCommands
} from "./DeviceType";

import {
	Command
} from "./Command";

import {
	KeyValue
} from "./KeyValue";

import {
	WolInterface
} from "./WolInterface";

import {
	TelnetInterface,
	TelnetInterfacesEdge,
	TelnetInterfacesConnection
} from "./TelnetInterface";

import {
	SerialInterface,
	SerialInterfacesEdge,
	SerialInterfacesConnections
} from "./SerialInterface";

import {
	DeviceInfo,
	DeviceInfoKeyValues
} from "./DeviceInfo";

import EthernetInterface from "./EthernetInterface";

export default class {
	constructor({
		ip,
		port,
		credentials
	}) {
		this.client = new services.WompattiClient(ip + ":" + port, credentials);
	}

	// Fetch

	fetchComputers({
		after,
		before,
		first,
		last
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchComputersRequest();
			req.setAfter(after);
			req.setBefore(before);
			req.setFirst(first);
			req.setLast(last);

			this.client.fetchComputers(req, (err, res) => {
				if (!err) {
					resolve(new ComputersConnection(this, res));
				} else {
					reject();
				}
			});
		});
	}

	fetchComputerById(id) {
		if (!this.computerLoader) {
			this.computerLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchComputerByIdRequest();
				req.setComputeridtList(keys);

				this.client.fetchComputerById(req, (err, res) => {
					if (!err) {
						resolve(res.getComputersList().map(p => {
							console.log("pp", p.getId(), p.getName());
							if (p.getId() > 0) {
								return new Computer(this, p);
							} else {
								return null;
							}
						}));
					} else {
						reject();
					}
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

				this.client.fetchDeviceInfoById(req, (err, res) => {
					if (!err) {
						resolve(res.getDeviceinfosList().map(p => {
							if (p.getId() > 0) {
								return new DeviceInfo(this, p);
							} else {
								return null;
							}
						}));
					} else {
						reject();
					}
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

				this.client.fetchKeyValuesByDeviceInfoId(req, (err, res) => {
					if (!err) {
						resolve(res.getDeviceinfokeyvaluesList().map(deviceInfoKeyValues => new DeviceInfoKeyValues(this, deviceInfoKeyValues)));
					} else {
						reject();
					}
				})
			}));
		}
		return this.keyValuesByDeviceInfoLoader.load(id);
	}

	fetchDevices({
		after,
		before,
		first,
		last
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDevicesRequest();
			req.setAfter(after);
			req.setBefore(before);
			req.setFirst(first);
			req.setLast(last);

			this.client.fetchDevices(req, (err, res) => {
				if (!err) {
					resolve(new DevicesConnection(this, res));
				} else {
					reject();
				}
			});
		});
	}

	fetchDeviceById(id) {
		if (!this.deviceLoader) {
			this.deviceLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchDeviceByIdRequest();
				req.setDeviceidt(id);

				this.client.fetchDeviceById(req, (err, res) => {
					if (!err) {
						resolve(res.getDevicesList().map(p => {
							if (p.getId() > 0) {
								return new Device(this, p);
							} else {
								return null;
							}
						}))
					} else {
						reject();
					}
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

	fetchWolInterfaceById(id) {
		if (!this.wolInterfaceLoader) {
			this.wolInterfaceLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.fetchWolInterfaceByIdRequest();
				req.setWolinterfaceidtList(keys);

				this.client.fetchWolInterfaceById(req, (err, res) => {
					if (!err) {
						resolve(res.getWolinterfacesList().map(p => {
							if (p.getId() > 0) {
								return new WolInterface(this, p);
							} else {
								return null;
							}
						}))
					} else {
						reject();
					}
				});
			}));
		}
		return this.wolInterfaceLoader(id);		
	}

	fetchDeviceTypes({
		after,
		before,
		first,
		last
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchDeviceTypesRequest();
			req.setAfter(after);
			req.setBefore(before);
			req.setFirst(first);
			req.setLast(last);

			this.client.fetchDeviceTypes(req, (err, res) => {
				if (!err) {
					resolve(new DeviceTypesConnection(this, res))
				} else {
					reject();
				}
			});
		})
	}

	fetchDeviceTypeById(id) {
		if (!this.fetchDeviceTypeLoader) {
			this.fetchDeviceTypeLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchDeviceTypeByIdRequest();
				req.setDevicetypeidtList(keys);

				this.client.fetchDeviceTypeById(req, (err, res) => {
					if (!err) {
						resolve(res.getDevicetypesList().map(p => {
							if (p.getId() > 0) {
								return new DeviceType(this, p);
							} else {
								return null;
							}
						}));
					} else {
						reject();
					}
				});
			}));
		}
	}

	fetchCommandsByDeviceTypeId(id) {
		if (!this.commandLoader) {
			this.commandLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchCommandsByDeviceTypeIdRequest();
				set.setDevicetypeidtList(keys);

				this.client.fetchCommandsByDeviceTypeId(req, (err, res) => {
					if (err) {
						reject();
					} else {
						resolve(res.getDevicetypecommands().map(p => new DeviceTypeCommands(this, p)));
					}
				});
			}));
		}
		return this.commandLoader.load(id);
	}

	fetchTelnetInterfaces({
		after,
		before,
		first,
		last
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchTelnetInterfacesRequest();
			req.setAfter(after);
			req.setBefore(before);
			req.setFirst(first);
			req.setLast(last);

			this.client.fetchTelnetInterfaces(req, (err, res) => {
				if (err) {
					reject();
				} else {
					resolve(new TelnetInterfacesConnection(this, res));
				}
			});
		})
	}

	fetchTelnetInterfaceById(id) {
		if (!this.telnetInterfaceLoader) {
			this.telnetInterfaceLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchTelnetInterfaceByIdRequest();
				req.setTelnetinterfaceidtList(keys);

				this.client.fetchCommandsByDeviceTypeId(req, (err, res) => {
					if (err) {
						reject();
					} else {
						resolve(res.getTelnetinterfaceList().map(p => {
							if (p.getId() > 0) {
								return new TelnetInterface(this, p);
							} else {
								return null;
							}
						}))
					}
				});
			}));
		}
	}

	fetchSerialInterfaces({
		after,
		before,
		first,
		last
	}) {
		var req = new messages.FetchSerialInterfaceRequest();
		req.setAfter(after);
		req.setBefore(before);
		req.setFirst(first);
		req.setLast(last);

		this.client.fetchSerialInterfaces(req, (err, res) => {
			if (err) {
				reject();
			} else {
				resolve(new SerialInterfacesConnections(this, res));
			}
		})

	}

	fetchSerialInterfaceById(id) {
		if (!this.serialInterfaceLoader) {
			this.serialInterfaceLoader = new DataLoader(keys => new Promise((resolve, reject) => {
				var req = new messages.FetchSerialInterfaceByIdRequest();
				req.setSerialinterfaceidt(id);

				this.client.fetchSerialInterfaceById(req, (err, res) => {
					if (err) {
						reject();
					} else {
						resolve(res.getSerialinterfacesList().map(p => {
							if (p.getId() > 0) {
								return new SerialInterface(this, p);
							} else {
								return null;
							}
						}))
					}
				})
			}))
		}
		this.serialInterfaceLoader.load(id);
	}





	// Mutations

	createComputer({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateComputerRequest();
			req.setName(name);
			this.client.createComputer(req, (err, res) => {
				if (!err) {
					resolve(new CreateComputerOutput(this, res));
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
					switch(res.getState()) {
						case 0:
							resolve(new Computer(this, res.getComputer()));
							break;
						case 1:
							resolve(null);
							break;
					}
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
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}
				} else {
					reject();
				}
			});
		});
	}

	createDevice({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDeviceRequest();
			req.setName(name);

			this.client.createDevice(req, (err, res) => {
				if (!err) {
					resolve(new CreateDeviceOutput(this, res));
				} else {
					reject();
				}
			});			
		});
	}

	editDevice({
		deviceId,
		deviceInfoId,
		name,
		deviceTypeId,
		serialInterfaceId,
		telnetInterfaceId,
		cecInterfaceId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditDeviceRequest();
			req.setDeviceid(deviceId);
			req.setDeviceinfoid(deviceInfoId);
			req.setName(name);
			req.setDevicetypeid(deviceTypeId);
			req.setSerialinterfaceid(serialInterfaceId);
			req.setTelnetinterfaceid(telnetInterfaceId);
			req.setCecinterfaceid(cecInterfaceId);

			this.client.editDevice(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(new Device(this, res.getDevice()));
							break;
						case 1:
							resolve(null);
							break;
					}
				} else {
					reject();
				}
			})
		});
	}

	removeDevice(id) {
		return new Promise((resolve, reject) => {
			var removeDeviceRequest = new messages.RemoveDeviceRequest();
			removeDeviceRequest.setDeviceid(id);

			this.client.removeDevice(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}				
				} else {
					reject();
				}
			})
		})
	}

	createDeviceType({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateDeviceTypeRequest();
			req.setName(name);

			this.client.createDeviceType(req, (err, res) => {
				if (!err) {
					resolve(new DeviceType(this, res.getDevicetype()));
				} else {
					reject();
				}				
			})
		});
	}

	editDeviceType({
		deviceTypeId,
		name,
		serialInterfaceId,
		telnetInterfaceId,
		cecInterfaceId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditDeviceTypeRequest();
			req.setDevicetypeid(deviceTypeId);
			req.setName(name);
			req.setSerialinterfaceid(serialInterfaceId);
			req.setTelnetInterfaceId(telnetInterfaceId);
			req.setCecinterfaceid(cecInterfaceId);

			this.client.editDeviceType(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(new DeviceType(this, res.getDevicetype()));
							break;
						case 1:
							resolve(null);
							break;
					}
				} else {
					reject();
				}
			});
		});
	}

	removeDeviceType(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveDeviceTypRequest();
			req.setDevicetypeid(id);

			this.client.removeDeviceType(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}
				} else {
					reject();
				}				
			});
		});
	}	

	createCommand({
		deviceTypeId,
		name,
		value
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateCommandRequest();
			req.setDevicetypeid(deviceTypeId);
			req.setName(name);
			req.value(value);

			this.client.createCommand(req, (err, res) => {
				if (!err) {
					resolve(new Command(this, res.getCommand()));
				} else {
					reject();
				}				
			});
		});
	}

	editCommand({
		commandId,
		name,
		value
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditCommandRequest();
			req.setCommandid(commandId);
			req.setName(name);
			req.setValue(value);

			this.client.editCommand(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(new Command(this, res.getCommand()));
							break;
						case 1:
							resolve(null);
							break;
					}					
				} else {
					reject();
				}				
			});
		});
	}

	removeCommand(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveCommandRequest();
			req.setCommandid(id);

			this.client.removeCommand(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}
				} else {
					reject();
				}				
			});
		});
	}

	createKeyValue({
		deviceInfoId,
		key,
		value
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateKeyValueRequest();
			req.setDeviceinfoid(deviceInfoId);
			req.setKey(key);
			req.setValue(value);

			this.client.createKeyValue(req, (err, res) => {
				if (!err) {
					resolve(new KeyValue(this, res.getKeyvalue()));
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
					switch(res.getState()) {
						case 0:
							resolve(new KeyValue(this, res.getKeyvalue()));
							break;
						case 1:
							resolve(null);
							break;
					}
					
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
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}
				} else {
					reject(err);
				}
			})
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
					resolve(new WolInterface(this, res.getWolinterface()));
				} else {
					reject();
				}
			})
		})
	}

	editWolInterface({
		wolInterfaceId,
		ethernetInterfaceId,
		mac
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditWolInterfaceRequest();
			req.setWolinterfaceid(wolInterfaceId);
			req.setEthernetinterfaceid(ethernetInterfaceId);
			req.setMac(mac);

			this.client.editWolInterface(req, (err, res) => {
				if (!err) {
					switch (res.getState()) {
						case 0:
							resolve(new WolInterface(this, res.getWolinterface()));
							break;
						case 1:
							resolve(null);
							break;
					}
				} else {
					reject();
				}
			})
		});
	}

	removeWolInterface(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveWolInterfaceRequest();
			req.setWolinterfaceid(id);

			this.client.removeWolInterface(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}
				} else {
					reject();
				}
			})
		});
	}

	executeWolInterface(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.ExecuteWolInterfaceRequest();
			req.setWolinterfaceid(id);

			this.client.executeWolInterface(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}
				} else {
					reject();
				}
			});
		});
	}

	createTelnetInterface({
		ip,
		port
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateTelnetInterfaceRequest();
			req.setIp(ip);
			req.setPort(port);

			this.client.createTelnetInterface(req, (err, res) => {
				if (!err) {
					resolve(new TelnetInterface(this, res.getTelnetinterface()));
				} else {
					reject();
				}
			});
		});
	}

	editTelnetInterface({
		telnetInterfaceId,
		ip,
		port
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditTelnetInterfaceRequest();
			req.setTelnetinterfaceid(telnetInterfaceId);
			req.setIp(ip);
			req.setPort(port);

			this.client.editTelnetInterface(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(new TelnetInterface(this, res.getTelnetinterface()))
							break;
						case 1:
							resolve(null);
							break;
					}
				} else {
					reject();
				}
			});
		});
	}

	removeTelnetInterface(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveTelnetInterfaceRequest();
			req.setTelnetinterfaceid(id);

			this.client.removeTelnetInterface(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}
				} else {
					reject();
				}
			});
		});
	}

	createSerialInterface({
		serialPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateSerialInterface();
			req.setSerialportid(serialPortId);

			this.client.createSerialInterface(req, (err, res) => {
				if (!err) {
					resolve(new SerialInterface(this, res.getSerialinterface()))
				} else {
					reject();
				}
			})
		});
	}

	editSerialInterface({
		serialInterfaceId,
		serialPortId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditSerialInterfaceRequest();
			req.setSerialinterfaceid(serialInterfaceId);
			req.setSerialportid(serialPortId);

			this.client.editSerialInterface(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(new SerialInterface(this, model.getSerialinterface()));
							break;
						case 1:
							resolve(null);
							break;
					}
				} else {
					reject();
				}
			});
		});
	}

	removeSerialInterface(id) {
		return new Promise((resolve, reject) => {
			var req = new messages.RemoveSerialInterfaceRequest();
			req.setSerialInterfaceId(id);

			this.client.removeSerialInterface(req, (err, res) => {
				if (!err) {
					switch(res.getState()) {
						case 0:
							resolve(true);
							break;
						case 1:
							resolve(false);
							break;
					}
				} else {
					reject();
				}
			});
		});
	}
}