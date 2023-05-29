import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import pokemonListReducer from "./pokemon/pokemonListSlice";
import filteredPokemonReducer from "./pokemon/filteredPokemonSlice";
const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    filteredPokemon: filteredPokemonReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
