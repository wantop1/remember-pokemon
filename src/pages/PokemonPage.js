import { useState, useEffect } from "react";
import PokeList from "../components/Poke/PokeList";
import { getPokemonList } from "../apis/pokemon";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const data = await getPokemonList();
        setPokemons(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemonList();
  }, []);

  return pokemons && <PokeList pokemons={pokemons} />;
};

export default PokemonPage;
