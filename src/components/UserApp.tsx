import { useCallback, useEffect, useState } from "react";
import FilterUsers from "./FilterUsers";
import ListingUsers from "./ListingUsers";

export default function UserApp() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);

  const getUsers = useCallback(async () => {
    let res: any = await fetch("https://jsonplaceholder.typicode.com/users");
    res = await res.json();
    setUsers(res);
    setSearch(res);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <FilterUsers users={users} setSearch={setSearch} />
      <ListingUsers search={search} />
    </div>
  );
}
