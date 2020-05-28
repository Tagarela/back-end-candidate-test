import db from "../../../database";
import { DataObj } from "database";

/**
 * User Queries
 */
const TransactionQueries = {
    transactions: async (): Promise<any> => {
        try {
            const transactions = db.get('transactions');
            if ( !transactions ) {
                throw new Error('data doesn\'t exist');
            }
            return transactions.map(({ id, timestamp, product_id, user_id }: {
                id: string, timestamp: string, product_id: string, user_id: string
            }) => ({ id, timestamp, product_id, user_id }));
        } catch (error) {
            throw error;
        }
    },
    transaction: async(context: any, args: DataObj): Promise<any> => {
        const id = args.id;
        const transactions: DataObj = db.get('transactions');
        return transactions.filter((transaction: DataObj) => transaction.id === id)[0];
    }
};

export { TransactionQueries };