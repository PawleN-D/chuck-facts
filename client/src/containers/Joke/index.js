import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import JokeTile from "../../components/JokeTile";
import Header from "../../components/Header"


export const GET_JOKE = gql`
  query getJoke($category: String!) {
    joke(category: $category) {
      id
      content
    }
  }
`;

const Joke = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let category = params.get('category');
  
  const { data, loading, error } = useQuery(GET_JOKE, {
    variables: { category }
  });

  if (loading) return <p>Not found</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header>
        {data && data.joke && data.joke.id && data.joke.content}
      </Header>
      <JokeTile {...data.joke} />
    </Fragment>
  );
};

export default Joke;
