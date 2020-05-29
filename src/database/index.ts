import { DataObj } from "database";
import data from "../fixtures/fixtures";

/**
 * Database example class
 */
class Database {

    readonly dataObj: DataObj;

    /**
     * constructor
     */
    constructor() {
        this.dataObj = data;
    }

    /**
     * Get data from file
     *
     * @param string key
     */
    public get(key: string) {
        if (key in this.dataObj) {
            return this.dataObj[key];
        }
        return false;
    }
}

const db = new Database();

export default db;