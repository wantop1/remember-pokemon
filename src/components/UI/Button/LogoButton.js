import styled from "styled-components";
import ImageButton from "./ImageButton";
import { POKEMON_LOGO_URL } from "../../../constants/image";

const StyledContainer = styled.div`
@media screen and (max-width: 1024px) {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoButton = () => {
  return (
    <StyledContainer>
      <ImageButton src={POKEMON_LOGO_URL} alt="logo"/>
    </StyledContainer>
  );
};

export default LogoButton;
