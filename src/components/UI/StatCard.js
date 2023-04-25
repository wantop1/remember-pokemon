import styled from "styled-components";
import Card from "../UI/Card";
import Flex from "./Flex";
import ruler from "../../assets/ruler.svg";
import scale from "../../assets/scale.svg";
import {LIGHT_TEXT_COLOR} from '../../constants/color';

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

const StatCard = ({
  id,
  name,
  types,
  Statdata,
  height,
  weight,
  description,
}) => {
  return (
    <Card width="25rem">
      <Flex>
        <IdTypography>{"#" + id.toString().padStart(3, "0")}</IdTypography>
        <NameTypography>{name}</NameTypography>
        <Flex center margin='0 0 0 auto'>{types}</Flex>
      </Flex>

      <Flex height="70%">
        <Radar data={Statdata} />
      </Flex>

      <Flex center>
        <Flex center>
          <img src={ruler} alt="ruler" />
          <StyledSpan>{height}</StyledSpan>
        </Flex>
        <Flex center>
          <img src={scale} alt="scale" />
          <StyledSpan>{weight}</StyledSpan>
        </Flex>
      </Flex>
      <StyledDiv>{description}</StyledDiv>
    </Card>
  );
};

export default StatCard;
