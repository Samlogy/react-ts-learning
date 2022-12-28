import { createContext } from "react";

const initialState = {
  first: "sam",
  last: "sam",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
