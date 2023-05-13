import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NAV_ACTIVE_COLOR } from "../../../constants/color";
import { DESKTOP_BREAKPOINT_NUMBER } from "../../../constants/number";

const StyledNav = styled.nav`
  display: none;

  @media screen and (min-width: ${DESKTOP_BREAKPOINT_NUMBER}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
  }
`;

const StylenNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &.active {
    background-color: ${NAV_ACTIVE_COLOR};
  }
`;

const DesktopNavigator = () => {
  return (
    <StyledNav>
      <StylenNavLink to="/">Home</StylenNavLink>
      <StylenNavLink to="/about">About</StylenNavLink>
      <StylenNavLink to="/pokemon">포켓몬 도감</StylenNavLink>
      <StylenNavLink to="/etc">ETC</StylenNavLink>
    </StyledNav>
  );
};

export default DesktopNavigator;
