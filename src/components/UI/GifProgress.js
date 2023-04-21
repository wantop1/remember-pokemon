import styled from "styled-components";

const StyledProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const StyledText = styled.p`
  font-size: ${(props) => props.fontSize};
`;

const GifProgress = ({ src, width, height, text, fontSize }) => {
  return (
    <StyledProgress>
      <StyledImage src={src} width={width} height={height} />
      <StyledText fontSize={fontSize}>{text}</StyledText>
    </StyledProgress>
  );
};

export default GifProgress;
