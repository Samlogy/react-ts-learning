import create from "zustand";

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
interface usePokemonProps {
  pokemons: Pokemon[];
  allPokemon: Pokemon[];
  setAllPokemon: (pokemons: Pokemon[]) => void;
  search: string;
  setSearch: (search: string) => void;
}

// filter & sort
const filterPokemons = (pokemons: Pokemon[], search: string) => {
  return pokemons
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 10);
};
const sortPokemons = (pokemons: Pokemon[]) => {
  return pokemons.sort((a, b) => a.name.localeCompare(b.name));
};

const searchAndSortPokemon = (pokemons: Pokemon[], search: string) => {
  const filteredPokemons = filterPokemons(pokemons, search);
  const sortedPokemons = sortPokemons(filteredPokemons);

  return sortedPokemons;
};

const setSearch = (set: any, get: any, search: string) => {
  set({ search, pokemons: searchAndSortPokemon(get().allPokemon, search) });
};
const setAllPokemon = (set: any, get: any, pokemons: Pokemon[]) => {
  set({
    allPokemon: pokemons,
    pokemons: searchAndSortPokemon(pokemons, get().search),
  });
};

export const usePokemon = create<usePokemonProps>((set, get) => ({
  pokemons: [],
  allPokemon: [],
  search: "",
  setSearch: (search) => setSearch(set, get, search),
  setAllPokemon: (pokemons) => setAllPokemon(set, get, pokemons),
}));

function getPokemons() {
  fetch("/pokemons.json")
    .then((res: Response) => res.json())
    .then((pokemons: Pokemon[]) => {
      usePokemon.getState().setAllPokemon(pokemons);
    });
}

getPokemons();

export default {
  usePokemon,
};
