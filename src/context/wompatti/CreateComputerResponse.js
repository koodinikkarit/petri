
import Computer from "./Computer";
import DeviceInfo from "./DeviceInfo";

export default class {
	constructor(context, createComputerResponse) {
		var computer = new Computer(context, createComputerResponse.getComputer());
		var deviceInfo = new DeviceInfo(context, createComputerResponse.getDeviceinfo());

		Object.defineProperties(this, {
			"computer": {
				get: () => computer
			},
			"deviceInfo": {
				get: () => deviceInfo
			}
		})
	}
}