import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createSlice,
  configureStore,
  type PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<Pokemon[], undefined>({
      query: () => "pokemons.json",
    }),
  }),
});

// export const usePokemonQuery = pokemonApi.endpoints.getPokemon.useQuery;

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    pokemonApi: pokemonApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const selectSearch = (state: RootState) => state.search.search;

store.dispatch(pokemonApi.endpoints.getPokemon.initiate(undefined));

const filterSortPokemons = (pokemon: Pokemon[] | undefined, search: string) => {
  const filtered = (pokemon || [])
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 10);
  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
  return sorted;
};

export const selectPokemon = createSelector(
  (state: RootState) =>
    pokemonApi.endpoints.getPokemon.select(undefined)(state)?.data,
  (state: RootState) => selectSearch(state),
  (pokemon, search) => filterSortPokemons(pokemon, search)
);

export default {
  store,
  selectSearch,
  setSearch,
  selectPokemon,
};
