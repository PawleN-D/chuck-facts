import React from 'react';
import { useQuery, gql } from '@apollo/client';

const ALL_CATEGORIES = gql`
  query getAllCategories {
    categories {
      name
    }

    joke {
      id
      content
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_CATEGORIES);
  // Conditions and error handling
  if(loading) return <p>Loading...</p>
  if (error) return <p>Its a glitch!</p>
  return (
    <>
      <h2>Chuck Norris Facts Categories</h2>
      {data.allCategories.map(({ category }, id) => (
        <p key={id}>{category.name}</p>
      ))}
    </>
  );
}

export default App;
