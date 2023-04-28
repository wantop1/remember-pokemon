import styled from "styled-components";
import Card from "../UI/Card";
import Flex from "./Flex";
import ruler from "../../assets/ruler.svg";
import scale from "../../assets/scale.svg";
import { LIGHT_TEXT_COLOR,CARD_BORDER_COLOR } from "../../constants/color";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const StyledSpan = styled.span`
  margin: 0 0.5rem;
`;

const StyledDiv = styled.div`
  margin: 0 0.5rem;
`;

const IdTypography = styled.div`
  color: ${LIGHT_TEXT_COLOR};
  margin: auto 0.5rem;
`;

const NameTypography = styled.div`
  font-size: 1.5rem;
`;

const MobileImageContainer = styled.div`
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: -4rem;
`;

const MobileImage = styled.img`
  width: 5rem;
  background-color: #fff;
  border: ${`1px solid ${CARD_BORDER_COLOR}`};
  border-radius: 50%;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const StatCard = ({
  id,
  name,
  types,
  Statdata,
  height,
  weight,
  description,
  src,
}) => {
  return (
    <Card width="25rem" margin="0 2rem" position="relative">
      <MobileImageContainer>
        <MobileImage src={src} alt="pokemon-img" />
      </MobileImageContainer>
      <Flex>
        <IdTypography>{"#" + id.toString().padStart(3, "0")}</IdTypography>
        <NameTypography>{name}</NameTypography>
        <Flex margin="0 0 0 auto">{types}</Flex>
      </Flex>

      <Flex height="70%">
        <Radar data={Statdata} />
      </Flex>

      <Flex>
        <Flex>
          <img src={ruler} alt="ruler" />
          <StyledSpan>{height}</StyledSpan>
        </Flex>
        <Flex>
          <img src={scale} alt="scale" />
          <StyledSpan>{weight}</StyledSpan>
        </Flex>
      </Flex>
      <StyledDiv>{description}</StyledDiv>
    </Card>
  );
};

export default StatCard;
