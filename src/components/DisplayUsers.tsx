import { useEffect, useState } from "react";
import List from "./List";

type userType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};
export default function DisplayUsers() {
  const {users, onFilter, query} = useUser()
 
  
  return (
    <div>
      <h2> Users List </h2>
      <>
        <UserFilter data={query} setFilter={onFilter} />
        <List items={users} render={(user: userType) => user?.username} />
      </>
    </div>
  );
}

interface IFilter {
  data: string;
  setFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserFilter = ({data, setFilter}:IFilter) => {
  return(
    <div>
      <h3>Filter</h3>
      <input placeholder="Search..." value={data} onChange={setFilter} />
    </div>
  )
}


const useUser = () => {
  const [users, setUsers] = useState<userType[]>([]);

  // load
  async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: userType[] = await res.json();
    setUsers(data);
  }
  
  useEffect(() => {
    getUsers();
  }, []);


  // filter
  const [filter, setFilter] = useState<{query: string; result: userType[]}>({
    query: "",
    result: []
  })
  
  
  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === "") {
      setFilter({query: value , result: users })
      return;
    }

    const result = users.filter(user => user.username.toLowerCase().includes(value.toLowerCase()))
    setFilter({query: value , result })
  }
  
  const items = filter.result.length > 0 ? filter.result : []

  return {
    users: items, 
    onFilter, 
    query: filter.query
  }
}
