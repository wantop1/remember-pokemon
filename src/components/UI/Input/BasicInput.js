import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  max-width: 25rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;

  border: none;

  &:focus {
    outline: none;
  }
`;

const BasicInput = ({ value, onChange, onBlur }) => {
  return <StyledInput value={value} onChange={onChange} onBlur={onBlur} />;
};

export default BasicInput;
