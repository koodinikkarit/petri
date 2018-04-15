import * as grpc from "grpc";

import { Risto } from "risto-client-js";
import { ristoIp, ristoPort } from "../config";

export const getRistoClient = () =>
	new Risto({
		ip: ristoIp,
		port: ristoPort
	});
