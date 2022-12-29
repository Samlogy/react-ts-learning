import { typeTodo } from "../App";
import SingleTodo from "./SingleTodo";

interface ITodoListProps {
  todos: typeTodo[];
  setTodos: React.Dispatch<React.SetStateAction<typeTodo[]>>;
}
export default function TodoList({ todos, setTodos }: ITodoListProps) {
  const isEmpty = (data: any): boolean => {
    if (Array.isArray(data) && data.length > 0) return false;
    if (!Array.isArray(data) && Object.values(data).length > 0) return false;
    if (!data) return false;
    return true;
  };
  return (
    <div>
      <h3>List</h3>
      <div>
        {!isEmpty(todos)
          ? todos?.map((todo: typeTodo) => (
              <SingleTodo key={todo.id} todo={todo} setTodos={setTodos} />
            ))
          : "Todos Empty !"}
      </div>
    </div>
  );
}
