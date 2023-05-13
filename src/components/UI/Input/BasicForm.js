import styled from "styled-components";

const StyledForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  position: relative;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const StyledFormMobile = styled(StyledForm)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    margin: 0;
  }

  & > input {
    width: 100%;
    margin: 0 0.5rem;
    max-width: 35rem;
  }

  & > div {
    left: auto;
    max-width: 35rem;
  }
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const BasicForm = ({ onSubmit, children, mobile }) => {
  const Form = mobile ? StyledFormMobile : StyledForm;
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

export default BasicForm;
