import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.7;
  }
`;

export const StyledSkeletonElement = styled.div`
  width: ${(props) => props.width || "16rem"};
  height: ${(props) => props.height || "1rem"};
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  margin: ${(props) => props.margin || "0.5rem"};
  background-color: #E8E8E8;
  animation: ${skeletonLoading} 1s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }
`;

const SkeletonElement = ({ width, height,borderRadius,margin }) => {
  return <StyledSkeletonElement width={width} height={height} borderRadius={borderRadius} margin={margin}/>;
};

export default SkeletonElement;
