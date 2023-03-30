import PokeItem from "./PokeItem";

const PokeList = ({ pokemons }) => {
  const pokeList = pokemons.map((pokemon) => <PokeItem key={pokemon.name} pokemon={pokemon} />);

  return <ul>{pokeList}</ul>;
};

export default PokeList;
