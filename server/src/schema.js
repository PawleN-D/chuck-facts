const { gql } = require('apollo-server');

const typeDefs = gql`
  #Schema will go here
  type Category {
    name: String 
  }

  type Joke{
    id: ID!
    content: String!
    name: String!
    url: String!
  }

  type Query {
    categories: [Category]
    joke(category: String!): Joke
  }
  
`;

module.exports = typeDefs;
