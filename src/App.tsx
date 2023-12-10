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
      <DisplayUsers />
      {/* <TodoApp /> */}
      {/* <UserApp /> */}
      {/* <PokemonApp /> */}

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
