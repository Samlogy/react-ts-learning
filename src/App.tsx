import { useEffect, useRef, useState } from "react";
import "./App.css";
import DisplayUsers from "./components/DisplayUsers";
import Count from "./components/Count";
import TodoApp from "./components/TodoApp";

export type typeTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  return (
    <div className="App">
      {/* <Count /> */}
      {/* <DisplayUsers />  */}
      <TodoApp />
    </div>
  );
}

export default App;
