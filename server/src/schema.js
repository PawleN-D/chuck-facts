const { gql } = require('apollo-server');

const typeDefs = gql`
  #Schema will go here
  type Categories {
    category: String  

  }

  type Joke {
    id: ID!
    content: String!
    category: String!
  }

  type Query {
    categories: [Categories]
    joke(category: String!): Joke
  }
  
`;

module.exports = typeDefs;
