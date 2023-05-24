import { useEffect } from "react";
import PokeList from "../components/Pokemon/PokeList";
import Grid from "../components/UI/Grid";
import PokemonItemSkeleton from "../components/UI/Skeleton/PokemonItemSkeleton";
import { FETCH_LIMIT_NUMBER } from "../constants/number";
import { fetchPokemonList } from "../store/pokemon";
import { useSelector, useDispatch } from "react-redux";
import useIntersectionObserver from "../hooks/use-intersection-observer";

const skeletonList = Array.from({ length: FETCH_LIMIT_NUMBER }, (_, index) => (
  <PokemonItemSkeleton key={index} />
));

const PokemonPage = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, offset } = useSelector((state) => state.pokemon);

  const intersectionHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && offset) {
      dispatch(fetchPokemonList(offset));
    }
  };

  const observerRef = useIntersectionObserver(intersectionHandler, {threshold: 0.5,});

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(fetchPokemonList(offset));
    }
  }, [dispatch, offset, pokemons.length]);

  if (isLoading && offset === 0) {
    return <Grid>{skeletonList}</Grid>;
  }

  return (
    <>
      <PokeList pokemons={pokemons} />
      <div ref={observerRef} />
    </>
  );
};

export default PokemonPage;
