import Card from "../UI/Card";
import Badge from "../UI/Badge";
import { POKEMON_IMAGE_URL } from "../../constants/image";
import { TYPE_COLORS } from "../../constants/color";
import styled from "styled-components";

const PokeItem = ({ pokemon }) => {
  const IdTypography = styled.div`
    color: #707070;
  `;

  const NameTypography = styled.div`
    font-size: 1.5rem;
  `;

  const PokemonImg = styled.img`
    width: 15rem;
  `;

  const id = "#" + pokemon.id.toString().padStart(3, "0");
  const name = pokemon.names[2].name;
  const pokemonTypes = pokemon.types.map((type) => (
    <Badge
      key={type.slot}
      backgroundColor={TYPE_COLORS[type.type.name.toUpperCase()]}
    >
      {type.type.name.toUpperCase()}
    </Badge>
  ));

  return (
    <li>
      <Card>
        <IdTypography>{id}</IdTypography>
        <NameTypography>{name}</NameTypography>
        <div>{pokemonTypes}</div>
        <PokemonImg
          alt="pokemon-img"
          src={POKEMON_IMAGE_URL + pokemon.id + ".png"}
        />
      </Card>
    </li>
  );
};

export default PokeItem;
