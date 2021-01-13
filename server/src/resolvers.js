module.exports = {
    Query: {
      jokes: (_, __, { dataSources }) =>
        dataSources.jokesAPI.getAllCategories(),
      joke: (_, { id }, { dataSources }) =>
        dataSources.jokesAPI.getRandomById({ category: String }),
    }
  };
  