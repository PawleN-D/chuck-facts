import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";


export const GET_JOKE = gql`
  query GetRandomJoke($category: String!) {
    joke(category: $category) {
      content
    }
  }
`;

const Joke = ({ category }) => {
  const { data, loading, error } = useQuery(GET_JOKE, {
    variables: { category }
  });

  if (loading) return <p>Loading. Please Wait!</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      Hello
    </div>
  )
};

export default Joke;
