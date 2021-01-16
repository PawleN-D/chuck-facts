import React, { Fragment } from "react";
import { useQuery, gql } from '@apollo/client';
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import CategoryTile from "./components/Categorytile";
import Header from "./components/Header";
import Joke from './Joke';


export const GET_CATEGORIES = gql`
  query GetCategoryList {
    categories {
      name
    }
  }
`;



const Categories = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading</p>
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header />
      {data.categories &&
        data.categories &&
        data.categories.map((category, index)=> (
          <CategoryTile key={index} category={category.name} />
        ))}
    </Fragment>

  );
};

export default withRouter(Categories);
