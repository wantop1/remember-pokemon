import styled from "styled-components";

const StyledHeader = styled.header`
    width : 100vw;
    height : 3.5rem;
    background-color : #ef5350;
    overflow : hidden;
`

const MainHeader = ({ children }) => {
    return <StyledHeader>{children}</StyledHeader>;
  };
  
  export default MainHeader;
 