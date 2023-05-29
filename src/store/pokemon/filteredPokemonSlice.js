import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon } from "../../apis/pokemon";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (id) => {
    const pokemonData = await getPokemon(id);
    return pokemonData;
  }
);

const initialState = { filteredPokemon: {}, isLoading: null, error: null };

const filteredPokemonSlice = createSlice({
  name: "filteredPokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredPokemon = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const filteredPokemonActions = filteredPokemonSlice.actions;

export default filteredPokemonSlice.reducer;
