import styled from "styled-components";
import ImageButton from "./ImageButton";
import { Link } from "react-router-dom";
import { POKEMON_LOGO_URL } from "../../../constants/image";

const StyledContainer = styled.div`
  display : flex;
  height : 100%;
  align-items : center;

  @media screen and (max-width: 1023px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
