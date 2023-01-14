import { typeTodo } from "../App";

interface ISingleTodoProps {
  todo: typeTodo;
  setTodos: React.Dispatch<React.SetStateAction<typeTodo[]>>;
}
export default function SingleTodo({ todo, setTodos }: ISingleTodoProps) {
  return (
    <div className="todo-item">
      <span> {todo?.id} </span>
      <span className="todo-item--title"> {todo?.title} </span>
      <button onClick={() => {}}>Edit</button>
      <button onClick={() => {}}>Delete</button>
    </div>
  );
}
