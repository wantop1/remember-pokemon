import ReactDOM from 'react-dom';
import useInput from "../../../hooks/use-input";
import BasicInput from "./BasicInput";
import BasicForm from "./BasicForm";
import { getPokemon } from "../../../apis/pokemon";
import { useState } from "react";
import SearchResult from "./SearchResult";
import Backdrop from '../Backdrop';

const PokemonSearchInput = ({mobile,closeMenu}) => {
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
    <BasicForm mobile={mobile}>
      {!mobile && isFocused && ReactDOM.createPortal(<Backdrop onClick={reset}/>,document.getElementById("backdrop-root")) }
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
        closeMenu={closeMenu}
      />
    </BasicForm>
  );
};

export default PokemonSearchInput;