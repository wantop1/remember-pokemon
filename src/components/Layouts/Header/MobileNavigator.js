import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HEADER_BG_COLOR } from "../../../constants/color";
import { NAV_ACTIVE_COLOR } from "../../../constants/color";

const StyledNav = styled.nav`
  display: ${(props) => (props.isOpened ? "block" : "none")};
  width: 100vw;
  background-color: ${HEADER_BG_COLOR};
  position: fixed;
  left: 0;
  top: 3.5rem;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const StylenNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
  padding: 1rem 0;

  &.active {
    background-color: ${NAV_ACTIVE_COLOR};
  }
`;

const MobileNavigator = ({isOpened, close})=> {
  return(
      <StyledNav isOpened={isOpened}>
        <StylenNavLink to='/' onClick={close}>Home</StylenNavLink>
        <StylenNavLink to="/about" onClick={close}>About</StylenNavLink>
        <StylenNavLink  to='/pokemon' onClick={close}>포켓몬 도감</StylenNavLink>
         <StylenNavLink to="/etc" onClick={close}>ETC</StylenNavLink>
     </StyledNav>
  )
}

export default MobileNavigator;
