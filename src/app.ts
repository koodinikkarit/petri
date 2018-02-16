import * as express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as session from "express-session";

import { schema } from "./schema";
import Context from "./Context";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
	"/graphiql",
	graphiqlExpress({
		endpointURL: "/"
	})
);

app.use(
	session({
		secret: "keybordcat",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 600000,
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

app.use(
	"/",
	graphqlExpress({
		schema: schema,
		context: new Context({
			seppoIp: process.env.SEPPO_IP,
			seppoPort: parseInt(process.env.SEPPO_PORT)
		})
	})
);

app.listen(process.env.HTTP_PORT, () => {
	console.log("Server http port " + process.env.HTTP_PORT);
});
