const { RESTDataSource } = require('apollo-datasource-rest');

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes';
  }

  //Category Data fetching method
  async getAllCategories() {
    const response = await this.get('/categories');
    return Array.isArray(response)
      ? response.map(category => this.categoryReducer(category))
      : [];
  }

  categoryReducer(category) {
    
    return {
      name: category,
      content: category.value,
      id: category.id,
    };
  }

  async randomJokeByCategory({ category }) {
    const response = await this.get('/random?', { category: category });
    return this.categoryReducer(response);
  }
  
}

module.exports = JokesAPI;
