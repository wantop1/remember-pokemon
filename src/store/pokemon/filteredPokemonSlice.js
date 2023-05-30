import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon } from "../../apis/pokemon";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (id) => {
    const pokemonData = await getPokemon(id);
    return pokemonData;
  }
);

const initialState = {
  filteredPokemon: {},
  isLoading: null,
  error: null,
  inputValue: "",
  isFocused: false,
  isTouched: false,
};

const filteredPokemonSlice = createSlice({
  name: "filteredPokemon",
  initialState,
  reducers: {
    input: (state, action) => {
      state.inputValue = action.payload;
    },
    focus: (state) => {
      state.isFocused = true;
    },
    blur: (state) => {
      state.isTouched = true;
    },
    reset: (state) => {
      state.inputValue = "";
      state.isFocused = false;
      state.isTouched = false;
    },
  },

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
