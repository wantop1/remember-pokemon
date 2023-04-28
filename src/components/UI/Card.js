import styled from "styled-components";
import { CARD_BORDER_COLOR } from "../../constants/color";
const StyledCard = styled.div`
  position : ${props=>props.position || "static"};
  width : ${props=>props.width || "20rem"};
  min-width : 15rem;
  padding : ${props=>props.padding || "1rem"};
  margin : ${props=>props.margin || "0"};
  border-radius: 0.5rem;
  border: 1px solid ${CARD_BORDER_COLOR};
  cursor : pointer;
  background-color #FFF;
  transition: transform 0.3s;
  box-shadow : 5px 10px 15px -3px rgba(0, 0, 0, 0.1);

    &:hover {
      transform : ${props=>props.hover ? "translateY(-0.5rem)" : ""};
    }
`;

const Card = ({ position, width, padding, margin, hover, children }) => {
  return <StyledCard position={position} width={width} padding={padding} margin={margin} hover={hover}>{children}</StyledCard>;
};

export default Card;
