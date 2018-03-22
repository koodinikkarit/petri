import * as grpc from "grpc";

import { RistoClient } from "risto-client-js";
import { ristoIp, ristoPort } from "../config";

export const ristoClient = new RistoClient({
	ip: ristoIp,
	port: ristoPort
});
