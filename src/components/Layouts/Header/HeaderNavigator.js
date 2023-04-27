import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NAV_ACTIVE_COLOR } from "../../../constants/color";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #FFF;
  @media screen and (max-width: 1024px) {
    display : none;
  }
`;

const StylenNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #FFF;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &.active {
    background-color: ${NAV_ACTIVE_COLOR};
  }
`;

const HeaderNavigator = () => {
  return (
    <StyledNav>
      <StylenNavLink to="/">Home</StylenNavLink>
      <StylenNavLink to="/about">About</StylenNavLink>
      <StylenNavLink to="/pokemon">포켓몬 도감</StylenNavLink>
      <StylenNavLink to="/etc">ETC</StylenNavLink>
    </StyledNav>
  );
};

export default HeaderNavigator;
