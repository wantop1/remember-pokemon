import Card from "../UI/Card";

const PokeItem = ({ pokemon }) => {
  return (
    <Card>
      <div>{pokemon.name}</div>
      <img alt="poke-img" src={pokemon.sprites.front_default} />
    </Card>
  );
};

export default PokeItem;
