import { useState, useEffect, useMemo } from "react";
import { typeTodo } from "../App";

// custom hook --> fetch data from API
function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log("res: ", res);
        return res.json();
      })
      .then((json) => {
        console.log("res: ", json);
        dataSet(json);
        doneSet(true);
      })
      .catch((err) => console.log("err: ", err));
  }, [url]);

  return {
    data,
    done,
  };
}

export default function CustomHookCpt() {
  const { data } = useFetchData<typeTodo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const [search, setSearch] = useState<string>("");

  console.log("data: ", data);
  const result = useMemo(
    () => (data || []).filter((todo: typeTodo) => todo.title.includes(search)),
    [data, search]
  );

  return (
    <div>
      <h2>Search todo</h2>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {result.length &&
        result.map((item: typeTodo, idx: number) => (
          <p key={idx}> {item.title} </p>
        ))}
    </div>
  );
}
