const { gql } = require('apollo-server');

const typeDefs = gql`
  #Schema will go here
  type Jokes {
    id: ID!
    category: [String]!
    joke: String!
    date: String
  }

  type Query {
    jokes: [Jokes]!
    joke(category: String!): Jokes
  }
  
`;

module.exports = typeDefs;
