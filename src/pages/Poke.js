import { useState, useEffect } from "react";
import PokeList from "../components/Poke/PokeList";
import { getRequest } from "../utils/api";

const Poke = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokes() {
      try {
        // 포켓몬 이름 목록을 가져오는 GET 요청
        const pokemonNamesResponse = await getRequest("/pokemon");
        const pokemonNames = pokemonNamesResponse.data.results;

        // 각각의 포켓몬 정보를 가져오는 GET 요청
        const pokemonPromises = pokemonNames.map((pokemonName) =>
          getRequest(`/pokemon/${pokemonName.name}`)
        );

        const pokemonResponses = await Promise.all(pokemonPromises);
        const pokemons = pokemonResponses.map(
          (pokemonResponse) => pokemonResponse.data
        );

        setPokemons(pokemons);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokes();
  }, []);

  return pokemons && <PokeList pokemons={pokemons} />;
};

export default Poke;
