import styled from "styled-components";

const StyledBadge = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #FFF;
  padding: 0 0.75rem;
  margin-right: 0.25rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.backgroundColor};
`;

const Badge = ({ children, backgroundColor }) => {
  return (
    <StyledBadge backgroundColor={backgroundColor}> {children} </StyledBadge>
  );
};

export default Badge;
