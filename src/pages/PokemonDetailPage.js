import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../apis/pokemon";
import styled from "styled-components";
import Flex from "../components/UI/Flex";
import StatCard from "../components/UI/StatCard";
import { STAT_BG_COLOR } from "../constants/color";
import { STAT_BORDER_COLOR } from "../constants/color";
import { DESKTOP_BREAKPOINT_NUMBER } from "../constants/number";
import PokemonInfoSkeleton from "../components/UI/Skeleton/PokemonInfoSkeleton";
import {StyledSkeletonElement} from "../components/UI/Skeleton/SkeletonElement";
import { useSelector } from "react-redux";

const DesktopImage = styled.img`
  display: none;

  @media screen and (min-width: ${DESKTOP_BREAKPOINT_NUMBER}px) {
    display: inline-block;
  }
`;

const DesktopImageSkeleton = styled(StyledSkeletonElement)`
  display: none;

  @media screen and (min-width: ${DESKTOP_BREAKPOINT_NUMBER}px) {
    display: block;
  }
`;
const PokemonDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const { scrollY } = useSelector((state)=>state.scroll);

  const [pokemonInfo, setPokemonInfo] = useState({
    id: "",
    name: "",
    weight: "",
    height: "",
    description: "",
    types: [],
    stats: [],
    image: "",
  });

  const [isLoading, setIsLoading] = useState(null);
  
  useEffect(() => {
    async function fetchPokemon() {
      try {
        setIsLoading(true);
        const pokemonInfo = await getPokemon(id);
        setPokemonInfo(pokemonInfo);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.log(`Error occurred while fetching Pokemon data: ${error}`);
      }
    }

    fetchPokemon();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0,scrollY);
  }, [scrollY]);

  const { name, weight, height, stats, types, description, image } =
    pokemonInfo;

  const Statdata = {
    labels: stats.labels,
    datasets: [
      {
        label: "label",
        data: stats.values,
        backgroundColor: STAT_BG_COLOR,
        borderColor: STAT_BORDER_COLOR,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Flex height="100vh" margin="3.5rem 0">
      {isLoading ? <DesktopImageSkeleton width="30rem" height="30rem" /> : <DesktopImage alt="pokemon-img" src={image} />}
      {isLoading ? (
        <PokemonInfoSkeleton />
      ) : (
        <StatCard
          id={id}
          name={name}
          types={types}
          Statdata={Statdata}
          height={height}
          weight={weight}
          description={description}
          src={image}
        />
      )}
    </Flex>
  );
};

export default PokemonDetailPage;
