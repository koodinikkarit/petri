import express from "express";
import { 
	graphqlExpress,
	graphiqlExpress
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import schema from "./graphql/RootTypes";

const app = express();

const APP_PORT = 9090;

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

app.use('/graphql', graphqlExpress((req) => {
	return {
		schema
	}
}));

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql',
	schema: schema,
	graphiql: true
}));

app.listen(APP_PORT, () => {
    console.log("serveri on käynnissä");
});