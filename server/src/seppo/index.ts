import * as grpc from "grpc";

import { SeppoClient } from "seppo-client-js";
import { seppoIp, seppoPort } from "../config";

export const getSeppoClient = () =>
	new SeppoClient({
		ip: seppoIp,
		port: seppoPort
	});
