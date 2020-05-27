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
    public async saveFile(data: Buffer): Promise<boolean> {

        return true;
    }
}
