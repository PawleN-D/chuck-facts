import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Joke from './Joke';

// import Header from "./components/Header"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/random" component={Joke} />
      </Switch>
      </Router>
    </ApolloProvider>,
  document.getElementById('root')
);
