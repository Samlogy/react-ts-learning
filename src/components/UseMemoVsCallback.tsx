import { useCallback, useMemo, useState } from "react";

const computeExpensiveValue = (count: number) => {
  // Display on console whenever the function gets call
  console.log("This function is running...");
  // Time Consuming Calcuation
  for (let i = 0; i < 1000000000; i++) {
    count += 1;
  }
  return count;
};
export default function UseMemoVsCallback() {
  const [counter1, setCounter1] = useState(0); // Counter 1
  const [counter2, setCounter2] = useState(0); // Counter 1
  // const expensiveValue = computeExpensiveValue(counter1); --> computed on every component render
  const expensiveValueMemoized = useMemo(
    () => computeExpensiveValue(counter1),
    [counter1]
  );
  const memoizedCallback = useCallback(
    () => computeExpensiveValue(counter1),
    [counter1]
  );
  const memoizedCallbackCalled = useCallback(computeExpensiveValue, [counter1]);

  console.log("memoized function: ", memoizedCallback); // return uncalled function (so i can call it later)
  console.log("memoized value: ", expensiveValueMemoized); // calls the function & returns it value
  console.log("memoized function called: ", memoizedCallbackCalled(counter1)); // calls the function & returns it value (similar to useMemo)

  // callback: returns a function which is referentially equal between renders
  // memo: calculate & returns a value which is referentially equal between renders
  // referential equal: values are equal do not trigger a re-render --> great for optimization

  return (
    <div>
      <div>
        <h2>Counter 1: {counter1}</h2>
        <button onClick={() => setCounter1(counter1 + 1)}>+</button>
      </div>
      <div>
        <h2>Counter 2: {counter2}</h2>
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
      </div>

      <div>
        <h2>Expensive Value Memoized:</h2>
        {expensiveValueMemoized}
      </div>
    </div>
  );
}
