import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import pokemonListReducer from "./pokemon/pokemonListSlice";
import filteredPokemonReducer from "./pokemon/filteredPokemonSlice";
import scrollReducer from './user/scrollSlice';

const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    filteredPokemon: filteredPokemonReducer,
    scroll : scrollReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
