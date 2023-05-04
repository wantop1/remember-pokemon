import { useState, useEffect } from "react";
import PokeList from "../components/Pokemon/PokeList";
import { getRandomPokemonList } from "../apis/pokemon";
import Flex from "../components/UI/Flex";
import pikachuGif from "../assets/pikachu-progress.gif";
import GifProgress from "../components/UI/GifProgress";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        setIsLoading(true);
        const data = await getRandomPokemonList();
        setPokemons(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemonList();
  }, []);

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

  return pokemons && <PokeList pokemons={pokemons} />;
};

export default PokemonPage;
