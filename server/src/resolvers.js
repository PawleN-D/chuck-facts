module.exports = {
    Query: {
      categories: (_, __, { dataSources }) =>
        dataSources.jokesAPI.getAllCategories(),
      joke: (_, { id }, { dataSources }) =>
        dataSources.jokesAPI.getRandomByCategory({ category: String }),
    }
  };
  