import styled from "styled-components";
import Flex from "../components/UI/Flex";
import { REACT_LOGO_URL } from "../constants/image";
import { REDUX_LOGO_URL } from "../constants/image";
import { THREE_LOGO_URL } from "../constants/image";
import { CHART_LOGO_URL } from "../constants/image";
import { NETLIFY_LOGO_URL } from "../constants/image";
import { GIT_LOGO_URL } from "../constants/image";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin : 2rem 0;
`;

const StyledItem = styled.div`
  padding: 0.5rem;
`;

const StyledImage = styled.img`
  width: 3rem;
`;
const About = () => {
  return (
    <Flex height="100vh" margin="3.5rem 0" flexDirection="column">
      <h1>사용 기술</h1>
      <StyledGrid>
        <StyledItem>
          <StyledImage src={REACT_LOGO_URL} alt="react-logo" />
        </StyledItem>
        <StyledItem>
          <StyledImage src={REDUX_LOGO_URL} alt="redux-logo" />
        </StyledItem>
        <StyledItem>
          <StyledImage src={THREE_LOGO_URL} alt="three-logo" />
        </StyledItem>
        <StyledItem>
          <StyledImage src={CHART_LOGO_URL} alt="chart-logo" />
        </StyledItem>
        <StyledItem>
          <StyledImage src={GIT_LOGO_URL } alt="git-logo" />
        </StyledItem>
        <StyledItem>
          <StyledImage src={NETLIFY_LOGO_URL} alt="netlify-logo" />
        </StyledItem>
      </StyledGrid>
    </Flex>
  );
};

export default About;
