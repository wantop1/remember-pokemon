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

export const getPokemonStats = (pokemonData) =>
  pokemonData.stats.map((stat) => (
    <div key={stat.stat.name}>
      <span>{stat.stat.name} : </span>
      <span>{stat.base_stat}</span>
    </div>
  ));
