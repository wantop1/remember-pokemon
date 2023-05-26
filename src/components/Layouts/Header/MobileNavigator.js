import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HEADER_BG_COLOR } from "../../../constants/color";
import { NAV_ACTIVE_COLOR } from "../../../constants/color";
import PokemonSearchInput from "../../UI/Input/PokemonSearchInput";
import { DESKTOP_BREAKPOINT_NUMBER } from "../../../constants/number";

const StyledNav = styled.nav`
  display: ${(props) => (props.isOpened ? "block" : "none")};
  width: 100vw;
  background-color: ${HEADER_BG_COLOR};
  position: fixed;
  left: 0;
  top: 3.5rem;
  z-index : 999;

  @media screen and (min-width: $${DESKTOP_BREAKPOINT_NUMBER}px) {
    display: none !important;
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
        <PokemonSearchInput mobile={true} closeMenu={close}/>
        <StylenNavLink to='/' onClick={close}>Home</StylenNavLink>
        <StylenNavLink to="/about" onClick={close}>About</StylenNavLink>
        <StylenNavLink  to='/pokemon' onClick={close}>포켓몬 도감</StylenNavLink>
         <StylenNavLink to="/etc" onClick={close}>ETC</StylenNavLink>
     </StyledNav>
  )
}

export default MobileNavigator;
