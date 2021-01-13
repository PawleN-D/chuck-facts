const { RESTDataSource } = require('apollo-datasource-rest');

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/random';
  }

  //Data fetching methods
  async getAllCategories() {
    const response = await this.get('/category');
    return Array.isArray(response)
      ? response.map(joke => this.jokeReducer(joke))
      : [];
  }

  async getRandomByCategory({ category }) {
    const response = await this.get(`/ramdon?${category}`);
    return this.jokeReducer(Math.floor(Math.random() * response));
  }

  async getMovie(id) {
    return this.get(`movies/${id}`);
  }
  jokeReducer(joke) {
    return {
      id: joke.id|| 0,
      category: joke.category,
      joke: joke.value,
    };
  }
  
  
}

module.exports = JokesAPI;
