import styled from "styled-components";
import { DESKTOP_BREAKPOINT_NUMBER } from "../../../constants/number";

const StyledForm = styled.div`
  display : none;

  @media screen and (min-width: ${DESKTOP_BREAKPOINT_NUMBER}px) {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    position: relative;
  }
`;

const StyledFormMobile = styled(StyledForm)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    position: relative;
    margin: 0 1rem;
  }

  & > input {
    margin: 0 0.5rem;
  }

  & > div {
    width : 100%;
    left: auto;
  }
`;

const BasicForm = ({ onSubmit, children, mobile }) => {
  const Form = mobile ? StyledFormMobile : StyledForm;
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

export default BasicForm;
