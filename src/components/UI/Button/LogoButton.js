import styled from "styled-components";
import ImageButton from "./ImageButton";
import { Link } from "react-router-dom";
import { POKEMON_LOGO_URL } from "../../../constants/image";
import { DESKTOP_BREAKPOINT_NUMBER } from "../../../constants/number";

const StyledContainer = styled.div`
  display : flex;
  height : 100%;
  align-items : center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
 
  @media screen and (min-width: ${DESKTOP_BREAKPOINT_NUMBER}px) {
    position: static;
    transform: translateX(0);
`;

const LogoButton = () => {
  return (
    <StyledContainer>
      <Link to="/">
        <ImageButton src={POKEMON_LOGO_URL} alt="logo" />
      </Link>
    </StyledContainer>
  );
};

export default LogoButton;
