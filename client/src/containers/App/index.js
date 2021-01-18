import React, { Fragment } from "react";
import { useQuery, gql } from '@apollo/client';
import { withRouter } from "react-router";
import CategoryTile from "../../components/CategoryTile";
import Header from "../../components/Header";
import { TextContainer } from "../../assets/Card";



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
      <TextContainer>
        {data.categories &&
        data.categories &&
        data.categories.map((category, index)=> (
          <CategoryTile key={index} category={category.name} />
        ))}
      </TextContainer>
    </Fragment>

  );
};

export default withRouter(Categories);
