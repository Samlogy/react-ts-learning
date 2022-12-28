import "./App.css";
import DisplayUsers from "./components/DisplayUsers";
import Count from "./components/Count";
import TodoApp from "./components/TodoApp";
import UseRefCpt from "./components/UseRefCpt";
import UseEffectCpt from "./components/UseEffectCpt";
import UseReducerCpt from "./components/UseReducerCpt";
import UseContextCpt from "./components/UseContextCpt";
import CustomHookCpt from "./components/CustomHookCpt";

export type typeTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  return (
    <div className="App">
      {/* <Count /> */}
      {/* <DisplayUsers /> */}
      {/* <TodoApp /> */}
      {/* <UseEffectCpt /> */}
      {/* <UseRefCpt /> */}
      {/* <UseReducerCpt /> */}
      {/* <UseContextCpt /> */}
      <CustomHookCpt />
    </div>
  );
}
