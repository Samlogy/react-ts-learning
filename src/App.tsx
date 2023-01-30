import "./App.css";
import DisplayUsers from "./components/DisplayUsers";
import Count from "./components/countApp/Count";
import TodoApp from "./components/todoApp/TodoApp";
import PokemonApp from "./components/pokemonApp/PokemonApp";

import ForwardRef from "./components/ForwardRef";
import UseRefCpt from "./components/hooks/UseRefCpt";
import UseEffectCpt from "./components/hooks/UseEffectCpt";
import UseReducerCpt from "./components/hooks/UseReducerCpt";
import UseContextCpt from "./components/hooks/UseContextCpt";
import CustomHookCpt from "./components/hooks/CustomHookCpt";
import { useCallback, useEffect, useRef, useState } from "react";
import UserApp from "./components/userApp/UserApp";
import UseTransitionCpt from "./components/hooks/useTransitionCpt";
import UseDefferedValue from "./components/hooks/UseDefferedValue";
import HOCcpt from "./components/HOCcpt";
import UseMemoVsCallback from "./components/hooks/UseMemoVsCallback";

export type typeTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  // const count = useRef<number>(1);

  // const Component = () => {
  //   return <>HOC Example</>;
  // };
  // const HocLoading = HOCcpt(Component);
  return (
    <div className="App">
      {/* <Count /> */}
      {/* <DisplayUsers /> */}
      {/* <TodoApp /> */}
      {/* <UserApp /> */}
      <PokemonApp />

      {/* <UseEffectCpt /> */}
      {/* <UseRefCpt /> */}
      {/* <UseReducerCpt /> */}
      {/* <UseContextCpt /> */}
      {/* <CustomHookCpt /> */}
      {/* <ForwardRef parentRef={count} /> */}
      {/* <UseTransitionCpt /> */}
      {/* <UseDefferedValue /> */}
      {/* <HocLoading isLoading={false} /> */}
      {/* <UseMemoVsCallback /> */}
    </div>
  );
}

/* Performence */
// Event Emitters: avoid passing data to cpt (multiple level hierarchy)
// Memoization: memoizeing fct / fct results that do not recalculate them every time (listing, heavy computing, ...)
// Virtualization: render only visible cpts on the screen rather than the entire cpt
// IndexedDB: store (a lot of data) locally inside the client's browser, and retrieve it quickily.
// Stream data: stream data rather than loading it all at once.
// Lazy loading: loads the needed cpts at a given time (large app with a lot of cpts)
// React Suspense: say how the app shoukd behave while the cpt is loading
// Concurrent rendering: perform multiple rendering tasks at the same time, rather than waiting for one task to complete before starting another. (deal a lot of data, )

// memo:
// prevent re-rendering the cpts children, by making shallow comparaison (===) between props (previous, current) state.
// it's still reduce performences due to the comparaison process.
// use this only when it's frequent / useless re-redenring.

// useMemo vs useCallback:
// they are both used for optimization since it uses memoizing operation

// callback:
// returns a function which is referentially equal between renders
// give conditions of re-calculation

// useMemo:
// calculte & returns value which referentially equal between renders
// give conditions of re-calculation
// referential equal: values are equal a do not trigger a re-render --> great form optimization

// differences:
// useMemo: calculate & returns the value and save it between re-renders - returns a value
// callback: do not call it save it for later uses between re-renders - return a function that can executed with an assigned value

// if i want to memoize a function save for later & do it call right away --> callback
// if i want to memoize a value (from a calculated function) / compute expensiveFunciton --> memo
