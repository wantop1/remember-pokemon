import styled from "styled-components";
import { CARD_BORDER_COLOR } from "../../../constants/color";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem;
  text-align: left;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 2px solid ${CARD_BORDER_COLOR};

  &:focus {
    outline: none;
  }
`;

const BasicInput = () => {
  return <StyledInput />
};

export default BasicInput;
