import dotenv from "dotenv";
import express from "express";
import { ApolloServer } from 'apollo-server-express';
import schema from '../src/components/graphQL/schema/index';
import compression from "compression";
import bodyParser from "body-parser";

dotenv.config();

/**
 * Express App class
 */
export default class App {

    /**
     * Create application
     */
    static createApplication(): express.Application {
        const application = express();
        const server: ApolloServer = new ApolloServer(schema);
        application.set("port", process.env.PORT || 3000);
        application.use(compression());
        application.use(bodyParser.json());
        application.use(bodyParser.urlencoded({ extended: true }));

        server.applyMiddleware({ app: application });

        // const httpServer = http.createServer(application);
        // server.installSubscriptionHandlers(httpServer);

        return application;
    }
}