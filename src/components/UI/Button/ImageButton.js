import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledImage = styled.img`
  padding: ${(props) => props.padding || "0"};
  height: ${(props) => props.height || "2.5rem"};
`;

const ImageButton = ({ src, alt, height, padding,onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={src} alt={alt} height={height} padding={padding} />
    </StyledButton>
  );
};

export default ImageButton;
