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
  const [users, setUsers] = useState<userType[]>([]);

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: userType[] = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2> Users List </h2>
      <>
        {/* {users.map((user: userType, idx: number) => (
          <li key={idx}> {user?.username} </li>
        ))} */}
        <List items={users} render={(user: userType) => user?.username} />
      </>
    </div>
  );
}
