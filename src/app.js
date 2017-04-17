import express from "express";
import { 
	graphqlExpress,
	graphiqlExpress
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import schema from "./graphql/RootTypes";

import cors from "cors";

const fs = require("fs");
const grpc = require("grpc");
//const ristoservice = grpc.load("./risto_service/risto_service.proto").RistoService;

//var client = new ristoservice.Risto(`localhost:3040`, grpc.credentials.createInsecure());

const app = express();

const APP_PORT = 9595;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
	origin: "http://localhost:11111"
}))

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql',
	schema: schema,
	graphiql: true
}));

app.post("/login", (req, res) => {
	// console.log("Terve tuloa ", req.body.username, req.body.password);
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
	
});
  
app.use('/', graphqlExpress((req) => {
	return {
		schema
	}
}));

app.listen(APP_PORT, () => {
    console.log("serveri on käynnissä");
});