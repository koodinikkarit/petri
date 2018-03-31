import * as grpc from "grpc";

import { SeppoClient } from "seppo-client-js";
import { seppoIp, seppoPort } from "../config";

export const seppoClient = new SeppoClient({
	ip: seppoIp,
	port: seppoPort
});
