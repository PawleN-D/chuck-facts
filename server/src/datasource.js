const { RESTDataSource } = require('apollo-datasource-rest');

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes';
  }

  //Data fetching methods
  async getAllCategories() {
    const query = "/categories";
    const response = await this.get(query);
    // console.log(response);
    return response.map(category => category);
  }

  // async getRandomByCategory({ category }) {
  //   const response = await this.get(`/random?${category}`);
  //   return this.jokeReducer(Math.floor(Math.random() * response));
  // }

  // async getMovie(id) {
  //   return this.get(`movies/${id}`);
  // }
  categoryReducer(category) {
    console.log(category)
    return category[0] ;
  }
  
  
}

module.exports = JokesAPI;
