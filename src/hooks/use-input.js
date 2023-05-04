import { useReducer } from "react";
import { INPUT } from "../constants/actionTypes";
import { BLUR } from "../constants/actionTypes";
import { RESET } from "../constants/actionTypes";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === INPUT) {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === BLUR) {
    return { value: state.value, isTouched: true };
  }

  if (action.type === RESET) {
    return { value: "", isTouched: false };
  }

  return initialInputState;
};
const useInput = () => {
  const valueChangeHandler = (event) => {
    dispatch({ type: INPUT, value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: BLUR });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  return {
    value: inputState.value,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
