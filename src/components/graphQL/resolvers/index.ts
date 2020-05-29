import { UserQueries } from './user';
import { ProductQueries } from './product';
import { ProgramQueries } from './program';
import { TransactionQueries } from './transaction';
import { FileMutation } from './file';

const rootResolver = {
    Query: {
        ...UserQueries,
        ...ProductQueries,
        ...ProgramQueries,
        ...TransactionQueries
    },
    Mutation: {
        ...FileMutation
    },
    // Subscription: {
    //
    // }
};

export default rootResolver;