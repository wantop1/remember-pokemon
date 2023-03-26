import Card from "../UI/Card";
import PokeItem from "./PokeItem";

const PokeList = ({ pokes }) => {
  const pokeList = pokes.map((poke) => <PokeItem key={poke.name} poke={poke} />);

  return <ul>{pokeList}</ul>;
};

export default PokeList;
