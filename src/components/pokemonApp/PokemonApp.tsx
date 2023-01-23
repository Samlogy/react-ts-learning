import { Provider } from "react-redux";

import SearchBox from "./SearchBox";
import PokemonList from "./PokemonList";
// import { PokemonProvider } from "../../store/storeContext";
import { store } from "../../store/storeReduxToolkit";

export default function PokemonApp() {
  // context logic (provider)
  // <PokemonProvider></PokemonProvider>

  // redux toolkit logic
  // <Provider store={store}></Provider>
  return (
    <div>
      <h2> Pokemon App </h2>
      <div className="mx-auto max-w-3xl">
        <Provider store={store}>
          <SearchBox />
          <PokemonList />
        </Provider>
      </div>
    </div>
  );
}

// state management (GLOBAL)
// context - zustand - redux --> uni-directional data flow (data flows only in one direction)
// valtio --> bi-directional data flow (data flows in two directions)
