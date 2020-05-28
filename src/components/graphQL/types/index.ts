import { gql } from "apollo-server-express";

const typeDefs = gql`
   type Product {
        id: String
        program_id: String
        start: String
        end: String
        price: String
    }
    
    type Program {
        id: String
        title: String
    } 
      
    type Transaction {
        id: String
        timestamp: String
        product_id: String
        user_id: String
    }
    
    type User {
        id: String
        name: String
        created: String
    }
    
    type Query {
        products: [Product]
        product(id: String!): Product
        programs: [Program]
        program(id: String!): Program
        transactions: [Transaction]
        transaction(id: String!): Transaction
        users: [User]
        user(id: String!): User
    }
    
    type Mutation {
        saveToTheFile(filename: String, data: String): FileData
    }
            
    type FileData {
        url: String
    }
`;

export default typeDefs;