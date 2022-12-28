import { useRef } from "react";
import "./App.css";

interface InputFieldProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  onHandleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  title,
  setTitle,
  onHandleAdd,
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        onHandleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Todo"
        value={title}
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
