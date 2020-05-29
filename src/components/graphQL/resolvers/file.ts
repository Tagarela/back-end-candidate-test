import { DataObj } from "database";
import { MinIoService } from "../../../services/storage/MinIOService";

/**
 * User Queries
 */
const FileMutation = {
    saveToTheFile: async (context: any, args: DataObj): Promise<any> => {
        try {
            const data = args.data;
            const fileName = args.filename;
            const storageService = new MinIoService();
            await storageService.init();
            await storageService.saveDataToTheFile(fileName, data);
            const url = await storageService.getFileLink(fileName);

            return {
                url: url
            };
        } catch (e) {
            throw e;
        }
    }
};

export { FileMutation };