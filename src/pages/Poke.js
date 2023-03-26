import useHttp from "../hooks/use-http";
import { useState, useEffect } from "react";
import PokeList from "../components/Poke/PokeList";

const Poke = () => {
  const { sendRequest: fetchPokes } = useHttp();
  const [pokes, setPokes] = useState([]);

  const requestConfig = {
    url: "https://pokeapi.co/api/v2/pokemon",
    method: "GET",
  };

  useEffect(() => {
    fetchPokes(requestConfig, setPokes);
  }, [fetchPokes]);

  return <PokeList pokes={pokes} />;
};

export default Poke;
