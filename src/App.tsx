import { useEffect, useState } from "react";
import "./App.css";
import DisplayUsers from "./components/DisplayUsers";
import Count from "./components/Count";

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

function TodoApp() {
  const [todos, setTodos] = useState<Array<typeTodo>>([]);
  return (
    <div>
      <h2> Todo App </h2>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export type typeTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface ITodoListProps {
  todos: typeTodo[];
  setTodos: React.Dispatch<React.SetStateAction<typeTodo[]>>;
}
function TodoList({ todos, setTodos }: ITodoListProps) {
  return (
    <div>
      {Array.isArray(todos) && todos.length > 0
        ? todos?.map((todo: typeTodo) => (
            <SingleTodo key={todo.id} todo={todo} setTodos={setTodos} />
          ))
        : "Todos Empty !"}
    </div>
  );
}

interface ISingleTodoProps {
  todo: typeTodo;
  setTodos: React.Dispatch<React.SetStateAction<typeTodo[]>>;
}
function SingleTodo({ todo, setTodos }: ISingleTodoProps) {
  return (
    <div>
      <span> {todo?.id} </span>
      <span> {todo?.title} </span>
      <button onClick={() => {}}>Edit</button>
      <button onClick={() => {}}>Delete</button>
    </div>
  );
}
