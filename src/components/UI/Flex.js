import styled, { css } from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};

  ${(props) =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

const Flex = ({ height, margin, center, children }) => {
  return (
    <StyledFlex height={height} margin={margin} center={center}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
