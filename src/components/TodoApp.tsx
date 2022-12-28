import { useEffect, useState } from "react";
import { typeTodo } from "../App";
import DATA from "../data.json";
import TodoList from "./TodoList";
import InputField from "./InputField";

export default function TodoApp() {
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<Array<typeTodo>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<typeTodo>>([]);

  const onHandleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (title) {
      const newTodo = {
        id: todos.length + 1,
        title,
        completed: false,
        userId: -1,
      };

      setTodos([newTodo, ...todos]);
      setTitle("");
    }
  };
  // console.log("t: ", todos);

  // load todos
  useEffect(() => {
    setTodos(DATA);
  }, []);

  return (
    <div>
      <h2> Todo App </h2>
      <InputField title={title} setTitle={setTitle} onHandleAdd={onHandleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
