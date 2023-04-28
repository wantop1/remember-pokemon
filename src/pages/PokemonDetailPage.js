import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../apis/pokemon";
import styled from 'styled-components';
import Flex from "../components/UI/Flex";
import StatCard from "../components/UI/StatCard";
import GifProgress from "../components/UI/GifProgress";
import pikachuGif from "../assets/pikachu-progress.gif";


const DesktopImage = styled.img`
@media screen and (max-width: 1024px) {
  display : none;
}
`
const PokemonDetailPage = () => {
  const params = useParams();
  const { id } = params;
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
        setIsLoading(false);
      } catch (error) {
        console.log(`Error occurred while fetching Pokemon data: ${error}`);
      }
    }

    fetchPokemon();
  }, [id]);

  if (isLoading) {
    return (
      <Flex height='100vh'>
        <GifProgress
          width="15rem"
          src={pikachuGif}
          text="Loading..."
          fontSize="1.5rem"
        />
      </Flex>
    );
  }

  const { name, weight, height, stats, types, description, image } =
    pokemonInfo;

  const Statdata = {
    labels: stats.labels,
    datasets: [
      {
        label: "label",
        data: stats.values,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Flex height='100vh' margin='3.5rem 0'>
      <DesktopImage alt="pokemon-img" src={image}/>
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
    </Flex>
  );
};

export default PokemonDetailPage;
