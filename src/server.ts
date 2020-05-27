import App from "./App";

const app = App.createApplication();

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    process.on("unhandledRejection", (exception) => {
        process.exit(1);
    });
    process.once('SIGTERM', function (sig) {
        process.exit(1);
    });
    process.on("uncaughtException", (exception) => {
        process.exit(1);
    });
});

// import {MinIoService} from "./services/storage/MinIOService";
//
// const minioService = new MinIoService();
// minioService.init();
// // console.log(minioService);