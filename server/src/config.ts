export const seppoIp = process.env.SEPPO_IP;
export const seppoPort = parseInt(process.env.SEPPO_PORT, 10);
export const ristoIp = process.env.RISTO_IP;
export const ristoPort = parseInt(process.env.RISTO_PORT, 10);
export const httpPort = process.env.HTTP_PORT
	? parseInt(process.env.HTTP_PORT, 10)
	: 80;
