import { useRef, useState } from "react";

function UseRefCpt() {
  const [value, setValue] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  function focusInput(): void {
    inputRef.current?.focus();
  }
  function valueInput(): void {
    const value = inputRef.current?.value;
    setValue(value);
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => focusInput()}> focus</button>
      <button onClick={() => valueInput()}> value</button>
      <p>input value: {value} </p>
    </div>
  );
}

export default UseRefCpt;
