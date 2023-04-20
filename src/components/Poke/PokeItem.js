import Card from "../UI/Card";
import Badge from "../UI/Badge";
import { POKEMON_IMAGE_URL } from "../../constants/image";
import { TYPE_COLORS } from "../../constants/color";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LIGHT_TEXT_COLOR } from "../../constants/color";

const IdTypography = styled.div`
  color: ${LIGHT_TEXT_COLOR};
`;

const NameTypography = styled.div`
  font-size: 1.5rem;
`;

const PokemonImg = styled.img`
  width: 15rem;
  margin: 0 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const PokeItem = ({ pokemon }) => {
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
      <StyledLink to={`/pokemon/${pokemon.id}`}>
        <Card>
          <IdTypography>{id}</IdTypography>
          <NameTypography>{name}</NameTypography>
          <div>{pokemonTypes}</div>
          <PokemonImg
            alt="pokemon-img"
            src={POKEMON_IMAGE_URL + pokemon.id + ".png"}
          />
        </Card>
      </StyledLink>
    </li>
  );
};

export default PokeItem;
