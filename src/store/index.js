import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon";

const store = configureStore({
  reducer: { pokemon: pokemonReducer },
});

export default store;
