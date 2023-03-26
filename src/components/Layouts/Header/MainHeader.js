import styled from "styled-components";

const StyledHeader = styled.header`
    width : 100%;
    height : 3.5rem;
    background-color : #ef5350;
`

const MainHeader = ({ children }) => {
    return <StyledHeader>{children}</StyledHeader>;
  };
  
  export default MainHeader;
 