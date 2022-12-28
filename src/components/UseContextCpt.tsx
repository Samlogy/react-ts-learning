import { useState, useContext } from "react";

import UserContext, { UserState } from "../store";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

export default function UseContextCpt() {
  const [user, userSet] = useState<UserState>({
    first: "Sadek",
    last: "Kamal",
  });
  const initialContext = () =>
    userSet({
      first: "Sadek",
      last: "Kamal",
    });

  const changeContext = () =>
    userSet({
      first: "Sam",
      last: "Salim",
    });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={changeContext}>Change context</button>
      <button onClick={initialContext}>Initial context</button>
    </UserContext.Provider>
  );
}
