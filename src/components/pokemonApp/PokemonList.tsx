import { useSelector } from "react-redux";
// import { useSnapshot } from "valtio";

// import { usePokemon } from "../../store/storeContext";
// import { usePokemon } from "../../store/StoreZustand";
import { selectPokemon } from "../../store/storeReduxToolkit";
// import { pokemons } from "../../store/storeValtio";

export default function PokemonList() {
  // context logic
  // const { pokemons } = usePokemon();

  // zustand logic
  // const pokemons = usePokemon((state) => state.pokemons);

  // redux tool kit logic
  const pokemons = useSelector(selectPokemon);

  // const snap: pokemon = useSnapshot(pokemons);
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemons.map((pokemon) => (
        <li
          key={pokemon.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {pokemon.name}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
