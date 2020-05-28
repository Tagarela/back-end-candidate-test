import { Client } from "minio";
import dotenv from "dotenv";

dotenv.config();

/**
 * MinIo service
 */
export class MinIoService {

    private client: Client;
    readonly bucketName: string;

    public constructor() {
        this.client = new Client({
            endPoint: process.env["MINIO_STORAGE_HOST"],
            port: parseInt(process.env['MINIO_STORAGE_PORT']),
            useSSL: false,
            accessKey: process.env['MINIO_STORAGE_ACESS_KEY'],
            secretKey: process.env['MINIO_STORAGE_SECRET_KEY']
        });

        this.bucketName = process.env['MINIO_STORAGE_BUCKET'];
    }

    /**
     * init bucket
     */
    public async init(): Promise<void> {
        const isBucketExist = await this.client.bucketExists(this.bucketName);
        /*** Create Bucket if not exist ***/
        if (!isBucketExist) {
            await this.client.makeBucket(this.bucketName, 'us-east-1');
        }
    }

    /**
     * Save file to the storage
     *
     * @param data
     */
    public async saveFile(fileName: string, data: string): Promise<boolean> {
        await this.client.putObject(this.bucketName, fileName, data);

        return true;
    }

    /**
     * Get Data from file
     *
     * @param fileName
     */
    public async getDataFromFile(fileName: string): Promise<string> {
        const isFileExist = await this.checkFileExist(fileName);
        if (!isFileExist) {
            return '';
        }
        const fileDataStream = await this.client.getObject(this.bucketName, fileName);

        return new Promise((resolve, reject) => {
            let data = "";
            fileDataStream.on("data", chunk => data += chunk);
            fileDataStream.on("end", () => resolve(data));
            fileDataStream.on("error", error => reject(error));
        });
    }

    /**
     * Add data to the file
     *
     * @param string fileName
     * @param string data
     *
     */
    public async saveDataToTheFile(fileName: string, data: string): Promise<void> {
        let fileData: string = await this.getDataFromFile(fileName);
        fileData = fileData + data;
        await this.saveFile(fileName, fileData);
    }

    /**
     * Check is file exist in the storage
     *
     * @param string fileName
     */
    public async checkFileExist(fileName: string): Promise<boolean> {
        try {
            await this.client.statObject(this.bucketName, fileName);
            return true;
        } catch (e) {
            if (e.code == "NotFound") {
                return false;
            } else {
                throw e;
            }
        }
    }

    /**
     * Get persist file link
     *
     * @param fileName
     */
    public async getFileLink(fileName: string): Promise<string|boolean> {
        const isFileExist = await this.checkFileExist(fileName);
        if (!isFileExist) {
           return false;
        }
        return await this.client.presignedGetObject(this.bucketName, fileName);
    }
}
