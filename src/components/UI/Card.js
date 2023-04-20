import styled from "styled-components";
import { CARD_BORDER_COLOR } from "../../constants/color";
const StyledCard = styled.div`
  width : 20rem;
  height: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${CARD_BORDER_COLOR};
  overflow: hidden;
  cursor : pointer;
  background-color #FFF;
  transition: transform 0.3s;
  box-shadow : 5px 10px 15px -3px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-0.5rem);
    }
`;

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
