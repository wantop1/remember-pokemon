import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getPokemon} from '../apis/pokemon';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

const PokemonDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [pokemonInfo, setPokemonInfo] = useState({
    id: "",
    name: "",
    weight: "",
    height: "",
    description: "",
    types: [],
    stats: [],
    image: "",
  });

  const [isLoading,setIsLoading] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setIsLoading(true);
        const pokemonInfo = await getPokemon(id);
        setPokemonInfo(pokemonInfo);
        setIsLoading(false);
      } catch (error) {
        console.log(`Error occurred while fetching Pokemon data: ${error}`);
      }
    }

    fetchPokemon();
  }, [id]);

  if(isLoading) {
    return <div>Loading...</div>
  }

  const { name, weight, height, stats, types, description, image } = pokemonInfo;

  const Statdata = {
    labels: stats.labels,
    datasets: [
      {
        label : 'label',
        data: stats.values,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div style={{width : '300px'}}>
      <Radar  data={Statdata}/>
      </div>
        <div>
          <div>{id}</div>
          <div>{name}</div>
          <div>{weight}</div>
          <div>{height}</div>
          <div>{types}</div>
          <div>{description}</div>
          <img alt="pokemon-img" src={image} />
        </div>
    </div>
  );
};

export default PokemonDetailPage;
