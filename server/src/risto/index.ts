import * as grpc from "grpc";

import { RistoClient } from "risto-client-js";
import { ristoIp, ristoPort } from "../config";

export const getRistoClient = () =>
	new RistoClient({
		ip: ristoIp,
		port: ristoPort
	});
