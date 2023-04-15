import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../utils/api";
import Badge from "../components/UI/Badge";
import { TYPE_COLORS } from "../constants/color";

const PokemonDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [isLoading,setIsLoading] = useState();
  const [pokemonInfo, setPokemonInfo] = useState({
    id: "",
    name: "",
    weight: "",
    height: "",
    description: "",
    types: [],
    stats: [],
    image : "",
  });

  useEffect(() => {
    async function fetchPokemon() {
      setIsLoading(true);
      try {
        const pokemonResponse = await getRequest(`/pokemon/${id}`);
        const pokemonSpeciesResponse = await getRequest(
          `/pokemon-species/${id}`
        );
        const pokemonData = pokemonResponse.data;
        const pokemonSpeciesData = pokemonSpeciesResponse.data;
        console.log(pokemonData)

        const koreaName = pokemonSpeciesData.names.find(name => name.language.name === "ko");
        const description = pokemonSpeciesData.flavor_text_entries.find(text => text.language.name === "ko");
        const image = pokemonData.sprites.other['official-artwork'].front_default;
        
        ;

        const pokemonTypes = pokemonData.types.map((type) => (
          <Badge
            key={type.slot}
            backgroundColor={TYPE_COLORS[type.type.name.toUpperCase()]}
          >
            {type.type.name.toUpperCase()}
          </Badge>
        ));

        const pokemonStats = pokemonData.stats.map((stat) => (
          <div key={stat.stat.name}>
            <span>{stat.stat.name} : </span>
            <span>{stat.base_stat}</span>
          </div>
        ));

        setPokemonInfo((prev)=>({
          ...prev,
          id : "#" + id.toString().padStart(3, "0"),
          name: koreaName?.name || pokemonSpeciesData.name,
          weight: pokemonData.weight /10 + 'kg',
          height: pokemonData.height /10 + 'm',
          description: description?.flavor_text || '정보 없음',
          types: pokemonTypes,
          stats : pokemonStats,
          image : image,
        }));

        setIsLoading(false);


      } catch (error) {
        console.log(`Error occurred while fetching Pokemon data: ${error}`);
      }
    }

    fetchPokemon();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const {name,weight,height,stats,types,description,image} = pokemonInfo;

  return (
    <div>
        <div>
          <div>{id}</div>
          <div>{name}</div>
          <div>{weight}</div>
          <div>{height}</div>
          <div>{stats}</div>
          <div>{types}</div>
          <div>{description}</div>
          <img alt="pokemon-img" src={image} />
        </div>
    </div>
  );
};

export default PokemonDetailPage;
