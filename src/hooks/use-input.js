import { useReducer } from "react";
import { INPUT } from "../constants/actionTypes";
import { FOCUS } from "../constants/actionTypes";
import { BLUR } from "../constants/actionTypes";
import { RESET } from "../constants/actionTypes";

const initialInputState = {
  value: "",
  isFocused: false,
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === INPUT) {
    return {
      value: action.value,
      isFocused: state.isFocused,
      isTouched: state.isTouched,
    };
  }

  if (action.type === BLUR) {
    return { value: state.value, isFocused: state.isFocused, isTouched: true };
  }

  if (action.type === FOCUS) {
    return { value: state.value, isFocused: true, isTouched: state.isTouched };
  }

  if (action.type === RESET) {
    return { value: "", isFocused: false, isTouched: false };
  }

  return initialInputState;
};
const useInput = () => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueChangeHandler = (event) => {
    dispatch({ type: INPUT, value: event.target.value });
  };

  const inputFocusHandler = () => {
    dispatch({ type: FOCUS });
  };

  const inputBlurHandler = () => {
    dispatch({ type: BLUR });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return {
    value: inputState.value,
    isFocused: inputState.isFocused,
    isTouched: inputState.isTouched,
    valueChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
