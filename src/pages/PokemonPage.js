import { useState, useEffect } from "react";
import PokeList from "../components/Poke/PokeList";
import { getRequest } from "../utils/api";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokes() {
      try {
        // 포켓몬 이름 목록을 가져오는 GET 요청
        const pokemonNamesResponse = await getRequest("/pokemon?limit=50");
        const pokemonNames = pokemonNamesResponse.data.results;

        // 포켓몬 기본 정보를 가져오는 GET 요청
        const pokemonPromises = pokemonNames.map((pokemonName) =>
          getRequest(`/pokemon-species/${pokemonName.name}`)
        );

        // 포켓몬 한글 이름을 가져오는 GET 요청
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

        setPokemons(mergedData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokes();
  }, []);

  return pokemons && <PokeList pokemons={pokemons} />;
};

export default PokemonPage;
