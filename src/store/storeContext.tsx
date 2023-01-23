import {
  useReducer,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";

interface Pokemon {
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
// utils methods (sort, filter) --> chain functions / reusable
class utils {
  pokemons: Pokemon[] = [];
  search: string = "";

  constructor(pokemons: Pokemon[], search: string) {
    this.pokemons = pokemons;
    this.search = search;
  }
  filtering() {
    this.pokemons = this.pokemons
      .filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(this.search.toLowerCase())
      )
      .slice(0, 20);
    return this;
  }
  sorting() {
    this.pokemons = [...this.pokemons].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return this;
  }
}

function usePokemonSource(): {
  pokemons: Pokemon[];
  search: string;
  setSearch: (search: string) => void;
} {
  type PokemonState = {
    pokemons: Pokemon[];
    search: string;
  };

  type PokemonAction =
    | { type: "setPokemon"; payload: Pokemon[] }
    | { type: "setSearch"; payload: string };

  const [{ pokemons, search }, dispatch] = useReducer(
    (state: PokemonState, action: PokemonAction) => {
      switch (action.type) {
        case "setPokemon":
          return { ...state, pokemons: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
      }
    },
    {
      pokemons: [],
      search: "",
    }
  );

  async function getPokemons() {
    try {
      const response = await fetch("/pokemons.json");
      const data = await response.json();
      // console.log("data: ", data);
      dispatch({
        type: "setPokemon",
        payload: data,
      });
    } catch (err) {
      console.log("err: ", err);
    }
  }
  useEffect(() => {
    getPokemons();
  }, []);

  const setSearch = useCallback((search: string) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  const filterSortPokemons = useMemo(() => {
    const instanceUtils = new utils(pokemons, search);
    const filteredPokemon = instanceUtils.filtering().sorting().pokemons;
    return filteredPokemon;
  }, [pokemons, search]);

  return { pokemons: filterSortPokemons, search, setSearch };
}

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}

export default {
  PokemonContext,
  PokemonProvider,
};
