import { useEffect, useState } from "react";

import { typeTodo } from "../App";
import DATA from "../data.json";
import TodoList from "./TodoList";
import InputField from "./InputField";
import Filter from "./Filter";

type filterType = { query: string; result: typeTodo[] };

export default function TodoApp() {
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<Array<typeTodo>>([]);

  const [filter, setFilter] = useState<filterType>({
    query: "",
    result: [],
  });

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

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();

    const result: typeTodo[] = todos.filter((todo: typeTodo) =>
      todo.title.includes(value)
    );
    setFilter({ ...filter, query: value, result });
  };

  console.log("filter: ", filter);

  // load todos
  useEffect(() => {
    setTodos(DATA);
  }, []);

  return (
    <div>
      <h2> Todo App </h2>
      <InputField title={title} setTitle={setTitle} onHandleAdd={onHandleAdd} />
      <Filter filter={filter.query} onFilter={onFilter} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
