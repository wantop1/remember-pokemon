import styled from "styled-components";
import ImageButton from "./ImageButton";
import menu from "../../../assets/menu.svg";

const StyledContainer = styled.div`
@media screen and (min-width: 1024px) {
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
