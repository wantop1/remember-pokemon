import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonList} from "../../apis/pokemon";
import { FETCH_LIMIT_NUMBER } from "../../constants/number";

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchPokemonList",
  async (offset) => {
    const pokemonsData = await getPokemonList(offset);
    return pokemonsData;
  }
);

const initialState = { pokemons: [], offset:0, isLoading: null, error: null };

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemons = state.pokemons.concat(action.payload);
        state.offset += FETCH_LIMIT_NUMBER;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const pokemonListActions = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
