import ReactDOM from 'react-dom';
import useInput from "../../../hooks/use-input";
import BasicInput from "./BasicInput";
import BasicForm from "./BasicForm";
import { fetchPokemon } from '../../../store/pokemon/filteredPokemonSlice';
import SearchResult from "./SearchResult";
import Backdrop from '../Backdrop';
import { useSelector,useDispatch } from 'react-redux';

const PokemonSearchInput = ({mobile,closeMenu}) => {
  const dispatch = useDispatch();
  const {filteredPokemon,isLoading,error} = useSelector((state)=>state.filteredPokemon);

  const {
    value,
    isFocused,
    isTouched,
    valueChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    reset,
  } = useInput();

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
        value={value}
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
        value={value}
        closeMenu={closeMenu}
      />
    </BasicForm>
  );
};

export default PokemonSearchInput;
