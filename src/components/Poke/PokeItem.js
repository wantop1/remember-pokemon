import Card from "../UI/Card";
import Badge from "../UI/Badge";
import { POKEMON_IMAGE_URL } from "../../constants/image";
import { TYPE_COLORS } from "../../constants/color";

const PokeItem = ({ pokemon }) => {
  const pokemonTypes = pokemon.types.map((type) => (
    <Badge backgroundColor={TYPE_COLORS[type.type.name.toUpperCase()]}>
      {type.type.name.toUpperCase()}
    </Badge>
  ));

  return (
    <li>
      <Card>
        <div>{pokemon.id}</div>
        <div>{pokemon.names[2].name}</div>
        <div>{pokemonTypes}</div>
        <img
          style={{ width: "18rem" }}
          alt="poke-img"
          src={POKEMON_IMAGE_URL + pokemon.id + ".png"}
        />
      </Card>
    </li>
  );
};

export default PokeItem;
