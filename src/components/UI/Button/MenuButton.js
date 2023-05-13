import styled from "styled-components";
import ImageButton from "./ImageButton";
import menu from "../../../assets/menu.svg";
import { DESKTOP_BREAKPOINT_NUMBER } from "../../../constants/number";

const StyledContainer = styled.div`
display : block;
  
@media screen and (min-width: ${DESKTOP_BREAKPOINT_NUMBER}px) {
  display : none;
  }
`;


const MenuButton = ({onClick}) => {
  const onClickHandler = ()=> {
    onClick();
  }

  return (
    <StyledContainer>
      <ImageButton onClick={onClickHandler} src={menu} alt="menu" />
    </StyledContainer>
  );
};

export default MenuButton;
