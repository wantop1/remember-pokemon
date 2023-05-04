import useInput from "../../../hooks/use-input";
import BasicInput from "./BasicInput";
import BasicForm from "./BasicForm";

const PokemonSearchInput = () => {
  const { value, valueChangeHandler, inputBlurHandler,reset} = useInput();

  const onSubmitHander = (event) => {
    event.preventDefault();

    console.log(value);
    reset();
  };

  return (
    <BasicForm value={value} onSubmit={onSubmitHander}>
      <BasicInput
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
      />
    </BasicForm>
  );
};

export default PokemonSearchInput;
