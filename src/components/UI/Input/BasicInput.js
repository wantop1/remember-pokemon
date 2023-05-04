import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  margin : 0.5rem;
  padding: 0.5rem 0.5rem;
  text-align: left;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

const BasicInput = () => {
  return <StyledInput />
};

export default BasicInput;
