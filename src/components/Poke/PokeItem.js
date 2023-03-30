import Card from "../UI/Card";

const PokeItem = ({ pokemon }) => {
  return (
    <li>
      <Card>
        <div>{pokemon.name}</div>
        <div>{pokemon.order}</div>
        <img alt="poke-img" src={pokemon.sprites.front_default} />
      </Card>
    </li>
  );
};

export default PokeItem;
