import styled from "styled-components";
import { HEADER_BG_COLOR } from "../../../constants/color";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: ${props=>props.isOpen ? "10rem" : "3.5rem"};
  padding: 0 1rem;
  box-sizing: border-box;
  background-color: ${HEADER_BG_COLOR};
  overflow: hidden;
`;

const MainHeader = ({ isOpen,children }) => {
  return <StyledHeader isOpen={isOpen}>{children}</StyledHeader>;
};

export default MainHeader;
