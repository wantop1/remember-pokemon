import Badge from "../components/UI/Badge";
import { TYPE_COLORS } from "../constants/color";

export const getPokemonTypes = (pokemonData) =>
  pokemonData.types.map((type) => (
    <Badge
      key={type.slot}
      backgroundColor={TYPE_COLORS[type.type.name.toUpperCase()]}
    >
      {type.type.name.toUpperCase()}
    </Badge>
  ));

export const getPokemonStats = (pokemonData) =>{
  const labels = [];
  const values = [];

  pokemonData.stats.forEach((stat) => {
    labels.push(stat.stat.name);
    values.push(stat.base_stat);
  });


  return {values : values, labels : labels};
}

