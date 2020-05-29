import db from "../../../database";
import { DataObj } from "database";

/**
 * User Queries
 */
const ProgramQueries = {
    programs: async (): Promise<any> => {
        try {
            const programs = db.get('programs');
            if ( !programs ) {
                throw new Error('data doesn\'t exist');
            }
            return programs.map(({ id, title }: { id: string, title: string}) => ({ id, title }));
        } catch (error) {
            throw error;
        }
    },
    program: async(context: any, args: DataObj): Promise<any> => {
        const id = args.id;
        const programs: DataObj = db.get('programs');
        return programs.filter((program: DataObj) => program.id === id)[0];
    }
};

export { ProgramQueries };