import styled from "styled-components";

const StyledGrid = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
grid-auto-rows: minmax(100px, auto);
`;

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;