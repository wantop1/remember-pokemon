import { useEffect, useRef } from "react";
import PokeList from "../components/Pokemon/PokeList";
import Grid from "../components/UI/Grid";
import PokemonItemSkeleton from "../components/UI/Skeleton/PokemonItemSkeleton";
import { FETCH_LIMIT_NUMBER } from "../constants/number";
import { fetchPokemonList} from "../store/pokemon";
import { useSelector, useDispatch } from "react-redux";

const skeletonList = Array.from({ length: FETCH_LIMIT_NUMBER }, (_, index) => (
  <PokemonItemSkeleton key={index} />
));

const PokemonPage = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, offset } = useSelector((state) => state.pokemon);
  const observerRef = useRef(null);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(fetchPokemonList(offset));
    }
  }, [dispatch,offset,pokemons.length]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && offset) {
        dispatch(fetchPokemonList(offset));
      }
    }, options);

    const current = observerRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [offset, dispatch]);

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
