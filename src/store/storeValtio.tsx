import { proxy } from "valtio";
import { derive } from "valtio/utils";

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

export const search = proxy({
  query: "",
});

const allPokemon = proxy({
  pokemons: [] as Pokemon[],
});

// derive data from multiple sources
export const pokemons = derive({
  list: (get) => {
    const query = get(search).query.toLowerCase();
    return get(allPokemon)
      .pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(query))
      .slice(0, 10)
      .sort((a, b) => a.name.localeCompare(b.name));
  },
});

fetch("/pokemons.json")
  .then((res: Response) => res.json())
  .then((pokemon: Pokemon[]) => {
    allPokemon.pokemons = pokemon;
  });

export default {
  search,
  pokemons,
};
