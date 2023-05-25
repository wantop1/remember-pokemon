import PokeItem from "./PokeItem";
import { useSelector } from "react-redux";

const PokeList = () => {
  const { pokemons } = useSelector((state) => state.pokemon);
  
  const pokeList = pokemons.map((pokemon) => (
    <PokeItem key={pokemon.id} pokemon={pokemon} />
  ));

  return pokeList;
};

export default PokeList;
