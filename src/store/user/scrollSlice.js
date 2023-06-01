import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollY: 0,
  pokemonListScrollY :0
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScrollY : (state, action) => {
      state.scrollY = action.payload;
    },
    setPokemonListScrollY : (state, action) => {
        state.pokemonListScrollY = action.payload;
      },
    reset : (state) => {
      state.scrollY = 0;
    },
  },
});

export const scrollSliceActions = scrollSlice.actions;
export default scrollSlice.reducer;
