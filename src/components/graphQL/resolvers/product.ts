import db from "../../../database";
import { DataObj } from "database";

/**
 * User Queries
 */
const ProductQueries = {
    products: async (): Promise<any> => {
        try {
            const products = db.get('products');
            if ( !products ) {
                throw new Error('data doesn\'t exist');
            }
            return products.map(({ id, program_id, start, end, price}: {
                id: string,
                program_id: string,
                start: string,
                end: string,
                price: number
            }) => ({ id, program_id, start, end, price }));
        } catch ( error ) {
            throw error;
        }
    },
    product: async(context: any, args: DataObj): Promise<any> => {
        const id = args.id;
        const products: DataObj = db.get('products');
        return products.filter((product: DataObj) => product.id === id)[0];
    }
};

export { ProductQueries };