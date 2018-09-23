import * as express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as session from "express-session";

import { schema } from "./schema";
import { Context } from "./context";
import { httpPort, seppoIp, seppoPort, ristoIp, ristoPort } from "./config";
import { Seppo } from "./seppo";
import { Risto } from "./risto/Risto";

export const Main = async () => {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.use(
		"/graphiql",
		graphiqlExpress({
			endpointURL: "/graphql"
		})
	);

	app.use(
		session({
			secret: "keybordcat",
			resave: false,
			saveUninitialized: false,
			cookie: {
				maxAge: 60000000,
				secure: false
			}
		})
	);

	app.use(
		cors({
			origin: true,
			credentials: true
		})
	);

	app.use("/", async (req, res, next) => {
		try {
			console.log("session is", req.session);

			const seppo = new Seppo({
				ip: seppoIp,
				port: seppoPort
			});

			const risto = new Risto({
				ip: ristoIp,
				port: ristoPort
			});

			graphqlExpress({
				schema: schema,
				context: new Context({
					req,
					seppo,
					risto
				})
			})(req, res, next);
		} catch (e) {
			console.log("graphq serve error", e);
		}
	});

	app.listen(httpPort, () => {
		console.log("Server http port " + httpPort);
	});
};

Main();
