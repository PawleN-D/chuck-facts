import styled from '@emotion/styled';

export const TextContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

${'' /* Smaller Devices i.e Tablets */}
  @media (min-width: 45.563em) and (max-width: 61.312em) {
    grid-template-columns: repeat(2, 1fr);
  }

${'' /* Bigger Devices i.e Desktops and Laptop */}
  @media (min-width: 61.313em) {
    grid-template-columns: repeat(3, 1fr);
  }


`
export const CardContainer = styled.div`
  background-color: #d1d1d1;
  color: #343c5a;
  padding: 2.2rem;
  height: 100%;
  box-shadow: 6px 10px 20px 0px rgba(0,0,0,0.65);


  @media (min-width: 45.563em) and (max-width: 61.312em) {
    width: 100%;
  }

}


`