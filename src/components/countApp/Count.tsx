import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2> Count </h2>
      <button onClick={() => setCount((prev: number) => prev - 1)}>-</button>
      {count}
      <button onClick={() => setCount((prev: number) => prev + 1)}>+</button>
    </div>
  );
}
