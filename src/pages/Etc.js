import preparing from "../assets/preparing.jpg";
import styled from "styled-components";
import Flex from "../components/UI/Flex";

const StyledImg = styled.img`
  width: 15rem;
`;

const Etc = () => {
  return (
    <Flex height="100vh" margin="3.5rem 0" flexDirection="column">
      <div>
        <StyledImg src={preparing} alt="preparing" />
      </div>
      <h1>준비중</h1>
    </Flex>
  );
};

export default Etc;
