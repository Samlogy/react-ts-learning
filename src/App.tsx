import "./App.css";
import DisplayUsers from "./components/DisplayUsers";
import Count from "./components/Count";
import TodoApp from "./components/TodoApp";
import ForwardRef from "./components/ForwardRef";
import UseRefCpt from "./components/UseRefCpt";
import UseEffectCpt from "./components/UseEffectCpt";
import UseReducerCpt from "./components/UseReducerCpt";
import UseContextCpt from "./components/UseContextCpt";
import CustomHookCpt from "./components/CustomHookCpt";
import { useRef } from "react";

export type typeTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const count = useRef<number>(1);
  return (
    <div className="App">
      {/* <Count /> */}
      {/* <DisplayUsers /> */}
      <TodoApp />
      {/* <UseEffectCpt /> */}
      {/* <UseRefCpt /> */}
      {/* <UseReducerCpt /> */}
      {/* <UseContextCpt /> */}
      {/* <CustomHookCpt /> */}
      <ForwardRef parentRef={count} />
    </div>
  );
}
