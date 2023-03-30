import PokeItem from "./PokeItem";
import Grid from '../UI/Grid';

const PokeList = ({ pokemons }) => {
  const pokeList = pokemons.map((pokemon) => <PokeItem key={pokemon.name} pokemon={pokemon} />);

  return <Grid>{pokeList}</Grid>;
};

export default PokeList;
