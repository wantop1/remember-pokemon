import styled from "styled-components";
import { BACKDROP_COLOR } from "../../constants/color";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  margin: 0 0 3.5rem 0;
  background: ${BACKDROP_COLOR};
`;

const Backdrop = () => {
  return <StyledBackdrop />;
};

export default Backdrop;
