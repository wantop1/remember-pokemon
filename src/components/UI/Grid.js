import styled from "styled-components";
import { DESKTOP_BREAKPOINT_NUMBER } from "../../constants/number";
import { TABLET_BREAKPOINT_NUMBER } from "../../constants/number";
import { LARGE_BREAKPOINT_NUMBER } from "../../constants/number";

const StyledGrid = styled.ul`
  display: grid;
  padding : 1rem 0;
  margin-top : 3.5rem;
  place-items : center;
  overflow : auto;
  grid-gap: 0.5rem;

  @media screen and (min-width: ${TABLET_BREAKPOINT_NUMBER}px) {
      grid-template-columns: repeat(2, 1fr);
    }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT_NUMBER}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${LARGE_BREAKPOINT_NUMBER}px) {
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  }
`;

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;
