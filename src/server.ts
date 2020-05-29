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

    console.log(`  App is running at http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

// import {MinIoService} from "./services/storage/MinIOService";
//
// (async () => {
//     const minio = new MinIoService();
//     const url = await minio.getFileLink('test.txt');
//     console.log(url);
// })();