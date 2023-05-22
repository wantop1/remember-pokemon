import {useEffect } from "react";
import PokeList from "../components/Pokemon/PokeList";
import { getRandomPokemonList } from "../apis/pokemon";
import Grid from "../components/UI/Grid";
import PokemonItemSkeleton from "../components/UI/Skeleton/PokemonItemSkeleton";

import { FETCH_LIMIT_NUMBER } from "../constants/number";

import { useSelector,useDispatch } from "react-redux";
import { pokemonActions } from "../store/pokemon";

const skeletonList = Array.from({ length: FETCH_LIMIT_NUMBER }, (_, index) => (
  <PokemonItemSkeleton key={index} />
));

const PokemonPage = () => {
  const dispatch = useDispatch();
  const {pokemons,isLoading} = useSelector(state=>state.pokemon);
  
  useEffect(() => {
    async function fetchPokemonList() {
      try {
        dispatch(pokemonActions.setIsLoading(true));
        const data = await getRandomPokemonList();
        dispatch(pokemonActions.setPokomons(data));
        dispatch(pokemonActions.setIsLoading(false));
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemonList();
  }, [dispatch]);

  return isLoading ? <Grid>{skeletonList}</Grid> : pokemons && <PokeList pokemons={pokemons} />;
};

export default PokemonPage;
