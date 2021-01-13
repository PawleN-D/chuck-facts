const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const JokesAPI = require('./datasources/launch');

const server = new ApolloServer({ typeDefs });
const server = new ApolloServer({
    typeDefs,
    dataSources: () => ({
      jokesAPI: new JokesAPI(),
      
    })
  });

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });
  