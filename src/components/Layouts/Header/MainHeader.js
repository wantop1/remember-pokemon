import styled from "styled-components";
import { HEADER_BG_COLOR } from "../../../constants/color";

const StyledHeader = styled.header`
    display : flex;
    align-items : center;
    justify-content : space-between;
    width : 100vw;
    height : 3.5rem;
    background-color : ${HEADER_BG_COLOR};
    overflow : hidden;
`

const MainHeader = ({ children }) => {
    return <StyledHeader>{children}</StyledHeader>;
  };
  
  export default MainHeader;
 