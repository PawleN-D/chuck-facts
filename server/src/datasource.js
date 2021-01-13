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
      ? response.map(joke => this.jokeReducer(joke))
      : [];
  }

  async getRandomByCategory({ category }) {
    const response = await this.get(`/random?${category}`);
    return this.jokeReducer(Math.floor(Math.random() * response));
  }

  // async getMovie(id) {
  //   return this.get(`movies/${id}`);
  // }
  jokeReducer(joke) {
    console.log(joke)
    return {
      id: joke.id || 0,
      category: joke.category,
      joke: joke.value,
    };
  }
  
  
}

module.exports = JokesAPI;
