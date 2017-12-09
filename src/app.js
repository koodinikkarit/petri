import petriCompose from "./PetriCompose";

import express from "express";
import { 
	graphqlExpress,
	graphiqlExpress
} from "graphql-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/graphiql", graphiqlExpress({
	endpointURL: "/graphql",
	schema: petriCompose.schema,
	graphiql: true
}));


app.use(session(
	{
		secret: "keybordcat",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 600000,
			secure: false
		}
	}
));

app.use(cors({
	origin: true,
	credentials: true
}));

app.use("/", graphqlExpress((req) => {
	return {
		schema: petriCompose.schema,
		context: petriCompose.createContext({
			token: req.get("token"),
			wompatti: {
				ip: process.env.PETRI_WOMPATTI_IP,
				port: process.env.PETRI_WOMPATTI_PORT
			},
			seppo: {
				ip: process.env.PETRI_SEPPO_IP,
				port: process.env.PETRI_SEPPO_PORT
			}
		})
	};
}));

app.listen(process.env.PETRI_PORT || 9595, () => {
    console.log("Serveri on käynnissä");
});