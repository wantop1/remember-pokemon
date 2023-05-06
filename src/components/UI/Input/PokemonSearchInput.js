import useInput from "../../../hooks/use-input";
import BasicInput from "./BasicInput";
import BasicForm from "./BasicForm";
import { getPokemon } from "../../../apis/pokemon";
import { useState } from "react";
import SearchResult from "./SearchResult";

const PokemonSearchInput = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [isError,setIsError] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState({});
  const {
    value,
    isFocused,
    isTouched,
    valueChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    reset,
  } = useInput();

  const fetchPokemon = async (id) => {
    if(id.trim().length === 0) return;
    
    try {
      setIsLoading(true);
      const pokemonInfo = await getPokemon(id);
      setFilteredPokemon(pokemonInfo);
      setIsLoading(false);
      setIsError(null);
    } catch (error) {
        setIsError(error.response.status);
        return null;
    }
  };

  const onEnterHander = (event) => {
    event.preventDefault();
    valueChangeHandler(event);
    fetchPokemon(event.target.value);
  };

  return (
    <BasicForm>
      <BasicInput
        value={value}
        onChange={onEnterHander}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
      />
      <SearchResult
        id={filteredPokemon.id}
        name={filteredPokemon.name}
        image={filteredPokemon.image}
        isFocused={isFocused}
        isTouched={isTouched}
        isError={isError}
        reset={reset}
        value={value}
      />
    </BasicForm>
  );
};

export default PokemonSearchInput;
