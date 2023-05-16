import { useState, useEffect } from "react";
import PokeList from "../components/Pokemon/PokeList";
import { getRandomPokemonList } from "../apis/pokemon";
import Grid from "../components/UI/Grid";
import PokemonItemSkeleton from "../components/UI/Skeleton/PokemonItemSkeleton";

import { FETCH_LIMIT_NUMBER } from "../constants/number";

const skeletonList = new Array(FETCH_LIMIT_NUMBER)
  .fill(null)
  .map((_, index) => <PokemonItemSkeleton key={index} />);

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        setIsLoading(true);
        const data = await getRandomPokemonList();
        setTimeout(() => {
          setPokemons(data);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemonList();
  }, []);

  return isLoading ? <Grid>{skeletonList}</Grid> : <PokeList pokemons={pokemons} />;
};

export default PokemonPage;
