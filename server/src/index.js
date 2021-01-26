const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const JokesAPI = require("./datasource");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    jokesAPI: new JokesAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
      Server is running!
      Listening on port 4000!
    `);
});
