import styled from "styled-components";

const StyledGrid = styled.ul`
  display: grid;
  padding : 1rem 0;
  margin-top : 3.5rem;
  place-items : center;
  overflow : auto;

  grid-gap: 0.5rem;
  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  }
`;

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;
