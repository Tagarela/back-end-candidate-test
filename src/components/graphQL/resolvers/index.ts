import { UserQueries } from './user';
import { ProductQueries } from './product';
import { ProgramQueries } from './program';
import { TransactionQueries } from './transaction';

const rootResolver = {
    Query: {
        ...UserQueries,
        ...ProductQueries,
        ...ProgramQueries,
        ...TransactionQueries
    },
    // Mutation: {
    //
    // },
    // Subscription: {
    //
    // }
};

export default rootResolver;