import styled from "styled-components";
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

const BasicForm = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default BasicForm;
