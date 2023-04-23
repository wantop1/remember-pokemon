import { getRequest } from "../utils/api";
import { getPokemonTypes, getPokemonStats } from "../utils/pokemon";

export const getPokemonList = async () => {
  try {
    const pokemonNamesResponse = await getRequest("/pokemon?limit=50");
    const pokemonNames = pokemonNamesResponse.data.results;

    const pokemonPromises = pokemonNames.map((pokemonName) =>
      getRequest(`/pokemon-species/${pokemonName.name}`)
    );

    const pokemonSpeciesPromises = pokemonNames.map((pokemonName) =>
      getRequest(`/pokemon/${pokemonName.name}`)
    );

    const pokemonResponses = await Promise.all(pokemonPromises);
    const pokemonSpeciesResponses = await Promise.all(pokemonSpeciesPromises);

    const mergedData = pokemonResponses.map((response, index) => {
      return {
        ...response.data,
        ...pokemonSpeciesResponses[index].data,
      };
    });

    return mergedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPokemon = async (id) => {
  const [pokemonResponse, pokemonSpeciesResponse] = await Promise.all([
    getRequest(`/pokemon/${id}`),
    getRequest(`/pokemon-species/${id}`),
  ]);

  const pokemonData = pokemonResponse.data;
  const pokemonSpeciesData = pokemonSpeciesResponse.data;

  const koreaName = pokemonSpeciesData.names.find(
    (name) => name.language.name === "ko"
  );
  const description = pokemonSpeciesData.flavor_text_entries.find(
    (text) => text.language.name === "ko"
  );
  const image = pokemonData.sprites.other["official-artwork"].front_default;

  return {
    id: "#" + id.toString().padStart(3, "0"),
    name: koreaName?.name || pokemonSpeciesData.name,
    weight: pokemonData.weight / 10 + "kg",
    height: pokemonData.height / 10 + "m",
    description: description?.flavor_text || "정보 없음",
    types: getPokemonTypes(pokemonData),
    stats: getPokemonStats(pokemonData),
    image: image,
  };
};
