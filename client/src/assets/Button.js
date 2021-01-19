import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  padding: 1em 1em;
  background-color: #d9cc16;
  border: 1px solid #343c5a;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Brush Script MT';
  font-style: italic;
  font-size: 1.2rem;
  color: #343c5a;

  @media (min-width: 45.563em) and (max-width: 61.312em) {
    width: 100%;
    border-radius: 5px;
  }

  @media (min-width: 61.313em) {
    width: 100%;
    border-radius: 5px;
  }
`