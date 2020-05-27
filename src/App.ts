import dotenv from "dotenv";
import express from "express";

dotenv.config();

/**
 * Express App class
 */
export default class App {
    /**
     * Create application
     */
    static createApplication() {
        const application = express();
        application.set("port", process.env.PORT || 3000);

        return application;
    }
}