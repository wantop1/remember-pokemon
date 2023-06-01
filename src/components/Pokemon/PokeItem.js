import Card from "../UI/Card";
import Badge from "../UI/Badge";
import { TYPE_COLORS } from "../../constants/color";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LIGHT_TEXT_COLOR } from "../../constants/color";
import { useDispatch } from "react-redux";
import { scrollSliceActions } from "../../store/user/scrollSlice";

const IdTypography = styled.div`
  color: ${LIGHT_TEXT_COLOR};
`;

const NameTypography = styled.div`
  font-size: 1.5rem;
`;

const PokemonImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin: 0 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const PokeItem = ({ pokemon }) => {

  const dispatch = useDispatch();

  const id = "#" + pokemon.id.toString().padStart(3, "0");
  const name = pokemon.names[2].name;
  const image = pokemon.sprites.other["official-artwork"].front_default;
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
      <StyledLink to={`/pokemon/${pokemon.id}`} onClick={()=>dispatch(scrollSliceActions.reset())}>
        <Card hover={true}>
          <IdTypography>{id}</IdTypography>
          <NameTypography>{name}</NameTypography>
          <div>{pokemonTypes}</div>
          <PokemonImg alt="pokemon-img" src={image} />
        </Card>
      </StyledLink>
    </li>
  );
};

export default PokeItem;
