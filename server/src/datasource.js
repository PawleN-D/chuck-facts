const { RESTDataSource } = require('apollo-datasource-rest');

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes';
  }

  //Data fetching methods
  async getAllCategories() {
    const response = await this.get('/categories');
    return Array.isArray(response)
      ? response.map(category => this.categoryReducer(category))
      : [];
  }

  categoryReducer(category) {
  return {
    id: category[0],
    name: category
  };
}
  
}

module.exports = JokesAPI;
