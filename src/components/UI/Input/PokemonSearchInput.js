import ReactDOM from 'react-dom';
import BasicInput from "./BasicInput";
import BasicForm from "./BasicForm";
import { fetchPokemon } from '../../../store/pokemon/filteredPokemonSlice';
import SearchResult from "./SearchResult";
import Backdrop from '../Backdrop';
import { useSelector,useDispatch } from 'react-redux';
import { filteredPokemonActions } from '../../../store/pokemon/filteredPokemonSlice';

const PokemonSearchInput = ({mobile,closeMenu}) => {
  const dispatch = useDispatch();
  const {filteredPokemon,isLoading,error,inputValue,isFocused,isTouched} = useSelector((state)=>state.filteredPokemon);

  const valueChangeHandler = (event) => {
    dispatch(filteredPokemonActions.input(event.target.value));
  }

  const inputFocusHandler = () => {
    dispatch(filteredPokemonActions.focus());
  }

  const inputBlurHandler = () => {
    dispatch(filteredPokemonActions.blur());
  }

  const reset = () => {
    dispatch(filteredPokemonActions.reset());
  }

  const onFetchHandler = (event) => {    
    event.preventDefault();
    valueChangeHandler(event);

    setTimeout(() => {
      dispatch(fetchPokemon(event.target.value));
    }, 500);

  };

  return (
    <BasicForm mobile={mobile}>
      {!mobile && isFocused && ReactDOM.createPortal(<Backdrop onClick={reset}/>,document.getElementById("backdrop-root")) }
      <BasicInput
        value={inputValue}
        onChange={onFetchHandler}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
      />
      <SearchResult
        id={filteredPokemon.id}
        name={filteredPokemon.name}
        image={filteredPokemon.image}
        isFocused={isFocused}
        isTouched={isTouched}
        isError={error}
        isLoading={isLoading}
        reset={reset}
        value={inputValue}
        closeMenu={closeMenu}
      />
    </BasicForm>
  );
};

export default PokemonSearchInput;
