import Card from "../UI/Card";
import { POKEMON_IMAGE_URL } from "../../constants/image";

const PokeItem = ({ pokemon }) => {
  return (
    <li>
      <Card>
        <div>{pokemon.id}</div>
        <div>{pokemon.names[2].name}</div>
        <img style={{width:"18rem"}} alt="poke-img" src={POKEMON_IMAGE_URL + pokemon.id + ".png"} />
      </Card>
    </li>
  );
};

export default PokeItem;
