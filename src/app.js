import express from "express";
import { 
	graphqlExpress,
	graphiqlExpress
} from "graphql-server-express";
import bodyParser from "body-parser";
import schema from "./graphql";
import Context from "./context";

//const ristoservice = grpc.load("./risto_service/risto_service.proto").RistoService;

//var client = new ristoservice.Risto(`localhost:3040`, grpc.credentials.createInsecure());

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors({
// 	origin: "http://localhost:11111"
// }))

app.use("/graphiql", graphiqlExpress({
	endpointURL: "/graphql",
	schema: schema,
	graphiql: true
}));

app.post("/login", (req, res) => {
	console.log("Terve tuloa ", req.body.username, req.body.password);
	res.setHeader('Content-Type', 'application/json');
	res.json({
		token: "qwerty12345"
	});
	// client.createToken({
	// 	username: req.body.username,
	// 	password: req.body.password
	// }, (err, tokenCreated) => {
	// 	//if (!err)
	// 	console.log("err ", err);
	// 	console.log("token =? "+ tokenCreated)
	// 	res.redirect(301, req.query.return_url + "?token=" + tokenCreated.token.token);
	// });
	// console.log(req.query.return_url);
	//res.redirect(301, req.query.return_url + "?token=makkarasiili");
});

app.use("/", graphqlExpress((req) => {
	var remoteAdressParts = req.connection.remoteAddress.split(":");
	var hostParts = req.get('host').split(":");	

	console.log("tokenis", req.get("token"));

	var context = new Context({
		token: req.get("token"),
		wompattiIp: process.env.PETRI_WOMPATTI_IP,
		wompattiPort: process.env.PETRI_WOMPATTI_PORT,
		seppoIp: process.env.PETRI_SEPPO_IP,
		seppoPort: process.env.PETRI_SEPPO_PORT,
		sourceFamily: req.connection.remoteFamily,
		sourceIp: remoteAdressParts[remoteAdressParts.length-1],
		sourcePort: req.connection.remotePort,
		destinationIp: hostParts[0],
		destinationPort: hostParts[1],
		destinationPath: req.originalUrl
	});
	
	return {
		schema,
		context
	};
}));

app.listen(process.env.PETRI_PORT || 9595, () => {
    console.log("serveri on käynnissä");
});