import "./App.css";
import DisplayUsers from "./components/DisplayUsers";
import Count from "./components/countApp/Count";
import TodoApp from "./components/todoApp/TodoApp";
import ForwardRef from "./components/ForwardRef";
import UseRefCpt from "./components/UseRefCpt";
import UseEffectCpt from "./components/UseEffectCpt";
import UseReducerCpt from "./components/UseReducerCpt";
import UseContextCpt from "./components/UseContextCpt";
import CustomHookCpt from "./components/CustomHookCpt";
import { useCallback, useEffect, useRef, useState } from "react";
import UserApp from "./components/userApp/UserApp";
import UseTransitionCpt from "./components/useTransitionCpt";
import UseDefferedValue from "./components/UseDefferedValue";
import HOCcpt from "./components/HOCcpt";

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

      {/* <UseEffectCpt /> */}
      {/* <UseRefCpt /> */}
      {/* <UseReducerCpt /> */}
      {/* <UseContextCpt /> */}
      {/* <CustomHookCpt /> */}
      {/* <ForwardRef parentRef={count} /> */}
      {/* <UseTransitionCpt /> */}
      {/* <UseDefferedValue /> */}
      {/* <HocLoading isLoading={false} /> */}
    </div>
  );
}
