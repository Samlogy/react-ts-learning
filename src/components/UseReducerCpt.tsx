import { useReducer } from "react";
const initialState = {
  counter: 100,
};

type ACTION_TYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };

function counterReducer(state: typeof initialState, action: ACTION_TYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case "reset":
      return {
        ...state,
        counter: 0,
      };
    default:
      throw new Error("Bad action");
  }
}

export default function UseReducerCpt() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = (num: number = 10): void => {
    if (typeof num != "number") return;
    dispatch({
      type: "increment",
      payload: num,
    });
  };
  const decrement = (num: number = 5): void => {
    if (typeof num != "number") return;
    dispatch({
      type: "decrement",
      payload: num,
    });
  };
  const reset = (): void => {
    dispatch({
      type: "reset",
    });
  };
  return (
    <div>
      <div>{state.counter}</div>
      <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
}
