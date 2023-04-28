import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  background-color: ${(props) => props.backgroundColor};
`;

const Flex = ({ width, height, margin, justifyContent, alignItems, backgroundColor, children }) => {
  return (
    <StyledFlex
      width={width}
      height={height}
      margin={margin}
      justifyContent={justifyContent}
      alignItems={alignItems}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
