import { ApolloServerExpressConfig } from 'apollo-server-express';
import resolvers from '../resolvers/index';
import typeDefs from '../types/index';

const schema: ApolloServerExpressConfig = {
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
};

export default schema;