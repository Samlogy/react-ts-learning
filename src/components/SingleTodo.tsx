import { typeTodo } from "../App";

interface ISingleTodoProps {
  todo: typeTodo;
  setTodos: React.Dispatch<React.SetStateAction<typeTodo[]>>;
}
export default function SingleTodo({ todo, setTodos }: ISingleTodoProps) {
  return (
    <div>
      <span> {todo?.id} </span>
      <span> {todo?.title} </span>
      <button onClick={() => {}}>Edit</button>
      <button onClick={() => {}}>Delete</button>
    </div>
  );
}
