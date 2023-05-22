import { createSlice } from "@reduxjs/toolkit";

const initialState = { pokemons: [], isLoading: null };
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokomons : (state,action)=>{
        state.pokemons = action.payload;
    },
    setIsLoading : (state,action)=> {
        state.isLoading = action.payload;
    }
  },
});

export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
