import * as grpc from "grpc";

import { Seppo } from "seppo-client-js";
import { seppoIp, seppoPort } from "../config";

export const getSeppoClient = () =>
	new Seppo({
		ip: seppoIp,
		port: seppoPort
	});

export * from "./ISeppo";
export * from "./Seppo";
