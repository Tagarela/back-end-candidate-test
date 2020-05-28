import db from "../../../database";
import { DataObj } from "database";

/**
 * User Queries
 */
const UserQueries = {
    users: async (): Promise<any> => {
        try {
            const users = db.get('users');
            if ( !users ) {
                throw new Error('data doesn\'t exist');
            }
            return users.map(({ id, name, created}: { id: string, name: string, created: string}) => ({
                id, name, created
            }));
        } catch (error) {
            throw error;
        }
    },
    user: async(context: any, args: DataObj): Promise<any> => {
        const id = args.id;
        const users: DataObj = db.get('users');
        return users.filter((user: DataObj) => user.id === id)[0];
    }
};

export { UserQueries };